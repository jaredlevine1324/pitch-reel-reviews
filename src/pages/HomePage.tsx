import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  featuredVideos,
  trendingVideos,
  recentVideos,
  mockVideos,
} from "@/data/mockData";
import { TrendingUp, Clock, Star, Play } from "lucide-react";

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("trending");
  const navigate = useNavigate();

  const handleVideoClick = (videoId: string) => {
    navigate(`/video/${videoId}`);
  };

  const filteredVideos = (videos: typeof trendingVideos) => {
    if (!searchQuery) return videos;
    return videos.filter(
      (video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSearch={setSearchQuery}
        onSubmitVideo={() => console.log("Submit video")}
        onLogin={() => console.log("Login")}
        isLoggedIn={false}
      />

      {/* Hero Section */}
      <section className="w-full">
        <div className="w-full py-24 pl-8">
          <h1 className="text-5xl md:text-7xl font-magic leading-tight text-center">
            <span className="block mb-16 text-foreground">EXPLORE BUNGUS</span>
            <span className="block text-foreground">VIDEO CONTENT</span>
          </h1>
        </div>
      </section>

      {/* Filters & Sort Bar */}
      <div className="w-full pl-8 pr-8 pt-0 pb-2">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-bold text-lg">Filters</span>
          <button className="px-4 py-1 rounded-full border border-border bg-white text-xs font-medium">
            Funding Stage +
          </button>
          <button className="px-4 py-1 rounded-full border border-border bg-white text-xs font-medium">
            Video Type +
          </button>
          <button className="px-4 py-1 rounded-full border border-border bg-white text-xs font-medium">
            Cost +
          </button>
          <button className="px-4 py-1 rounded-full border border-border bg-white text-xs font-medium">
            Made by Sequence +
          </button>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm">Sort By</span>
            <select className="border border-border rounded px-2 py-1 text-sm bg-white">
              <option>Latest</option>
              <option>Oldest</option>
              <option>Top Rated</option>
            </select>
          </div>
          <span className="text-muted-foreground text-sm">1-32 of 19,483</span>
        </div>
      </div>

      {/* Video Grid */}
      <div className="w-full pl-8 pr-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockVideos.slice(0, 8).map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-none p-0 cursor-pointer"
              onClick={() => handleVideoClick(video.id)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full aspect-video object-cover mb-2"
              />
              <div className="pl-1">
                <div className="font-bold text-lg text-foreground mb-0 leading-snug">
                  {video.title}
                </div>
                <div className="text-xs text-muted-foreground mb-1">
                  <span
                    className="hover:text-foreground hover:underline cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/company/${video.company.toLowerCase()}`);
                    }}
                  >
                    {video.company}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  {video.genre}, {video.year} • {video.duration} •{" "}
                  {video.ageRating}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Companies Section */}
      <section className="w-full pl-8 pr-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Top Companies</h2>
          <a
            href="#"
            className="text-sm text-foreground hover:text-primary transition"
          >
            SEE ALL &gt;
          </a>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-4">
          {/* Company 1 */}
          <div
            className="flex flex-col items-center min-w-[200px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/company/stripe")}
          >
            <div className="w-[200px] h-[200px] bg-black rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold text-4xl">STRIPE</span>
            </div>
            <div className="text-center">
              <div className="font-bold text-foreground mb-1 hover:underline">
                Stripe
              </div>
              <div className="text-xs text-muted-foreground">
                Payment Infrastructure
              </div>
              <div className="text-xs text-muted-foreground">
                SAN FRANCISCO, USA
              </div>
            </div>
          </div>

          {/* Company 2 */}
          <div
            className="flex flex-col items-center min-w-[200px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/company/figma")}
          >
            <div className="w-[200px] h-[200px] bg-blue-600 rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold text-4xl">F</span>
            </div>
            <div className="text-center">
              <div className="font-bold text-foreground mb-1 hover:underline">
                Figma
              </div>
              <div className="text-xs text-muted-foreground">
                Design Platform
              </div>
              <div className="text-xs text-muted-foreground">
                SAN FRANCISCO, USA
              </div>
            </div>
          </div>

          {/* Company 3 */}
          <div
            className="flex flex-col items-center min-w-[200px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/company/notion")}
          >
            <div className="w-[200px] h-[200px] bg-red-600 rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold text-4xl">N</span>
            </div>
            <div className="text-center">
              <div className="font-bold text-foreground mb-1 hover:underline">
                Notion
              </div>
              <div className="text-xs text-muted-foreground">
                Productivity Platform
              </div>
              <div className="text-xs text-muted-foreground">
                SAN FRANCISCO, USA
              </div>
            </div>
          </div>

          {/* Company 4 */}
          <div
            className="flex flex-col items-center min-w-[200px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/company/airbnb")}
          >
            <div className="w-[200px] h-[200px] bg-black rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold text-4xl">AIR</span>
            </div>
            <div className="text-center">
              <div className="font-bold text-foreground mb-1 hover:underline">
                Airbnb
              </div>
              <div className="text-xs text-muted-foreground">
                Travel Platform
              </div>
              <div className="text-xs text-muted-foreground">
                SAN FRANCISCO, USA
              </div>
            </div>
          </div>

          {/* Company 5 */}
          <div
            className="flex flex-col items-center min-w-[200px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/company/shopify")}
          >
            <div className="w-[200px] h-[200px] bg-green-600 rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold text-4xl">S</span>
            </div>
            <div className="text-center">
              <div className="font-bold text-foreground mb-1 hover:underline">
                Shopify
              </div>
              <div className="text-xs text-muted-foreground">
                E-commerce Platform
              </div>
              <div className="text-xs text-muted-foreground">
                OTTAWA, CANADA
              </div>
            </div>
          </div>

          {/* Company 6 */}
          <div
            className="flex flex-col items-center min-w-[200px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/company/openai")}
          >
            <div className="w-[200px] h-[200px] bg-purple-600 rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold text-4xl">O</span>
            </div>
            <div className="text-center">
              <div className="font-bold text-foreground mb-1 hover:underline">
                OpenAI
              </div>
              <div className="text-xs text-muted-foreground">AI Research</div>
              <div className="text-xs text-muted-foreground">
                SAN FRANCISCO, USA
              </div>
            </div>
          </div>

          {/* Company 7 */}
          <div
            className="flex flex-col items-center min-w-[200px] cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/company/canva")}
          >
            <div className="w-[200px] h-[200px] bg-pink-500 rounded-full flex items-center justify-center mb-3">
              <span className="text-white font-bold text-4xl">C</span>
            </div>
            <div className="text-center">
              <div className="font-bold text-foreground mb-1 hover:underline">
                Canva
              </div>
              <div className="text-xs text-muted-foreground">
                Design Platform
              </div>
              <div className="text-xs text-muted-foreground">
                SYDNEY, AUSTRALIA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full relative">
        <div className="relative h-[600px] overflow-hidden">
          {/* Background Image */}
          <img
            src="/SeargantYelling copy.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-8">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Track startup videos you've watched.
              </h2>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Save those you want to see.
              </p>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Tell your friends what's good.
              </p>
              <div className="pt-8">
                <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg text-lg transition">
                  Get started — it's free!
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                The social network for startup video lovers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
