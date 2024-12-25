import React from 'react';

interface CompanyLogoProps {
  logo: string;
  company: string;
}

export const CompanyLogo = ({ logo, company }: CompanyLogoProps) => {
  return (
    <div className="mb-6">
      <img 
        src={logo} 
        alt={`${company} logo`}
        className="h-10 w-auto object-contain" // Changed from h-24 to h-10 (150% smaller)
      />
    </div>
  );
};