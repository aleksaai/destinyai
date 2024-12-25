import { IndustryFeatures } from './types';

export const FEATURES_BY_INDUSTRY: Record<string, IndustryFeatures[]> = {
  'E-Commerce': [
    {
      title: 'Chatbot',
      description: 'We develop AI-powered chatbots that handle customer inquiries, product recommendations, and order tracking 24/7.',
      messageType: 'chat'
    },
    {
      title: 'Voice Agent',
      description: 'We develop voice AI assistants that handle customer service calls, process returns, and provide shipping updates.',
      messageType: 'voice'
    },
    {
      title: 'Automations',
      description: 'We automate inventory management, order processing, and customer communications to streamline operations.',
      messageType: 'success'
    }
  ],
  'Finance': [
    {
      title: 'Chatbot',
      description: 'We develop AI-powered chatbots that handle account inquiries, transaction support, and financial advice.',
      messageType: 'chat'
    },
    {
      title: 'Voice Agent',
      description: 'We develop voice AI assistants for secure banking operations, fraud alerts, and payment processing.',
      messageType: 'voice'
    },
    {
      title: 'Automations',
      description: 'We automate risk assessment, compliance checks, and transaction monitoring for enhanced security.',
      messageType: 'success'
    }
  ],
  'Real Estate': [
    {
      title: 'Chatbot',
      description: 'We develop AI-powered chatbots that handle property inquiries, schedule viewings, and provide market insights.',
      messageType: 'chat'
    },
    {
      title: 'Voice Agent',
      description: 'We develop voice AI assistants for property details, appointment scheduling, and rental/purchase inquiries.',
      messageType: 'voice'
    },
    {
      title: 'Automations',
      description: 'We automate property listings, document processing, and client communications for faster transactions.',
      messageType: 'success'
    }
  ],
  'Legal': [
    {
      title: 'Chatbot',
      description: 'We develop AI-powered chatbots that handle initial consultations, document requests, and case status updates.',
      messageType: 'chat'
    },
    {
      title: 'Voice Agent',
      description: 'We develop voice AI assistants for appointment scheduling, basic legal information, and client intake.',
      messageType: 'voice'
    },
    {
      title: 'Automations',
      description: 'We automate document generation, case management, and deadline tracking for improved efficiency.',
      messageType: 'success'
    }
  ],
  'Healthcare': [
    {
      title: 'Chatbot',
      description: 'We develop AI-powered chatbots for appointment scheduling, symptom checking, and medical information.',
      messageType: 'chat'
    },
    {
      title: 'Voice Agent',
      description: 'We develop voice AI assistants for patient intake, medication reminders, and follow-up care.',
      messageType: 'voice'
    },
    {
      title: 'Automations',
      description: 'We automate patient records, insurance processing, and appointment management for better care.',
      messageType: 'success'
    }
  ],
  'Beauty': [
    {
      title: 'Chatbot',
      description: 'We develop AI-powered chatbots for booking appointments, product recommendations, and beauty advice.',
      messageType: 'chat'
    },
    {
      title: 'Voice Agent',
      description: 'We develop voice AI assistants for service inquiries, availability checks, and special promotions.',
      messageType: 'voice'
    },
    {
      title: 'Automations',
      description: 'We automate appointment scheduling, inventory management, and customer loyalty programs.',
      messageType: 'success'
    }
  ],
  default: [
    {
      title: 'Chatbot',
      description: 'We develop AI-powered customer support chatbots that provide instant helpful support, recommend products, and handle returns.',
      messageType: 'chat'
    },
    {
      title: 'Voice Agent',
      description: 'We develop advanced voice-based AI assistants that seamlessly handle inbound customer calls and provide personalised support, 24/7.',
      messageType: 'voice'
    },
    {
      title: 'Automations',
      description: 'We automate inventory tracking, order management, and customer notifications to improve operational efficiency and reduce human error.',
      messageType: 'success'
    }
  ]
} as const;