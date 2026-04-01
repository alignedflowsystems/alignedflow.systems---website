"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { ElegantShape } from "@/components/ui/shape-landing-hero";

const aiTitles = ["more clients", "more bookings", "more sales", "more trust"];

export const PremiumHero = () => {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % aiTitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#030303]">
      {/* Subtle colour wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-cyan-500/[0.05] blur-3xl pointer-events-none" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-cyan-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-cyan-400/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-indigo-400/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Top & bottom fade overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex h-screen w-full items-center justify-center px-6 text-center">
        <div className="container mx-auto flex flex-col items-center gap-12 text-center">
          <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter font-normal">
            <span className="text-white">Websites that make coaches and creators get</span>
            <span className="relative flex w-full justify-center md:pb-4 md:pt-1">
              &nbsp;
              {aiTitles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold text-cyan-400"
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center mt-8">
            Fast, conversion-focused sites for wellness professionals - with a clear process and a fixed timeline.
          </p>

          <div className="flex flex-row gap-4 flex-wrap justify-center">
            <Button size="lg" className="gap-2 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white border-none" asChild>
              <Link href="/contact" aria-label="Get a quote for your website">
                Get a Quote <MoveRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" className="gap-2 rounded-full border-white/30 text-white hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-all duration-300" variant="outline" asChild>
              <Link href="#services">
                See Packages
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
