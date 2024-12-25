import React from 'react';

interface ReviewAuthorProps {
  author: string;
  position: string;
  company: string;
  image: string;
}

export const ReviewAuthor = ({ author, position, company, image }: ReviewAuthorProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
        <img 
          src={image} 
          alt={author}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-white font-medium">{author}</h4>
        <p className="text-sm bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent font-medium">
          {position} - {company}
        </p>
      </div>
    </div>
  );
};