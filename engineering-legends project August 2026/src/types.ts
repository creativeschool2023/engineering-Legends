export type Era = 'ancient' | 'after_christ' | 'medieval' | 'modern';

export interface Innovation {
  id: string;
  title: string;
  year: string;
  description: string;
  details: {
    icon: string;
    label: string;
    value: string;
  }[];
  isFeatured?: boolean;
  comparison?: {
    then: {
      label: string;
      year: string;
      icon: string;
      description: string;
    };
    now: {
      label: string;
      year: string;
      icon: string;
      description: string;
    };
  };
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface TechnicalMetric {
  label: string;
  value: string;
  unit?: string;
  numberValue?: number;
}

export interface BlueprintDetail {
  title: string;
  subtitle: string;
  concept: string;
  principles: string[];
  specs: { label: string; value: string }[];
}

export interface Engineer {
  id: string;
  plateId: string;
  name: string;
  era: Era;
  eraLabel: string;
  lifespan: string;
  nationality: string;
  location: string;
  disciplines: string[];
  accomplishments: string[];
  quote: string;
  quoteContext?: string;
  biography: {
    lead: string;
    full: string[];
  };
  image: string;
  technicalMetrics: TechnicalMetric[];
  blueprint: BlueprintDetail;
}

export interface Discipline {
  id: string;
  name: string;
  category: string;
  difficulty: number;
  description: string;
  focusAreas: string[];
  specs: { label: string; value: string }[];
  iconName: string;
}

export interface Organization {
  id: string;
  plateId: string;
  name: string;
  shortName: string;
  category: 'global' | 'society' | 'standards' | 'humanitarian' | 'regional';
  categoryLabel: string;
  location: string;
  coordinates: { lat: number; lng: number };
  established: string;
  members: string;
  description: string;
  focusAreas: string[];
  website: string;
}

export interface VoiceStory {
  id: string;
  author: string;
  role: string;
  platform: 'reddit' | 'twitter' | 'linkedin' | 'youtube' | 'instagram' | 'community';
  topic: 'burnout' | 'imposter' | 'success' | 'layoffs';
  quote: string;
  fullStory?: string;
  date: string;
  likes?: number;
  comments?: number;
}
