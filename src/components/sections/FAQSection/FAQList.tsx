import React from 'react';
import FAQItem from './FAQItem';
import { FAQ_ITEMS } from './constants';

const FAQList = () => {
  return (
    <div className="space-y-6">
      {FAQ_ITEMS.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
};

export default FAQList;