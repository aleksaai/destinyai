import React from 'react';
import TeamMember from './TeamMember';

const TEAM_MEMBERS = [
  // First row
  [
    {
      name: 'Aleksa Spalevic',
      position: 'CEO',
      image: 'https://i.postimg.cc/yd4sbdXL/139.png',
      linkedInUrl: 'https://www.linkedin.com/in/aleksaspalevic/'
    },
    {
      name: 'Selim Disli',
      position: 'Developer',
      image: 'https://i.postimg.cc/Pr3hkKQp/140.png',
      linkedInUrl: 'https://www.linkedin.com/in/selim-can-disli-2b0a07296/'
    },
    {
      name: 'Maximilian Keiser',
      position: 'Front End Designer',
      image: 'https://i.postimg.cc/KvpBTrQt/140.png',
      linkedInUrl: 'https://www.linkedin.com/in/maximilian-keiser/'
    }
  ],
  // Second row
  [
    {
      name: 'Christina Cheng',
      position: 'Client Success',
      image: 'https://i.postimg.cc/FsjWyK79/Heading-2024-12-25-T120802-506.png'
    },
    {
      name: 'Aurélien Wilmes',
      position: 'Growth Partner',
      image: 'https://i.postimg.cc/wTv8FLY6/142.png',
      linkedInUrl: 'https://www.linkedin.com/in/aurelienwilmes/'
    },
    {
      name: 'Raphael Niklewitz',
      position: 'Growth Partner',
      image: 'https://i.postimg.cc/YSQJjxYx/141.png',
      linkedInUrl: 'https://www.linkedin.com/in/raphael-niklewitz/'
    }
  ]
];

const TeamGrid = () => {
  return (
    <div className="relative">
      {/* Top border */}
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-zinc-800" />
      
      {/* Desktop view */}
      <div className="hidden md:block">
        {TEAM_MEMBERS.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="grid grid-cols-3 gap-8 py-12">
              {row.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
            
            {/* Divider line between rows */}
            {rowIndex < TEAM_MEMBERS.length - 1 && (
              <div className="h-[1px] bg-zinc-800" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-8 py-12">
        {TEAM_MEMBERS.flat().map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      
      {/* Bottom border */}
      <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-zinc-800" />
    </div>
  );
};

export default TeamGrid;