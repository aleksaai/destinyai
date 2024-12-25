import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/utils/cn';
import NoiseTexture from '../ui/NoiseTexture';
import BlogGrid from './blog/BlogGrid';
import BlogParticles from './blog/BlogParticles';
import { BLOG_POSTS } from './blog/constants';

const Blog = () => {
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
        <div 
          className="absolute -left-[20%] top-[40%] w-[600px] h-[600px]" 
          style={{
            background: 'radial-gradient(circle at center, rgba(29,211,176,0.1) 0%, rgba(29,211,176,0.03) 35%, rgba(0,0,0,0) 70%)',
            filter: 'blur(60px)',
            opacity: 0.5
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
            href="/"
            className={cn(
              "flex items-center gap-2",
              "text-gray-400 hover:text-white",
              "transition-colors duration-200"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Latest Insights
          </h1>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl">
            Discover the latest trends, insights, and best practices in AI automation and business transformation.
          </p>

          <BlogGrid posts={BLOG_POSTS} />
        </div>
      </main>
    </div>
  );
};

export default Blog;