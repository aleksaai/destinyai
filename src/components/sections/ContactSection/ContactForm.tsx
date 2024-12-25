import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import { ArrowRight, Loader2 } from 'lucide-react';
import { submitContactForm } from '@/services/contact';
import NewsletterCheckbox from './NewsletterCheckbox';
import ContactSuccess from './ContactSuccess';

const INQUIRY_OPTIONS = [
  'AI Chatbot Development',
  'Voice AI Development',
  'Workflow Automation', 
  'AI Consulting',
  'Career',
  'Partnerships',
  'Other'
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    inquiry: INQUIRY_OPTIONS[0],
    email: '',
    phone: '',
    message: ''
  });

  const inputClasses = cn(
    "w-full px-4 py-3",
    "bg-[#0E0E0E] rounded-lg",
    "border border-zinc-800",
    "text-[#989898] placeholder:text-[#989898]",
    "focus:outline-none",
    "focus:ring-0",
    "focus:border-[#1DD3B0]/30",
    "focus:shadow-[0_0_15px_rgba(29,211,176,0.1)]",
    "transition-all duration-300"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitContactForm({
        ...formData,
        subscribed: isSubscribed ? 'Yes' : 'No'
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert('Sorry, there was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return <ContactSuccess />;
  }

  return (
    <div className="mt-12 max-w-3xl mx-auto">
      <div className="rounded-xl border border-zinc-800 p-[10px]">
        <div className="rounded-lg bg-[#0D0D0D]/40 backdrop-blur-md p-8 border border-zinc-800">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="block text-sm text-white/90">
                  Full Name <span className="text-[#1DD3B0]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={inputClasses}
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="block text-sm text-white/90">
                  Inquiry <span className="text-[#1DD3B0]">*</span>
                </label>
                <select 
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                >
                  {INQUIRY_OPTIONS.map(option => (
                    <option key={option} value={option} className="bg-[#0E0E0E] text-[#989898]">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label className="block text-sm text-white/90">
                  Email <span className="text-[#1DD3B0]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  className={inputClasses}
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="block text-sm text-white/90">
                  Phone <span className="text-[#1DD3B0]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label className="block text-sm text-white/90">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project..."
                className={cn(inputClasses, "resize-none")}
              />
            </div>

            <div className="space-y-6">
              <NewsletterCheckbox 
                checked={isSubscribed}
                onChange={setIsSubscribed}
              />

              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex items-center gap-2",
                    "px-4 py-2",
                    "rounded-xl",
                    "bg-white/5 backdrop-blur-md",
                    "border border-white/10",
                    "text-sm font-medium text-white/90",
                    "shadow-lg shadow-black/5",
                    "transition-all duration-300",
                    "hover:bg-white/8 hover:border-white/20",
                    "focus:outline-none focus:ring-2 focus:ring-[#1DD3B0]/50",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;