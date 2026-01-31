'use client';

import { useRef } from 'react';
import StarSys from '@/components/spline/StarSys';
import Icon from '@/components/ui/AppIcon';

export default function PhotowalkSection() {
    return (
        <section id="photowalk" className="relative min-h-screen py-32 px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden bg-black">
            {/* Star System Full Background */}
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none scale-110">
                <StarSys className="w-full h-full" />
            </div>

            {/* Gradient Overlay for legibility */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

            <div className="relative z-20 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20" data-animate>
                    <span className="inline-block py-1 px-3 border border-white/20 text-[10px] tracking-[0.3em] uppercase text-white/60 mb-6 backdrop-blur-md bg-white/5">
                        Collective Events
                    </span>
                    <h2 className="text-6xl md:text-8xl font-serif italic text-white mb-8 tracking-tight">
                        Next Photowalk
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Join our community for a guided exploration of urban landscapes and hidden artistic perspectives.
                    </p>
                </div>

                {/* Event Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Event Detail Card */}
                    <div className="clay rounded-[2.5rem] p-10 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden group">
                        {/* Decorative inner glow */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-1000" />

                        <div className="relative space-y-10">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-6">
                                    Capture the Moment
                                </h3>
                                <p className="text-zinc-400 text-base leading-relaxed font-light">
                                    Experience the thrill of street photography with our guided collective. Perfect for all skill levels from beginners to pros.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* Time Card */}
                                <div className="clay rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20">
                                        <Icon name="ClockIcon" size={18} variant="outline" className="text-blue-400" />
                                    </div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Time</p>
                                    <p className="text-xl font-medium text-white">8:00 AM</p>
                                </div>

                                {/* Location Card */}
                                <div className="clay rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20">
                                        <Icon name="MapPinIcon" size={18} variant="outline" className="text-purple-400" />
                                    </div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Meet At</p>
                                    <p className="text-xl font-medium text-white">Main Gate 2</p>
                                </div>
                            </div>

                            <button className="w-full px-8 py-5 bg-white text-black text-xs font-bold uppercase tracking-[0.3em] transition-all hover:bg-zinc-200 shadow-xl shadow-black/20 flex items-center justify-center gap-3">
                                RSVP for Event
                                <Icon name="ArrowRightIcon" size={16} variant="outline" />
                            </button>
                        </div>
                    </div>

                    {/* Secondary Info/Visual Card */}
                    <div className="hidden lg:block space-y-8">
                        <div className="clay rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-lg">
                            <h4 className="text-white font-serif italic text-xl mb-4">What to bring?</h4>
                            <ul className="space-y-3 text-zinc-400 text-sm font-light">
                                <li className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                                    Any camera (Mobile to Full-frame)
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                                    Comfortable walking shoes
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                                    Extra batteries and power bank
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                                    A curious perspective
                                </li>
                            </ul>
                        </div>

                        <div className="clay rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] text-white">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs text-white/60 tracking-wider">12+ members already joined</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
