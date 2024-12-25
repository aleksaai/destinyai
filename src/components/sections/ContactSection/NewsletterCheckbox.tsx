import React from 'react';
import { cn } from '@/utils/cn';

interface NewsletterCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const NewsletterCheckbox = ({ checked, onChange }: NewsletterCheckboxProps) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={cn(
            "peer sr-only" // Hide the default checkbox
          )}
        />
        <div className={cn(
          "w-4 h-4 rounded",
          "border border-zinc-800",
          "bg-[#0E0E0E]",
          "flex items-center justify-center",
          "transition-all duration-200",
          "group-hover:border-[#1DD3B0]/50",
          checked && "border-[#1DD3B0] bg-[#1DD3B0]/10",
        )}>
          {/* Custom checkmark */}
          <svg 
            className={cn(
              "w-2.5 h-2.5 text-[#1DD3B0]",
              "transition-all duration-200",
              checked ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
      </div>
      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
        Subscribe to newsletter
      </span>
    </label>
  );
};

export default NewsletterCheckbox;