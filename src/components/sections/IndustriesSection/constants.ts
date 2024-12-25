import { Building2, ShoppingBag, Home, Scale, Heart, Sparkles } from 'lucide-react';
import type { Industry } from './types';

export const INDUSTRIES_DATA: Industry[] = [
  {
    title: 'E-Commerce',
    icon: ShoppingBag
  },
  {
    title: 'Finance',
    icon: Building2
  },
  {
    title: 'Real Estate',
    icon: Home
  },
  {
    title: 'Legal',
    icon: Scale
  },
  {
    title: 'Healthcare',
    icon: Heart
  },
  {
    title: 'Beauty',
    icon: Sparkles
  }
] as const;