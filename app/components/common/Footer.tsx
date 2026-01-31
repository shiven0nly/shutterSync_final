import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = [
    { id: 'footer_about', label: 'About', href: '#about' },
    { id: 'footer_portfolio', label: 'Portfolio', href: '#work' },
    { id: 'footer_services', label: 'Activities', href: '#services' },
    { id: 'footer_photowalk', label: 'Photowalk', href: '#photowalk' },
    { id: 'footer_contact', label: 'Join', href: '#join' },
  ];

  const socialLinks = [
    { id: 'social_instagram', icon: 'CameraIcon', href: '#', label: 'Instagram' },
    { id: 'social_twitter', icon: 'HashtagIcon', href: '#', label: 'Twitter' },
    { id: 'social_behance', icon: 'SwatchIcon', href: '#', label: 'Behance' },
  ];

  return (
    <footer className="bg-background border-t border-white/[0.08] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/homepage" className="text-2xl font-serif font-semibold text-white tracking-tight">
              ShutterSync
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] uppercase tracking-[0.2em]">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="text-white/60 hover:text-white transition-colors"
              >
                <Icon name={social.icon as any} size={18} variant="outline" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
          <span>© {currentYear} ShutterSync. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}