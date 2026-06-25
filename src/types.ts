export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'deploy';
  logoUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // lucide icon identifier
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface TraitItem {
  label: string;
  iconName: string;
}
