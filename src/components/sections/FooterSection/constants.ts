import { Mail, Phone, Linkedin, Youtube, Instagram } from 'lucide-react';
import type { FooterColumn } from './types';

export const FOOTER_DATA: FooterColumn[] = [
  {
    title: 'About Us',
    items: [
      {
        label: 'support@destinymedia.de',
        href: 'mailto:support@destinymedia.de',
        icon: Mail
      },
      {
        label: '+49 151 41310845',
        href: 'tel:+4915141310845',
        icon: Phone
      }
    ]
  },
  {
    title: 'Links',
    items: [
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Industries', href: '#industries' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Blog', href: '/blog' }
    ]
  },
  {
    title: 'Social Media',
    items: [
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/destinyy',
        icon: Linkedin,
        external: true
      },
      {
        label: 'Youtube',
        href: 'https://www.youtube.com/@aleksaai7',
        icon: Youtube,
        external: true
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/destiny.gpt',
        icon: Instagram,
        external: true
      }
    ]
  },
  {
    title: 'Legal',
    items: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Privacy Policy', href: '/privacy' }
    ]
  }
] as const;