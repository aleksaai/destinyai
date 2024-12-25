import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/utils/cn';
import NoiseTexture from '../../ui/NoiseTexture';
import BlogParticles from './BlogParticles';
import { BLOG_POSTS } from './constants';
import BlogContent from './components/BlogContent';

interface BlogArticleProps {
  slug: string;
}

const BlogArticle = ({ slug }: BlogArticleProps) => {
  const post = BLOG_POSTS.find(post => post.slug === slug);

  if (!post) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-[10%] right-[10%] w-[800px] h-[800px]" 
          style={{
            background: 'radial-gradient(circle at center, rgba(29,211,176,0.15) 0%, rgba(29,211,176,0.05) 35%, rgba(0,0,0,0) 70%)',
            filter: 'blur(60px)',
            opacity: 0.7
          }}
        />
      </div>

      {/* Particles effect */}
      <BlogParticles />
      
      {/* Noise texture */}
      <NoiseTexture />

      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <a
            href="/blog"
            className={cn(
              "flex items-center gap-2",
              "text-gray-400 hover:text-white",
              "transition-colors duration-200"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </a>
        </div>
      </header>

      {/* Article content */}
      <main className="relative pt-32 pb-16 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Glass container for content */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-[1px]">
            <div className="rounded-lg bg-[#0D0D0D]/40 p-8">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-[#1DD3B0]">{post.category}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  {post.title}
                </h1>
              </div>

              <div className="rounded-xl overflow-hidden mb-12">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>

              <BlogContent slug={slug} />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogArticle;