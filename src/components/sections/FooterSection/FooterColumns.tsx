import React from 'react';
import { FOOTER_DATA } from './constants';
import FooterColumn from './FooterColumn';

const FooterColumns = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
      {FOOTER_DATA.map((column, index) => (
        <div key={index} className="text-center md:text-left">
          <FooterColumn
            title={column.title}
            items={column.items}
          />
        </div>
      ))}
    </div>
  );
};

export default FooterColumns;