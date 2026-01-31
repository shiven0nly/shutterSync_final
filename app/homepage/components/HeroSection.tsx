'use client';

import { useEffect, useState, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import SplineRobot from '@/components/spline/Robot';
import GsapFillButton from '@/components/ui/GsapFillButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [showSpline, setShowSpline] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
    // Delay spline loading slightly for performance
    const timer = setTimeout(() => setShowSpline(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isHydrated || !heroRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      // Background scroll effect
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        filter: 'blur(8px) brightness(0.25)', // Reduced brightness for better legibility
        y: 40, // Reduced parallax to prevent disappearing
        scale: 1.15, // Increased scale to ensure coverage
      });

      // Animate items on load
      gsap.from('[data-animate]', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, [isHydrated]);


  return (
    <section ref={heroRef} className="relative min-h-[140vh] md:min-h-screen flex items-center overflow-hidden bg-black pb-32 pt-40">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/heroSectionbg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/20" /> {/* Extra dark layer */}
      </div>

      <div className="noise-overlay" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-10">
            <div data-animate>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-white/40" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400">
                  Photography Collective
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.85] tracking-tight mb-8">
                <span className="block font-serif">Capture</span>
                <span className="block italic text-zinc-500 font-light font-serif">Vision</span>
                <span className="block font-serif">Beyond</span>
                <span className="block font-serif">Lens</span>
              </h1>

              <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-md">
                A community of passionate visual storytellers exploring the art of photography through collective growth and exploration.
              </p>
            </div>

            <div className="flex flex-wrap gap-4" data-animate>
              <GsapFillButton variant="light" className="px-8 py-4 text-xs tracking-widest uppercase">
                Join the Club
              </GsapFillButton>
              <button className="px-8 py-4 text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors border-b border-white/0 hover:border-white/20">
                View Gallery
              </button>
            </div>

            {/* Stats Cards */}
            <div className="mt-8 grid grid-cols-3 gap-3" data-animate>
              <div className="clay rounded-2xl p-4 w-full bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="font-display text-xl text-white leading-none">24+</div>
                <div className="text-xs text-white/60 mt-1">Club shoots</div>
              </div>
              <div className="clay rounded-2xl p-4 w-full bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="font-display text-xl text-white leading-none">350+</div>
                <div className="text-xs text-white/60 mt-1">Members</div>
              </div>
              <div className="clay rounded-2xl p-4 w-full bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="font-display text-xl text-white leading-none">4</div>
                <div className="text-xs text-white/60 mt-1">Tracks</div>
              </div>
            </div>
          </div>

          {/* Right Column - Spline Robot Card */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative h-[480px] sm:h-[580px] lg:h-[680px] w-full group">
              {/* Outer Glow/Shadow */}
              <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute inset-0 rounded-[2.5rem] bg-white/5 border border-white/10" />

              <div
                className="clay rounded-[2.5rem] h-full w-full overflow-hidden relative border border-white/10 shadow-2xl"
                data-animate
              >
                {/* Background Overlay inside card */}
                <div className="absolute inset-0 z-0">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'linear-gradient(180deg, rgba(2,6,23,0.3), rgba(2,6,23,0.85)), url(https://images.unsplash.com/photo-1519183071298-a2962be96c27?auto=format&fit=crop&w=1800&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(0.1) contrast(1.1) saturate(0.9)',
                      opacity: 0.9,
                    }}
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.8)]" />
                </div>

                {/* Spline Robot Scene */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  {showSpline ? (
                    <SplineRobot className="w-full h-full scale-110" />
                  ) : (
                    <div className="w-full h-full grid place-items-center">
                      <div className="animate-pulse rounded-full w-12 h-12 border-2 border-white/10 border-t-white/40" />
                    </div>
                  )}
                </div>

                {/* Event Card at Bottom */}
                <div className="absolute inset-x-6 bottom-6 z-20">
                  <div className="clay rounded-3xl bg-black/45 border border-white/10 p-5 sm:p-6 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xl">
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">Upcoming Event</div>
                      <div className="font-serif italic text-xl text-white">Street Photo Walk</div>
                      <div className="text-sm text-zinc-400 font-light flex items-center gap-2 mt-2">
                        <Icon name="CalendarIcon" size={14} variant="outline" />
                        Saturday, 6:00 PM • Main Gate
                      </div>
                    </div>
                    <GsapFillButton variant="light" className="px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-bold">
                      RSVP
                    </GsapFillButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
