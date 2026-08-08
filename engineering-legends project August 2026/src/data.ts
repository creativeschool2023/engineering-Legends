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