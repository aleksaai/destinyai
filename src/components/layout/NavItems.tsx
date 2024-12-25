import React from 'react';
import NavLink from '../ui/NavLink';
import GlassContainer from '../ui/GlassContainer';

export const NAV_ITEMS = [
  'Services',
  'Process',
  'Industries',
  'Reviews',
  'Team',
  'Contact',
  'FAQ'
] as const;

const NavItems = () => {
  return (
    <GlassContainer className="hidden md:block">
      <div className="flex items-center space-x-8">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </NavLink>
        ))}
      </div>
    </GlassContainer>
  );
};

export default NavItems;