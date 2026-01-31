'use client';

import { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TestimonialCardProps {
  image: string;
  alt: string;
  quote: string;
  name: string;
  role: string;
}

function TestimonialCard({ image, alt, quote, name, role }: TestimonialCardProps) {
  return (
    <div className="shrink-0 w-[350px] md:w-[450px] snap-center">
      <div className="glass-strong p-8 rounded-2xl h-full">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
            <AppImage src={image} alt={alt} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-lg font-serif text-white mb-1">{name}</h4>
            <p className="text-xs text-white/60 uppercase tracking-wider">{role}</p>
          </div>
        </div>
        <blockquote className="text-base text-zinc-300 font-light leading-relaxed italic">
          "{quote}"
        </blockquote>
      </div>
    </div>);

}

export default function TestimonialsSection() {
  const [isHydrated, setIsHydrated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || !sectionRef.current || !scrollContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      gsap.to(scrollContainer, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 20%',
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        },
        x: -scrollWidth,
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isHydrated]);

  const testimonials = [
    {
      id: 'member_elena',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bbd5111e-1763299373526.png",
      alt: 'Portrait of Elena Martinez',
      quote: 'Joining ShutterSync was the best decision for my photography journey. The collective growth and shared passion here are truly inspiring.',
      name: 'Elena Martinez',
      role: 'Landscape Photographer'
    },
    {
      id: 'member_michael',
      image: "https://images.unsplash.com/photo-1585076800172-98875d666c55",
      alt: 'Portrait of Michael Chen',
      quote: 'I came for the gear tips and stayed for the community. The photowalks have completely changed how I see the city through my lens.',
      name: 'Michael Chen',
      role: 'Street Photographer'
    },
    {
      id: 'member_sophia',
      image: "https://images.unsplash.com/photo-1626394025812-9ea4c8366931",
      alt: 'Portrait of Sophia Rodriguez',
      quote: 'Being part of this collective has given me the confidence to showcase my work. The feedback sessions are invaluable.',
      name: 'Sophia Rodriguez',
      role: 'Portrait Artist'
    },
    {
      id: 'member_james',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_136b16bec-1763291805870.png",
      alt: 'Portrait of James Wilson',
      quote: 'ShutterSync isn\'t just a club—it\'s a family of creatives. Every meetup is an opportunity to learn something new.',
      name: 'James Wilson',
      role: 'Documentary Photographer'
    },
    {
      id: 'member_aisha',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ee2bcef3-1763301295581.png",
      alt: 'Portrait of Aisha Kumar',
      quote: 'The collaborative energy here is unmatched. I\'ve grown more in six months with the club than in years on my own.',
      name: 'Aisha Kumar',
      role: 'Architectural Photographer'
    }];


  return (
    <section id="stories" ref={sectionRef} className="py-32 overflow-hidden bg-background border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-white/40" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400">
                Member Spotlight
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-white">
              What our members say
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
                }
              }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glass-strong transition-all"
              aria-label="Previous testimonial">

              <Icon name="ChevronLeftIcon" size={20} variant="outline" className="text-white" />
            </button>
            <button
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                }
              }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glass-strong transition-all"
              aria-label="Next testimonial">

              <Icon name="ChevronRightIcon" size={20} variant="outline" className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 px-6 lg:px-8 overflow-x-auto no-scrollbar snap-x snap-mandatory">

        {testimonials.map((testimonial) =>
          <TestimonialCard key={testimonial.id} {...testimonial} />
        )}
      </div>
    </section>);

}