'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/use-scroll';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { Typewriter } from '@/components/ui/typewriter-text';

const navLinks = [
    { label: 'Home', href: '/#hero', page: false },
    { label: 'About', href: '/#about', page: false },
    { label: 'Services', href: '/#services', page: false },
    { label: 'Team', href: '/team', page: true },
    { label: 'Blog', href: '/blog', page: true },
    { label: 'Contact', href: '/contact', page: true },
];

export function Header() {
    const scrolled = useScroll(20);
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState<string>('hero');
    // `mounted` is false during SSR and flips to true after hydration.
    // Used to show static text on the server and start the Typewriter animation client-side.
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => { setMounted(true); }, []);

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
                    <Link
                        href="/"
                        className="flex flex-col leading-tight text-cyan-400 tracking-tight font-bold"
                        onClick={(e) => {
                            if (pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                    >
                        {/* The full text is rendered immediately on the server (and before JS runs)
                            to avoid layout shift (CLS). After hydration, the Typewriter component
                            takes over and replays the animation as progressive enhancement. */}
                        <span className="text-lg">
                            <span className="text-cyan-400">
                                {mounted ? (
                                    <Typewriter text="Aligned" speed={80} cursor="|" loop={false} />
                                ) : (
                                    <span>Aligned</span>
                                )}
                            </span>
                            <span className="text-white">
                                {mounted ? (
                                    <Typewriter text="Flow" speed={80} cursor="|" loop={false} startDelay={560} />
                                ) : (
                                    <span>Flow</span>
                                )}
                            </span>
                        </span>
                        <span className="text-sm font-semibold text-cyan-400/80 self-center">
                            {mounted ? (
                                <Typewriter text="Systems" speed={80} cursor="|" loop={false} startDelay={880} />
                            ) : (
                                <span>Systems</span>
                            )}
                        </span>
                    </Link>
                </div>

                {/* Center: Nav links - always pinned to middle column */}
                <nav aria-label="Main navigation" className="hidden md:flex items-center justify-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={isActive(link) ? 'page' : undefined}
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
                        </Link>
                    ))}
                </nav>
                {/* Mobile: empty center */}
                <div className="md:hidden" />

                {/* Right: CTA / mobile toggle */}
                <div className="flex items-center justify-end gap-2">
                    <Link
                        href="/estimate"
                        className="hidden md:inline-flex border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white/80 text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
                    >
                        Get Estimate
                    </Link>
                    <Link
                        href="/contact"
                        className="hidden md:inline-flex bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                    >
                        Get a Quote
                    </Link>
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
                aria-hidden={!menuOpen}
                className={cn(
                    'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
                    menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                )}
            >
                <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 pt-2 pb-4 bg-slate-900/98 backdrop-blur-md border-t border-white/10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            tabIndex={menuOpen ? undefined : -1}
                            aria-current={isActive(link) ? 'page' : undefined}
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
                        </Link>
                    ))}
                    <Link
                        href="/estimate"
                        tabIndex={menuOpen ? undefined : -1}
                        className="mt-2 border border-white/20 hover:border-cyan-400 hover:text-cyan-400 text-white/80 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Get Estimate
                    </Link>
                    <Link
                        href="/contact"
                        tabIndex={menuOpen ? undefined : -1}
                        className="mt-1 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors text-center"
                    >
                        Get a Quote
                    </Link>
                </nav>
            </div>
        </header>
    );
}
