import React from 'react';
import { cn } from '../../utils/cn';
import { scrollToSection } from '../../utils/smoothScroll';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'text-gray-300 hover:text-white',
        'transition-colors duration-300 ease-out',
        className
      )}
    >
      {children}
    </a>
  );
};

export default NavLink;