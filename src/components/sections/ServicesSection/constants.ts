import { ChatbotVisual, VoiceVisual, WorkflowVisual, ConsultingVisual } from './visuals';
import type { Service } from './types';

export const SERVICES_DATA: Service[] = [
  {
    title: 'Chatbot Development',
    description: 'We develop advanced AI-driven chatbots that handle repetitive tasks, manage data, and streamline your internal workflows to drive real results for your business.',
    visual: ChatbotVisual
  },
  {
    title: 'Voice Assistants',
    description: 'We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.',
    visual: VoiceVisual
  },
  {
    title: 'Workflow Automations',
    description: 'We streamline your processes with workflow automations that connect your favourite applications to eliminate repetitive tasks and enhance accuracy.',
    visual: WorkflowVisual
  },
  {
    title: 'AI Consulting',
    description: 'We dive into your organization to uncover AI-driven automation opportunities that can elevate your operational efficiency, quality, and speed, and reduce cost.',
    visual: ConsultingVisual
  }
] as const;