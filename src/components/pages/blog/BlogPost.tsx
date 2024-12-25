import React from 'react';
import { cn } from '@/utils/cn';
import type { BlogPost as BlogPostType } from './types';

const BlogPost = ({ title, excerpt, image, date, category, slug }: BlogPostType) => {
  return (
    <article className="group">
      <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-[1px] transition-all duration-300 group-hover:border-[#1DD3B0]/30">
        <div className="rounded-lg bg-[#0D0D0D]/40 overflow-hidden">
          {/* Image */}
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-[#1DD3B0]">{category}</span>
              <span className="text-sm text-gray-400">{date}</span>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-[#1DD3B0]">
              {title}
            </h3>
            
            <p className="text-gray-400 line-clamp-3 mb-4">
              {excerpt}
            </p>

            <a 
              href={`/blog/${slug}`}
              className="inline-flex items-center text-sm text-[#1DD3B0] hover:text-white transition-colors"
            >
              Read More
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;