"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

interface NumericStat {
  kind: "numeric";
  value: number;
  suffix: string;
  title: string;
}

interface TextStat {
  kind: "text";
  display: string;
  title: string;
}

type Stat = NumericStat | TextStat;

const stats: Stat[] = [
  { kind: "numeric", value: 5,  suffix: "+", title: "Years Experience"  },
  { kind: "text",    display: "< 3 Week",     title: "Average Delivery" },
  { kind: "text",    display: "24hr",          title: "Response Guarantee" },
  { kind: "numeric", value: 5,  suffix: "★", title: "Five-Star Reviews" },
];

function formatNumber(n: number): string {
  return n.toLocaleString("en-GB");
}

function CountUp({
  target,
  duration = 2000,
  trigger,
}: {
  target: number;
  duration?: number;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);

  return <>{formatNumber(count)}</>;
}

export function StatsCounter() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Company statistics"
      className="relative bg-cyan-700 overflow-hidden"
    >
      <div className="relative z-20 max-w-6xl mx-auto px-4 py-20">
        <motion.dl
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-0"
        >
          {stats.map((stat, i) => (
            <div key={stat.title} className="relative flex flex-col items-center text-center px-6">
              {/* Divider between stats on desktop */}
              {i < stats.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)",
                  }}
                />
              )}

              <dd
                className={`${cormorant.className} text-6xl md:text-7xl font-semibold leading-none tracking-tight text-white`}
              >
                {stat.kind === "numeric" ? (
                  <>
                    <CountUp target={stat.value} duration={2000} trigger={isInView} />
                    <span className="text-white/80">{stat.suffix}</span>
                  </>
                ) : (
                  <span>{stat.display}</span>
                )}
              </dd>

              <dt
                className={`${dmSans.className} mt-4 text-[0.75rem] font-medium uppercase tracking-[0.15em] text-cyan-100`}
              >
                {stat.title}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
