import React from 'react';
import ProcessVisual from './ProcessVisual';
import ProcessText from './ProcessText';

const ProcessContent = () => {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-12 items-center">
      {/* Text content - centered on mobile */}
      <div className="text-center md:text-left">
        <ProcessText />
      </div>

      {/* Visual */}
      <div>
        <ProcessVisual />
      </div>
    </div>
  );
};

export default ProcessContent;