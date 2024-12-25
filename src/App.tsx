import React from 'react';
import Navbar from './components/layout/Navbar';
import { Hero } from './components/sections';
import NoiseTexture from './components/ui/NoiseTexture';
import ProcessSection from './components/sections/ProcessSection';
import IndustriesSection from './components/sections/IndustriesSection';
import ReviewsSection from './components/sections/ReviewsSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';
import FAQSection from './components/sections/FAQSection';
import FooterSection from './components/sections/FooterSection';
import Impressum from './components/pages/Impressum';
import Datenschutz from './components/pages/Datenschutz';
import Blog from './components/pages/Blog';
import BlogArticle from './components/pages/blog/BlogArticle';
import './styles/animations.css';
import './styles/gradients.css';

export default function App() {
  const path = window.location.pathname;

  if (path === '/impressum') {
    return <Impressum />;
  }

  if (path === '/privacy') {
    return <Datenschutz />;
  }

  if (path === '/blog') {
    return <Blog />;
  }

  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '');
    return <BlogArticle slug={slug} />;
  }

  return (
    <div className="min-h-screen bg-[#080808] overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 right-0 w-[1200px] h-[1200px]" 
          style={{
            background: 'radial-gradient(circle at top right, rgba(29,211,176,0.4) 0%, rgba(29,211,176,0.2) 25%, rgba(0,0,0,0) 60%)',
            filter: 'blur(60px)',
            opacity: 0.7
          }}
        />
        <div 
          className="absolute -top-[5%] -left-[20%] w-[800px] h-[800px]" 
          style={{
            background: 'radial-gradient(circle at center, rgba(29,211,176,0.15) 0%, rgba(29,211,176,0.05) 35%, rgba(0,0,0,0) 70%)',
            transform: 'rotate(10deg)',
            filter: 'blur(60px)',
            opacity: 0.7
          }}
        />
      </div>
      
      <NoiseTexture />
      <Navbar />
      <Hero />
      <ProcessSection />
      <IndustriesSection />
      <ReviewsSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}