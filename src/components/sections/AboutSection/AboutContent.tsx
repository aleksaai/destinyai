import React from 'react';

const AboutContent = () => {
  return (
    <div className="max-w-3xl mx-auto mt-6 px-4 md:px-0">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-normal md:leading-normal lg:leading-normal tracking-normal text-center md:text-left">
        Hi, we're Destiny AI{' '}
        <span className="inline-block align-middle -translate-y-1">
          <img 
            src="https://i.postimg.cc/zDbtjL7d/Group-48101573-2.png" 
            alt="Star icon" 
            className="w-12 h-12 inline-block align-middle"
          />
        </span>
        {' '}We craft cutting edge AI solutions to make organizations more effective and competitive. We do so with a motivated team{' '}
        <span className="inline-flex items-center -space-x-4 translate-y-1">
          <img 
            src="https://i.postimg.cc/rF5fBvvx/123.png" 
            alt="Team member 1" 
            className="w-10 h-10 object-cover rounded-full border-2 border-black relative z-30"
          />
          <img 
            src="https://i.postimg.cc/jj3c6K70/125.png" 
            alt="Team member 2" 
            className="w-10 h-10 object-cover rounded-full border-2 border-black relative z-20"
          />
          <img 
            src="https://i.postimg.cc/50H3nGBH/126.png" 
            alt="Team member 3" 
            className="w-10 h-10 object-cover rounded-full border-2 border-black relative z-10"
          />
        </span>
        {' '}of 9 experts focused on building world-class solutions.
      </h2>
    </div>
  );
};

export default AboutContent;