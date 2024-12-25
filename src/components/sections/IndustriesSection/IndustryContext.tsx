import React, { createContext, useContext, useState } from 'react';
import { INDUSTRIES_DATA } from './constants';

interface IndustryContextType {
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
}

const IndustryContext = createContext<IndustryContextType>({
  selectedIndustry: INDUSTRIES_DATA[0].title, // Set default to first industry
  setSelectedIndustry: () => {}
});

export const useIndustryContext = () => useContext(IndustryContext);

export const IndustryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES_DATA[0].title);

  return (
    <IndustryContext.Provider value={{ selectedIndustry, setSelectedIndustry }}>
      {children}
    </IndustryContext.Provider>
  );
};