import React from 'react';
import FeatureBox from './FeatureBox';
import { useIndustryContext } from './IndustryContext';
import { FEATURES_BY_INDUSTRY } from './features';

const FeatureBoxes = () => {
  const { selectedIndustry } = useIndustryContext();
  const features = FEATURES_BY_INDUSTRY[selectedIndustry] || FEATURES_BY_INDUSTRY.default;

  return (
    <div className="flex flex-col md:flex-row md:justify-center gap-8">
      {features.map((feature) => (
        <FeatureBox
          key={feature.title}
          {...feature}
        />
      ))}
    </div>
  );
};

export default FeatureBoxes;