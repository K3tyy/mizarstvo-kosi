import { LucideIcon } from 'lucide-react';

export interface Subcategory {
  id: string;
  title: string;
  description: string;
  benefits?: string[];
}

export interface SpecialNotice {
  title: string;
  description: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDescription?: string; // For the detailed view
  benefits?: string[]; // List of benefits
  subcategories?: Subcategory[];
  specialNotice?: SpecialNotice;
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
  subcategory?: string;
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