import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDescription?: string; // For the detailed view
  benefits?: string[]; // List of benefits
  icon: LucideIcon;
  image: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProjectImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}