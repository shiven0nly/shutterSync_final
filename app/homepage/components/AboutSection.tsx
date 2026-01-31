'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface PrincipleCardProps {
  icon: string;
  title: string;
  description: string;
}

function PrincipleCard({ icon, title, description }: PrincipleCardProps) {
  return (
    <div className="clay p-8 hover:scale-105 transition-transform duration-500">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
          <Icon name={icon as any} size={24} variant="outline" className="text-white" />
        </div>
        <h3 className="text-2xl font-serif text-white">{title}</h3>
      </div>
      <p className="text-sm text-zinc-400 font-light leading-relaxed">{description}</p>
    </div>
  );
}

export default function AboutSection() {
  const [isHydrated, setIsHydrated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.principle-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isHydrated]);

  const principles = [
    {
      id: 'principle_light',
      icon: 'SunIcon',
      title: 'Light',
      description: 'Mastering the interplay of light and shadow to create depth, mood, and emotion in every frame.',
    },
    {
      id: 'principle_composition',
      icon: 'ViewfinderCircleIcon',
      title: 'Composition',
      description: 'Crafting visual harmony through thoughtful arrangement of elements, leading the eye with intention.',
    },
    {
      id: 'principle_story',
      icon: 'BookOpenIcon',
      title: 'Story',
      description: 'Every photograph tells a story. We capture moments that resonate, connecting viewers to the narrative.',
    },
    {
      id: 'principle_emotion',
      icon: 'HeartIcon',
      title: 'Emotion',
      description: 'Evoking genuine feeling through authentic moments, preserving the raw essence of human experience.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 lg:px-8 bg-background border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 border border-white/20 text-[10px] tracking-[0.2em] uppercase text-white mb-6">
            Philosophy
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-6">
            Our Principles
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Four pillars that guide every photograph we create, ensuring each image carries meaning beyond the moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle) => (
            <div key={principle.id} className="principle-card">
              <PrincipleCard {...principle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}