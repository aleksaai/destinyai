import type { ComponentType } from 'react';

export interface Service {
  title: string;
  description: string;
  visual: ComponentType;
}