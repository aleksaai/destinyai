import React, { useEffect } from 'react';
import { Graph } from './Graph';
import { useGraphAnimation } from './useGraphAnimation';

interface AnimatedGraphProps {
  data: number[];
  highlightIndex: number;
  isActive: boolean;
  className?: string;
}

export const AnimatedGraph = ({
  data,
  highlightIndex,
  isActive,
  className
}: AnimatedGraphProps) => {
  const { progress, startAnimation, resetAnimation } = useGraphAnimation(data);

  useEffect(() => {
    if (isActive) {
      startAnimation();
    } else {
      resetAnimation();
    }
  }, [isActive]);

  return (
    <Graph
      data={data}
      highlightIndex={highlightIndex}
      highlightProgress={progress}
      className={className}
    />
  );
};