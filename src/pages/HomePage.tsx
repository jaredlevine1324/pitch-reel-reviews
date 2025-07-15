import { useState } from "react";
import { Header } from "@/components/Header";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuredVideos, trendingVideos, recentVideos } from "@/data/mockData";
import heroImage from "@/assets/hero-bg.jpg";
import { TrendingUp, Clock, Star, Play } from "lucide-react";

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("trending");

  const handleVideoClick = (videoId: string) => {
    // TODO: Navigate to video detail page
    console.log("Navigate to video:", videoId);
  };

  const filteredVideos = (videos: typeof trendingVideos) => {
    if (!searchQuery) return videos;
    return videos.filter(video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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
      <section className="relative overflow-hidden bg-gradient-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Discover the Best
              <span className="text-primary block">Startup Videos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rate, review, and discover the most compelling startup pitches, demos, and explainer videos from the world's most innovative companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                Start Watching
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Submit a Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Star className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Featured Videos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              size="lg"
              showDescription
              onClick={() => handleVideoClick(video.id)}
              className="animate-fade-in"
            />
          ))}
        </div>
      </section>

      {/* Browse Videos */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-foreground mb-8">Browse Videos</h2>
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mb-8">
            <TabsTrigger value="trending" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Recent
            </TabsTrigger>
            <TabsTrigger value="featured" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Top Rated
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">🔥 Trending Now</h3>
              <Badge variant="secondary">
                {filteredVideos(trendingVideos).length} videos
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos(trendingVideos).map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() => handleVideoClick(video.id)}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">⏰ Recently Added</h3>
              <Badge variant="secondary">
                {filteredVideos(recentVideos).length} videos
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos(recentVideos).map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() => handleVideoClick(video.id)}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">⭐ Highest Rated</h3>
              <Badge variant="secondary">
                {filteredVideos([...trendingVideos].sort((a, b) => b.rating - a.rating)).length} videos
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos([...trendingVideos].sort((a, b) => b.rating - a.rating)).map((video, index) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() => handleVideoClick(video.id)}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join the Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with startup enthusiasts, share your favorite videos, and discover the next big thing in the startup ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Sign Up Free
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};