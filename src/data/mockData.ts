// Mock data for StartupReels MVP

export const mockVideos = [
  {
    id: "1",
    title: "Stripe's Revolutionary Payment Infrastructure Demo",
    company: "Stripe",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    duration: "8:42",
    uploadDate: "2024-01-15",
    views: 125000,
    rating: 4.6,
    reviewCount: 89,
    tags: ["demo", "fintech", "API"],
    description: "A comprehensive demo showcasing Stripe's latest payment infrastructure innovations."
  },
  {
    id: "2", 
    title: "Figma's Design System Revolution",
    company: "Figma",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
    duration: "12:15",
    uploadDate: "2024-01-10",
    views: 89000,
    rating: 4.8,
    reviewCount: 156,
    tags: ["design", "collaboration", "workflow"],
    description: "How Figma is transforming the design industry with real-time collaboration."
  },
  {
    id: "3",
    title: "Notion's AI-Powered Workspace Pitch",
    company: "Notion",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=450&fit=crop",
    duration: "6:30",
    uploadDate: "2024-01-08",
    views: 67000,
    rating: 4.4,
    reviewCount: 72,
    tags: ["pitch", "AI", "productivity"],
    description: "Notion's vision for the future of AI-enhanced productivity and knowledge management."
  },
  {
    id: "4",
    title: "Airbnb's Growth Strategy Deep Dive",
    company: "Airbnb", 
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop",
    duration: "15:20",
    uploadDate: "2024-01-05",
    views: 234000,
    rating: 4.7,
    reviewCount: 203,
    tags: ["strategy", "growth", "marketplace"],
    description: "An inside look at Airbnb's global expansion and growth strategies."
  },
  {
    id: "5",
    title: "Shopify's E-commerce Platform Evolution",
    company: "Shopify",
    thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=450&fit=crop",
    duration: "9:15",
    uploadDate: "2024-01-03",
    views: 156000,
    rating: 4.5,
    reviewCount: 134,
    tags: ["e-commerce", "platform", "scaling"],
    description: "How Shopify built and scaled their e-commerce platform to serve millions of merchants."
  },
  {
    id: "6",
    title: "OpenAI's GPT Development Journey",
    company: "OpenAI",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    duration: "18:45",
    uploadDate: "2024-01-01",
    views: 892000,
    rating: 4.9,
    reviewCount: 445,
    tags: ["AI", "research", "breakthrough"],
    description: "The technical and philosophical journey behind GPT and large language models."
  },
  {
    id: "7",
    title: "Canva's Design Democratization Mission",
    company: "Canva",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    duration: "7:50",
    uploadDate: "2023-12-28",
    views: 78000,
    rating: 4.3,
    reviewCount: 98,
    tags: ["design", "democratization", "tools"],
    description: "How Canva is making professional design accessible to everyone."
  },
  {
    id: "8",
    title: "Slack's Communication Revolution Explainer",
    company: "Slack",
    thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
    duration: "5:25",
    uploadDate: "2023-12-25",
    views: 143000,
    rating: 4.2,
    reviewCount: 167,
    tags: ["communication", "workplace", "collaboration"],
    description: "The story of how Slack transformed workplace communication and team collaboration."
  }
];

export const featuredVideos = mockVideos.slice(0, 3);
export const trendingVideos = [...mockVideos].sort((a, b) => b.views - a.views);
export const recentVideos = [...mockVideos].sort((a, b) => 
  new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
);