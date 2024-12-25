import type { LucideIcon } from 'lucide-react';

export interface FooterItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  items: FooterItem[];
}