import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  UserPlus,
  MessageSquare,
  MoreHorizontal,
  ExternalLink,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
} from "lucide-react";
import { mockVideos } from "@/data/mockData";

interface Company {
  slug: string;
  name: string;
  logo: string;
  description: string;
  location: string;
  vertical: string;
  followers: number;
  socialLinks?: {
    website?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// Mock company data - in real app this would come from API
const mockCompanies: Company[] = [
  {
    slug: "stripe",
    name: "Stripe",
    logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    description:
      "Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to Fortune 500s—use our software to accept payments and grow their revenue.",
    location: "San Francisco, CA",
    vertical: "Fintech",
    followers: 1247,
    socialLinks: {
      website: "https://stripe.com",
      twitter: "https://twitter.com/stripe",
      linkedin: "https://linkedin.com/company/stripe",
    },
  },
  {
    slug: "figma",
    name: "Figma",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=150&fit=crop",
    description:
      "Figma is a collaborative interface design tool that enables teams to design, prototype, and gather feedback all in one place.",
    location: "San Francisco, CA",
    vertical: "Design",
    followers: 892,
    socialLinks: {
      website: "https://figma.com",
      twitter: "https://twitter.com/figma",
      linkedin: "https://linkedin.com/company/figma",
    },
  },
  {
    slug: "notion",
    name: "Notion",
    logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=150&h=150&fit=crop",
    description:
      "Notion is a versatile workspace where you can write, plan, collaborate and get organized. It allows you to take notes, add tasks, manage projects & more.",
    location: "San Francisco, CA",
    vertical: "Productivity",
    followers: 1567,
    socialLinks: {
      website: "https://notion.so",
      twitter: "https://twitter.com/notionhq",
      linkedin: "https://linkedin.com/company/notionhq",
    },
  },
  {
    slug: "airbnb",
    name: "Airbnb",
    logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=150&h=150&fit=crop",
    description:
      "Airbnb is an online marketplace that connects people who want to rent out their property with people who are looking for accommodations in specific locations.",
    location: "San Francisco, CA",
    vertical: "Marketplace",
    followers: 2341,
    socialLinks: {
      website: "https://airbnb.com",
      twitter: "https://twitter.com/airbnb",
      linkedin: "https://linkedin.com/company/airbnb",
    },
  },
  {
    slug: "shopify",
    name: "Shopify",
    logo: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=150&h=150&fit=crop",
    description:
      "Shopify is a complete commerce platform that lets you start, grow, and manage a business.",
    location: "Ottawa, Canada",
    vertical: "E-commerce",
    followers: 1892,
    socialLinks: {
      website: "https://shopify.com",
      twitter: "https://twitter.com/shopify",
      linkedin: "https://linkedin.com/company/shopify",
    },
  },
  {
    slug: "openai",
    name: "OpenAI",
    logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=150&h=150&fit=crop",
    description:
      "OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.",
    location: "San Francisco, CA",
    vertical: "AI",
    followers: 3456,
    socialLinks: {
      website: "https://openai.com",
      twitter: "https://twitter.com/openai",
      linkedin: "https://linkedin.com/company/openai",
    },
  },
  {
    slug: "canva",
    name: "Canva",
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=150&h=150&fit=crop",
    description:
      "Canva is a free-to-use online graphic design tool. Use it to create social media posts, presentations, posters, videos, logos and more.",
    location: "Sydney, Australia",
    vertical: "Design",
    followers: 2341,
    socialLinks: {
      website: "https://canva.com",
      twitter: "https://twitter.com/canva",
      linkedin: "https://linkedin.com/company/canva",
    },
  },
];

export const CompanyProfile = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);

  // Find the company data
  const company = mockCompanies.find((c) => c.slug === slug);

  // Get all videos for this company
  const companyVideos = mockVideos.filter(
    (video) => video.company.toLowerCase() === company?.name.toLowerCase()
  );

  // If company not found, show error
  if (!company) {
    return (
      <div className="min-h-screen bg-background">
        <Header
          onSearch={() => {}}
          onSubmitVideo={() => {}}
          onLogin={() => {}}
          isLoggedIn={true}
        />
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold text-foreground">
            Company not found
          </h1>
        </div>
      </div>
    );
  }

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowerCount((prev) => (isFollowing ? prev - 1 : prev + 1));
  };

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`);
  };

  const formatDuration = (duration: string) => {
    return duration;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSearch={() => {}}
        onSubmitVideo={() => {}}
        onLogin={() => {}}
        isLoggedIn={true}
      />

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-gray-50 to-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-start justify-between">
            {/* Company Info */}
            <div className="flex items-start gap-6">
              {/* Logo */}
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Company Details */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-foreground">
                    {company.name}
                  </h1>
                  <Badge
                    variant="secondary"
                    className="bg-pink-100 text-pink-800"
                  >
                    {company.vertical.toUpperCase()}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-4 max-w-2xl leading-relaxed">
                  {company.description}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{company.location}</span>
                </div>

                {/* Social Links */}
                {company.socialLinks && (
                  <div className="flex items-center gap-3">
                    {company.socialLinks.website && (
                      <a
                        href={company.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {company.socialLinks.twitter && (
                      <a
                        href={company.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {company.socialLinks.linkedin && (
                      <a
                        href={company.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {company.socialLinks.instagram && (
                      <a
                        href={company.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Button
                variant={isFollowing ? "default" : "outline"}
                onClick={handleFollow}
                className="flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                {isFollowing ? "FOLLOWING" : "FOLLOW"}
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Follower Count */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Followers {company.followers + followerCount}
              </span>
              <span className="text-sm text-muted-foreground">
                Videos {companyVideos.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Videos Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Videos */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Videos ({companyVideos.length})
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companyVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleVideoClick(video.id)}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge
                        variant="secondary"
                        className="bg-black/80 text-white border-none"
                      >
                        {video.genre}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-1 line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{video.year}</span>
                      <span>{video.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Recommended Companies */}
            <div>
              <h3 className="font-bold text-foreground mb-3">Recommended</h3>
              <div className="space-y-3">
                {mockCompanies
                  .filter((c) => c.slug !== slug)
                  .slice(0, 3)
                  .map((recCompany) => (
                    <div
                      key={recCompany.slug}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition cursor-pointer"
                    >
                      <img
                        src={recCompany.logo}
                        alt={`${recCompany.name} logo`}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-foreground">
                          {recCompany.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {recCompany.vertical}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Followers Preview */}
            <div>
              <h3 className="font-bold text-foreground mb-3">
                Followers {company.followers + followerCount}
              </h3>
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs text-muted-foreground"
                  >
                    {String.fromCharCode(65 + (i % 26))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
