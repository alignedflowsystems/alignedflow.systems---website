'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { Typewriter } from '@/components/ui/typewriter-text';

const navLinks = [
    { label: 'Home', href: '/#hero', page: false },
    { label: 'About', href: '/#about', page: false },
    { label: 'Services', href: '/#services', page: false },
    { label: 'Team', href: '/team', page: true },
    { label: 'Contact', href: '/contact', page: true },
];

export function Header() {
    const scrolled = useScroll(20);
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState<string>('hero');

    React.useEffect(() => {
        if (pathname !== '/') return;
        const sections = ['hero', 'services', 'about'];
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: '-40% 0px -55% 0px' }
            );
            observer.observe(el);
            return observer;
        });
        return () => observers.forEach((o) => o?.disconnect());
    }, [pathname]);

    const isActive = (link: typeof navLinks[0]) => {
        if (link.page) return pathname === link.href;
        return pathname === '/' && link.href === `/#${activeSection}`;
    };

    const handleNavClick = (href: string, page: boolean) => {
        setMenuOpen(false);
        // For page routes, let the browser navigate normally
        if (page) return;
        // If already on homepage, smooth-scroll to the section
        if (pathname === '/') {
            const hash = href.replace('/', '');
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        // Otherwise, let the browser navigate to /#section
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
                scrolled
                    ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3'
                    : 'bg-transparent py-5',
            )}
        >
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 items-center">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <a
                        href="/"
                        className="flex flex-col leading-tight text-cyan-400 tracking-tight font-bold"
                    >
                        <span className="text-lg">
                            <span className="text-cyan-400">
                                <Typewriter text="Aligned" speed={80} cursor="|" loop={false} />
                            </span>
                            <span className="text-white">
                                <Typewriter text="Flow" speed={80} cursor="|" loop={false} startDelay={560} />
                            </span>
                        </span>
                        <span className="text-sm font-semibold text-cyan-400/80 self-center">
                            <Typewriter text="Systems" speed={80} cursor="|" loop={false} startDelay={880} />
                        </span>
                    </a>
                </div>

                {/* Center: Nav links — always pinned to middle column */}
                <nav className="hidden md:flex items-center justify-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {
                                if (!link.page && pathname === '/') {
                                    e.preventDefault();
                                    handleNavClick(link.href, link.page);
                                }
                            }}
                            className={cn(
                                'text-sm font-medium transition-colors',
                                isActive(link)
                                    ? 'text-cyan-400'
                                    : 'text-white/80 hover:text-cyan-400'
                            )}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                {/* Mobile: empty center */}
                <div className="md:hidden" />

                {/* Right: CTA / mobile toggle */}
                <div className="flex items-center justify-end">
                    <a
                        href="/contact"
                        className="hidden md:inline-flex bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                    >
                        Get a Quote
                    </a>
                    <button
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-white"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <MenuToggleIcon open={menuOpen} className="w-5 h-5" duration={300} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={cn(
                    'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
                    menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                )}
            >
                <nav className="flex flex-col gap-1 px-4 pt-2 pb-4 bg-slate-900/98 backdrop-blur-md border-t border-white/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {
                                if (!link.page && pathname === '/') {
                                    e.preventDefault();
                                    handleNavClick(link.href, link.page);
                                }
                                setMenuOpen(false);
                            }}
                            className={cn(
                                'text-sm font-medium transition-colors py-2.5 px-2 rounded-lg hover:bg-white/5',
                                isActive(link)
                                    ? 'text-cyan-400'
                                    : 'text-white/80 hover:text-cyan-400'
                            )}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/contact"
                        className="mt-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors text-center"
                    >
                        Get a Quote
                    </a>
                </nav>
            </div>
        </header>
    );
}
