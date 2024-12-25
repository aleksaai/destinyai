import React from 'react';
import { Sparkles } from 'lucide-react';
import GlassLabel from '../../ui/GlassLabel';

const SectionLabel = () => {
  return (
    <GlassLabel>
      <Sparkles className="w-4 h-4 text-[#1DD3B0]" />
      <span className="ml-2">Services</span>
    </GlassLabel>
  );
};

export default SectionLabel;