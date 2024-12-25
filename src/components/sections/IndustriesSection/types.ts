import type { LucideIcon } from 'lucide-react';

export interface Industry {
  title: string;
  icon: LucideIcon;
}

export interface IndustryFeatures {
  title: string;
  description: string;
  messageType: 'chat' | 'voice' | 'success';
}