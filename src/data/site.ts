export const profile = {
  name: "Jack O'Donnell",
  role: 'Software Engineer',
  tagline: 'Infrastructure, tooling, and the interfaces between',
  location: 'San Francisco, CA',
  buildingSince: 2015,
  email: 'jack@jtod.dev',
};

export const focusAreas = [
  {
    label: 'Focus',
    body: 'Distributed systems, developer experience, observability.',
  },
  {
    label: 'Tools',
    body: 'Go, Rust, TypeScript, Postgres, a lot of terminal.',
  },
  {
    label: 'Elsewhere',
    body: 'Trail runs, film photography, slow mornings.',
  },
];

export interface WorkItem {
  title: string;
  description: string;
  year: string;
}

export const workItems: WorkItem[] = [
  { title: 'Lumen', description: 'Realtime tracing platform', year: '2024' },
  { title: 'Fernweh', description: 'Edge deploy CLI', year: '2023' },
  { title: 'Halflight', description: 'Local-first sync engine', year: '2022' },
  { title: 'Tide', description: 'Postgres schema diff tool', year: '2021' },
];

export interface WritingPost {
  title: string;
  date: string;
  readTime: string;
}

export const writingPosts: WritingPost[] = [
  { title: 'On slow software', date: 'Mar 2026', readTime: '6 min' },
  { title: 'The shape of a good abstraction', date: 'Jan 2026', readTime: '9 min' },
  { title: 'Reading a stack trace like a map', date: 'Nov 2025', readTime: '5 min' },
];

export const nowNote = {
  body: 'Currently at Watershed building software to help companies calculate their carbon footprint. Reading about urban planning and sustainability. Building a personal finance tracker and improving my aerobic threshold.',
  updated: 'Jul 2026',
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Work', href: '#work' },
  { label: 'Writing', href: '#writing' },
  { label: 'Now', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/jto-d' },
  { label: 'X / Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'ReadCV', href: '#' },
];
