import React from 'react';
import BlogSection from './BlogSection';
import { BLOG_CONTENT } from '../content/blogContent';

interface BlogContentProps {
  slug: string;
}

const BlogContent = ({ slug }: BlogContentProps) => {
  const content = BLOG_CONTENT[slug];

  if (!content) {
    return null;
  }

  return (
    <div className="prose prose-invert prose-lg max-w-none">
      {/* Introduction */}
      <p className="text-gray-400 leading-relaxed mb-12">
        {content.introduction}
      </p>

      {/* Main sections */}
      {content.sections.map((section, index) => (
        <BlogSection
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}

      {/* Conclusion */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
        <p className="text-gray-400 leading-relaxed">{content.conclusion}</p>
      </div>
    </div>
  );
};

export default BlogContent;