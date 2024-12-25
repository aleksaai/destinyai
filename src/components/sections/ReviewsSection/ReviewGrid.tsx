import React from 'react';
import ReviewBox from './ReviewBox';
import { REVIEWS_DATA } from './constants';

const ReviewGrid = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {REVIEWS_DATA.map((review, index) => (
        <ReviewBox key={index} {...review} />
      ))}
    </div>
  );
}

export default ReviewGrid;