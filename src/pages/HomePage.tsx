import { useState } from "react";
import { Header } from "@/components/Header";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuredVideos, trendingVideos, recentVideos } from "@/data/mockData";
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
      <section className="relative bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-foreground">
              Discover
              <span className="block text-primary italic">Startup Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Curate, review, and discover the most compelling startup videos. 
              From pitch decks to product demos, find inspiration in the stories that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3">
                <Play className="w-4 h-4 mr-2" />
                Explore Videos
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                Submit a Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium text-foreground mb-4">Featured Videos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Handpicked stories from the startup world</p>
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
      <section className="container mx-auto px-6 py-16 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium text-foreground mb-4">Browse Videos</h2>
        </div>
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mb-12 mx-auto bg-muted">
            <TabsTrigger value="trending" className="flex items-center gap-2 font-medium">
              <TrendingUp className="w-4 h-4" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-2 font-medium">
              <Clock className="w-4 h-4" />
              Recent
            </TabsTrigger>
            <TabsTrigger value="featured" className="flex items-center gap-2 font-medium">
              <Star className="w-4 h-4" />
              Top Rated
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-8">
                {filteredVideos(trendingVideos).length} videos
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

          <TabsContent value="recent" className="space-y-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-8">
                {filteredVideos(recentVideos).length} videos
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

          <TabsContent value="featured" className="space-y-8">
            <div className="text-center">
              <Badge variant="secondary" className="mb-8">
                {filteredVideos([...trendingVideos].sort((a, b) => b.rating - a.rating)).length} videos
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
      <section className="bg-muted/30 py-20 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-medium text-foreground mb-6">
            Join the Community
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with startup enthusiasts, share your favorite videos, and discover the next big thing in the startup ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3">
              Sign Up Free
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};