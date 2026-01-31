'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isHydrated]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'nav_about', label: 'About', href: '#about' },
    { id: 'nav_work', label: 'Work', href: '#work' },
    { id: 'nav_services', label: 'Activities', href: '#services' },
    { id: 'nav_stories', label: 'Stories', href: '#stories' },
    { id: 'nav_photowalk', label: 'Photowalk', href: '#photowalk' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/homepage" className="flex items-center gap-3 group">
              <span className="text-2xl font-serif font-semibold text-white tracking-tight group-hover:opacity-70 transition-opacity">
                ShutterSync
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks?.map((link) => (
                <a
                  key={link?.id}
                  href={link?.href}
                  className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 relative group"
                >
                  {link?.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              href="#join"
              className="hidden lg:inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] bg-white text-black px-6 py-3 hover:bg-white/90 transition-all"
            >
              Join Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden inline-flex items-center gap-2 glass px-4 py-2 rounded-sm text-white"
              aria-label="Toggle menu"
            >
              <Icon
                name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={20}
                variant="outline"
              />
              <span className="text-xs uppercase tracking-wider">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isHydrated && (
        <div
          className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <div className="flex flex-col h-full pt-28 pb-8 px-6">
            <nav className="flex-1">
              <div className="space-y-8">
                {navLinks?.map((link) => (
                  <a
                    key={link?.id}
                    href={link?.href}
                    onClick={toggleMenu}
                    className="block text-3xl font-serif text-white/80 hover:text-white transition-colors"
                  >
                    {link?.label}
                  </a>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Link
                  href="#join"
                  onClick={toggleMenu}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em]"
                >
                  Join the Collective
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}