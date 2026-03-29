"use client"
import React, { useEffect, useState, memo } from 'react';

type IconType = 'figma' | 'stripe' | 'vercel' | 'wordpress' | 'framer' | 'sanity';
type GlowColor = 'cyan' | 'purple';

interface SkillIconProps { type: IconType }
interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}
interface OrbitingSkillProps { config: SkillConfig; angle: number }
interface GlowingOrbitPathProps { radius: number; glowColor?: GlowColor; animationDelay?: number }

const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  figma: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 3.332 3.332 3.333 3.333 0 0 0 3.332-3.332V8.668zm0 0a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666z" fill="#F24E1E"/>
      </svg>
    ),
    color: '#F24E1E'
  },
  stripe: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" fill="#635BFF"/>
      </svg>
    ),
    color: '#635BFF'
  },
  vercel: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="#ffffff"/>
      </svg>
    ),
    color: '#ffffff'
  },
  wordpress: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M21.469 6.825c.61 1.568.946 3.28.946 5.175 0 3.978-2.146 7.457-5.338 9.36L21.469 6.825zm-3.008 0c.51 1.364.787 2.842.787 4.371 0 .786-.075 1.556-.216 2.302l-2.905 8.412c2.79-1.7 4.67-4.79 4.67-8.316 0-2.44-.868-4.681-2.336-6.769zm-8.961-.3C9.5 6.525 9.5 6.527 9.5 6.529c0-.003.002-.006.003-.009l-.003.005zm0 0c0-.007.003-.013.005-.02l-.005.02zm11.5.3zM12 2.252c5.514 0 9.998 4.484 9.998 9.998S17.514 22.248 12 22.248 2.002 17.764 2.002 12 6.486 2.252 12 2.252zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-5.925 5.925c1.588-1.587 3.77-2.567 6.175-2.567.806 0 1.586.098 2.33.278L9.22 14.316 5.887 5.86c.057-.065.118-.128.188-.187v.252zm-1.45 1.45c-.003.004-.005.008-.008.011l.008-.011zm.017-.02c-.006.007-.012.014-.017.02l.017-.02zm-.025.03C3.525 8.735 2.58 10.253 2.58 12c0 3.544 2.271 6.556 5.425 7.658L3.617 7.385zm1.47 14.032L9.96 12.86l3.257 8.945c-1.03.284-2.118.437-3.237.437-1.38 0-2.703-.248-3.925-.698zm5.73.42l3.086-8.966 3.086 8.42c-.003.006-.007.011-.01.016l-6.162.53z" fill="#21759B"/>
      </svg>
    ),
    color: '#21759B'
  },
  framer: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF"/>
      </svg>
    ),
    color: '#0055FF'
  },
  sanity: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M13.868 0C18.302.01 21.96 3.65 21.97 8.082c0 2.577-1.204 4.879-3.074 6.39v.01H18.9l-4.26-2.823V8.082c-.01-1.913-1.563-3.456-3.476-3.456-.663 0-1.29.192-1.82.52L6.084 2.348A8.06 8.06 0 0 1 13.868 0zM9.74 15.928v3.59L6.084 21.65V18.06l3.656-2.13zm-3.656 5.722L10.13 24H6.084v-2.35zm7.904-9.483 4.14 2.747a8.06 8.06 0 0 1-4.14 1.13v-3.877zm-7.904-7.52 4.26 2.824c-.046.246-.072.5-.072.754v.378H6.084v-3.956zm0 4.912h4.188v2.956H6.084v-2.956z" fill="#F03E2F"/>
      </svg>
    ),
    color: '#F03E2F'
  },
};

const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

const skillsConfig: SkillConfig[] = [
  { id: 'figma',     orbitRadius: 100, size: 40, speed: 1,    iconType: 'figma',     phaseShift: 0,                    glowColor: 'cyan',   label: 'Figma' },
  { id: 'stripe',    orbitRadius: 100, size: 45, speed: 1,    iconType: 'stripe',    phaseShift: (2 * Math.PI) / 3,    glowColor: 'cyan',   label: 'Stripe' },
  { id: 'vercel',    orbitRadius: 100, size: 40, speed: 1,    iconType: 'vercel',    phaseShift: (4 * Math.PI) / 3,    glowColor: 'cyan',   label: 'Vercel' },
  { id: 'wordpress', orbitRadius: 180, size: 50, speed: -0.6, iconType: 'wordpress', phaseShift: 0,                    glowColor: 'purple', label: 'WordPress' },
  { id: 'framer',    orbitRadius: 180, size: 45, speed: -0.6, iconType: 'framer',    phaseShift: (2 * Math.PI) / 3,    glowColor: 'purple', label: 'Framer' },
  { id: 'sanity',    orbitRadius: 180, size: 40, speed: -0.6, iconType: 'sanity',    phaseShift: (4 * Math.PI) / 3,    glowColor: 'purple', label: 'Sanity CMS' },
];

const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;
  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full p-2 bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg'}`}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan:   { primary: 'rgba(6, 182, 212, 0.4)',   secondary: 'rgba(6, 182, 212, 0.2)',   border: 'rgba(6, 182, 212, 0.3)' },
    purple: { primary: 'rgba(147, 51, 234, 0.4)',  secondary: 'rgba(147, 51, 234, 0.2)',  border: 'rgba(147, 51, 234, 0.3)' }
  };
  const colors = glowColors[glowColor];

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{ width: `${radius * 2}px`, height: `${radius * 2}px`, animationDelay: `${animationDelay}s` }}
    >
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
          boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
          animationDelay: `${animationDelay}s`,
        }}
      />
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: `1px solid ${colors.border}`, boxShadow: `inset 0 0 20px ${colors.secondary}` }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// ── Static grid fallback (mobile + prefers-reduced-motion) ────────────────────

function StaticSkillGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 py-8 max-w-sm mx-auto">
      {skillsConfig.map((config) => {
        const IconComponent = iconComponents[config.iconType]?.component;
        return (
          <div
            key={config.id}
            className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-800/60 border border-white/10"
          >
            <div
              className="w-10 h-10 p-2 rounded-full bg-gray-700/80 flex items-center justify-center"
              style={{ boxShadow: `0 0 12px ${iconComponents[config.iconType]?.color}30` }}
            >
              {IconComponent && <IconComponent />}
            </div>
            <span className="text-xs text-gray-300 text-center leading-tight font-medium">
              {config.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

const CONTENT_DIAMETER = 410;

export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Detect prefers-reduced-motion once on mount
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(Math.min(1, el.offsetWidth / CONTENT_DIAMETER));
    update();
    let debounceTimer: ReturnType<typeof setTimeout>;
    const debouncedUpdate = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(update, 100);
    };
    window.addEventListener('resize', debouncedUpdate);
    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener('resize', debouncedUpdate);
    };
  }, []);

  // Pause the rAF loop when the component is scrolled out of view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Skip animation entirely if user prefers reduced motion
    if (prefersReducedMotion || isPaused || !isVisible) return;
    let animationFrameId: number;
    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [prefersReducedMotion, isPaused, isVisible]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100, glowColor: 'cyan',   delay: 0   },
    { radius: 180, glowColor: 'purple', delay: 1.5 },
  ];

  return (
    <div className="hidden md:flex w-full items-center justify-center overflow-hidden">
      {/* Animated orbiting version — desktop only, hidden on mobile */}
      {!prefersReducedMotion && (
        <div
          ref={containerRef}
          className="relative w-[450px] h-[450px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{ transform: `scale(${scale})` }}>
            {/* Central icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10 relative shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#9333EA" />
                    </linearGradient>
                  </defs>
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
            </div>

            {orbitConfigs.map((config) => (
              <GlowingOrbitPath key={`path-${config.radius}`} radius={config.radius} glowColor={config.glowColor} animationDelay={config.delay} />
            ))}

            {skillsConfig.map((config) => {
              const angle = time * config.speed + (config.phaseShift || 0);
              return <OrbitingSkill key={config.id} config={config} angle={angle} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
