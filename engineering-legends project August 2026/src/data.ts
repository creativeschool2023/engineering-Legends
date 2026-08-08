export interface Engineer {
  id: string;
  name: string;
  discipline: string;
  title: string;
  period: string;
  image: string;
  bio: string;
  achievements: string[];
  contributions: { title: string; description: string }[];
}

export const engineers: Engineer[] = [
  {
    id: 'nikola-tesla',
    name: 'Nikola Tesla',
    discipline: 'Electrical Engineering',
    title: 'Pioneer of Modern Electricity',
    period: '1856 - 1943',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
    bio: 'Nikola Tesla was a Serbo-American engineer known for AC electricity design.',
    achievements: ['Alternating Current System', 'Tesla Coil', 'Induction Motor'],
    contributions: [
      { title: 'AC Power Grid', description: 'Revolutionized long-distance electricity transmission.' }
    ]
  }
];

export const disciplinesData = [
  {
    id: 'electrical',
    title: 'Electrical Engineering',
    icon: 'Zap',
    description: 'Power generation and electromagnetic systems.'
  },
  {
    id: 'civil',
    title: 'Civil Engineering',
    icon: 'Building',
    description: 'Infrastructure and structural design.'
  }
];

export const voiceStoriesData = [
  {
    id: 'story-1',
    author: 'Anonymous Engineer',
    role: 'Structural Engineer',
    content: 'Engineering is about solving real-world challenges with sustainable innovations.',
    likes: 42
  }
];

export const unSdgsData = [
  {
    id: 9,
    title: 'Industry, Innovation and Infrastructure',
    description: 'Build resilient infrastructure, promote inclusive industrialization and foster innovation.'
  }
];

export const timelineEventsData = [
  {
    year: '1888',
    title: 'AC Motor Patent',
    description: 'Nikola Tesla patents the induction motor.'
  }
];

export const organizationsData = [
  {
    id: 'ieee',
    name: 'IEEE',
    description: 'Institute of Electrical and Electronics Engineers'
  }
];

export const marvelsData = [
  {
    id: 'hoover-dam',
    name: 'Hoover Dam',
    country: 'USA',
    description: 'A monumental concrete arch-gravity dam.'
  }
];

export const youngEngineerTips = [
  {
    id: 'tip-1',
    title: 'Master Fundamentals',
    description: 'Focus heavily on core engineering principles before specialized tools.'
  }
];