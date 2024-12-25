import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/90 backdrop-blur-sm rounded-xl border border-white/10">
      <Sparkles className="w-4 h-4 text-[#1DD3B0]" />
      <span className="text-sm font-medium bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
        {label}
      </span>
    </div>
  );
}

export default SectionLabel;