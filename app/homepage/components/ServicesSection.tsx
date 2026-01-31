'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group relative glass p-8 rounded-2xl hover:glass-strong transition-all duration-500 hover:scale-105">
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Icon name="ArrowUpRightIcon" size={20} variant="outline" className="text-white" />
      </div>

      <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
        <Icon name={icon as any} size={28} variant="outline" className="text-white" />
      </div>

      <h3 className="text-2xl font-serif text-white mb-3">{title}</h3>
      <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">{description}</p>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={`feature_${index}`} className="flex items-center gap-2 text-xs text-white/60">
            <div className="w-1 h-1 rounded-full bg-white/40" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesSection() {
  const [isHydrated, setIsHydrated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isHydrated]);

  const services = [
    {
      id: 'activity_photowalks',
      icon: 'MapIcon',
      title: 'Photowalks',
      description: 'Explore the hidden gems of the city through our guided street photography walks.',
      features: ['Urban Exploration', 'Street Photography', 'Guided Routes', 'Social Mixers'],
    },
    {
      id: 'activity_workshops',
      icon: 'AcademicCapIcon',
      title: 'Workshops',
      description: 'Learn new techinques and master your craft with peer-led technical workshops.',
      features: ['Lighting Masterclass', 'Post-processing', 'Composition', 'Gear Reviews'],
    },
    {
      id: 'activity_exhibitions',
      icon: 'TrophyIcon',
      title: 'Exhibitions',
      description: 'Showcase your best work in our curated community galleries and public exhibitions.',
      features: ['Curated Galleries', 'Print Sales', 'Opening Nights', 'Member Spotlights'],
    },
    {
      id: 'activity_collaborations',
      icon: 'UserGroupIcon',
      title: 'Collaborations',
      description: 'Find partners for creative projects and experimental photography shoots.',
      features: ['Model Networking', 'Studio Access', 'Project Funding', 'Creative Swaps'],
    },
    {
      id: 'activity_critiques',
      icon: 'ChatBubbleLeftRightIcon',
      title: 'Feedback',
      description: 'Grow through constructive peer reviews and portfolio critique sessions.',
      features: ['Portfolio Review', 'Editing Advice', 'Concept Dev', 'Career Guidance'],
    },
    {
      id: 'activity_trips',
      icon: 'GlobeAltIcon',
      title: 'Club Trips',
      description: 'Join us for landscape and nature photography expeditions outside the city.',
      features: ['Nature Trekking', 'Overnight Stays', 'Vantage Points', 'Travel Diary'],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6 lg:px-8 bg-background border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 border border-white/20 text-[10px] tracking-[0.2em] uppercase text-white mb-6">
            Club Activities
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-6">
            What We Do
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A diverse range of collective activities designed to inspire, educate, and connect photographers of all levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}