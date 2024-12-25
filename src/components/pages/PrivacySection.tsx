import React from 'react';
import { cn } from '@/utils/cn';

interface PrivacySectionProps {
  title: string;
  content?: string | string[];
  subsections?: {
    title: string;
    content: string | string[];
  }[];
}

const PrivacySection = ({ title, content, subsections }: PrivacySectionProps) => {
  const renderContent = (text: string | string[]) => {
    if (Array.isArray(text)) {
      return text.map((paragraph, index) => (
        <p key={index} className="leading-relaxed mb-4 last:mb-0">
          {paragraph}
        </p>
      ));
    }
    return <p className="leading-relaxed">{text}</p>;
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
        {title}
      </h2>
      
      {content && (
        <div className="text-gray-300 mb-6">
          {renderContent(content)}
        </div>
      )}

      {subsections && (
        <div className="space-y-6">
          {subsections.map((subsection, index) => (
            <div key={index}>
              <h3 className="text-white font-medium mb-2">
                {subsection.title}
              </h3>
              <div className="text-gray-300">
                {renderContent(subsection.content)}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PrivacySection;