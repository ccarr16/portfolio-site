// This file will contain all the data for your portfolio
// Update this with information from your Notion portfolio

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export interface Client {
  id: string
  name: string
  logo?: string
  website?: string
}

export interface YouTubeChannel {
  id: string
  name: string
  description: string
  thumbnail?: string
  url: string
  subscriberCount?: string
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  caseStudyUrl?: string
}

export interface TechItem {
  id: string
  name: string
  icon?: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

// Placeholder data - Replace with your actual data from Notion
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Client Name',
    role: 'CEO',
    company: 'Company Name',
    content: 'Chris delivered exceptional work on our travel content project. Highly recommended!',
  },
  // Add more testimonials from your Notion portfolio
]

export const clients: Client[] = [
  {
    id: '1',
    name: 'Client Company',
    // Add more clients
  },
  // Add more clients from your Notion portfolio
]

export const youtubeChannels: YouTubeChannel[] = [
  {
    id: '1',
    name: 'Channel Name',
    description: 'Description of the channel',
    url: 'https://youtube.com/@channel',
  },
  // Add more YouTube channels from your Notion portfolio
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Project description goes here',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  // Add more projects from your Notion portfolio
]

export const techStack: TechItem[] = [
  { id: '1', name: 'React', category: 'frontend' },
  { id: '2', name: 'Next.js', category: 'frontend' },
  { id: '3', name: 'TypeScript', category: 'frontend' },
  { id: '4', name: 'Tailwind CSS', category: 'frontend' },
  { id: '5', name: 'Node.js', category: 'backend' },
  // Add more tech items from your Notion portfolio
]

