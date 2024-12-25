import React from 'react';
import BlogPost from './BlogPost';
import type { BlogPost as BlogPostType } from './types';

interface BlogGridProps {
  posts: BlogPostType[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogGrid;