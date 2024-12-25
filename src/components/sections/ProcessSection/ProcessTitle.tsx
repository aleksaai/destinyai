import React from 'react';

const ProcessTitle = () => {
  return (
    <div className="mt-8 mb-24">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
        Our process
      </h2>
      <div className="max-w-2xl">
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
          We start by analyzing your workflows to identify tasks AI{' '}
          <span className="text-white/40">
            can automate and optimize. Next, we develop and integrate AI solutions into your workflows.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProcessTitle;