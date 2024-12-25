import React from 'react';
import { cn } from '@/utils/cn';
import type { FooterItem } from './types';

interface FooterColumnProps {
  title: string;
  items: FooterItem[];
}

const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div>
      {/* Heading with larger size and grey line below */}
      <div className="pb-4 mb-6 border-b border-zinc-800">
        <h3 className="text-2xl md:text-3xl text-white font-medium">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={cn(
                "flex items-center justify-center md:justify-start gap-2",
                "text-gray-400 hover:text-white",
                "transition-colors duration-200"
              )}
            >
              {item.icon && <item.icon className="w-4 h-4" />}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;