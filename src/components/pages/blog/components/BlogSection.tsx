import React from 'react';

interface BlogSectionProps {
  title: string;
  content: string;
}

const BlogSection = ({ title, content }: BlogSectionProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-400 leading-relaxed">{content}</p>
    </section>
  );
};

export default BlogSection;