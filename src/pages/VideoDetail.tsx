import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  Bookmark,
  MoreHorizontal,
  Star,
  MessageSquare,
  Play,
} from "lucide-react";
import { mockVideos } from "@/data/mockData";

export const VideoDetail = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [rating, setRating] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  // Find the specific video data based on videoId
  const videoData = mockVideos.find((video) => video.id === videoId);

  // If video not found, show a default or error state
  if (!videoData) {
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
            Video not found
          </h1>
        </div>
      </div>
    );
  }

  // Mock additional data for the video detail page
  const video = {
    ...videoData,
    creator: videoData.company,
    creatorAvatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face`,
    technique: "Live-Action",
    topics: videoData.tags,
    honors: [
      { id: 1, name: "Best Demo", color: "purple", icon: "🏆" },
      { id: 2, name: "Innovation Award", color: "yellow", icon: "⭐" },
      { id: 3, name: "Tech Festival", color: "black", icon: "🎬" },
    ],
    credits: [
      { name: "Sarah Chen", role: "Director", avatar: "SC" },
      { name: "Mike Rodriguez", role: "Producer", avatar: "MR" },
      { name: "Alex Johnson", role: "Cinematographer", avatar: "AJ" },
    ],
  };

  const handleRating = (value: number) => {
    setRating(value);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    if (comment.trim()) {
      // Handle comment submission
      console.log("Comment submitted:", comment);
      setComment("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSearch={() => {}}
        onSubmitVideo={() => {}}
        onLogin={() => {}}
        isLoggedIn={true}
      />

      {/* Video Player Section */}
      <div className="w-full bg-black">
        <div className="relative aspect-video max-w-6xl mx-auto">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Play className="w-6 h-6 mr-2" />
              WATCH VIDEO
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Title and Creator */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {video.title}
                </h1>
                <div className="flex items-center gap-3">
                  <img
                    src={video.creatorAvatar}
                    alt={video.creator}
                    className="w-8 h-8 rounded-full"
                  />
                  <span
                    className="text-muted-foreground hover:text-foreground hover:underline cursor-pointer"
                    onClick={() =>
                      navigate(`/company/${video.creator.toLowerCase()}`)
                    }
                  >
                    {video.creator}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    1 YEAR AGO
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant={isLiked ? "default" : "outline"}
                  size="sm"
                  onClick={handleLike}
                  className="flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  LIKE
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {video.description}
            </p>

            {/* Tabs */}
            <Tabs defaultValue="comments" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-transparent border-b border-border">
                <TabsTrigger
                  value="comments"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground rounded-none border-b-2 border-transparent"
                >
                  Comments
                </TabsTrigger>
                <TabsTrigger
                  value="credits"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground rounded-none border-b-2 border-transparent"
                >
                  Credits 30
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground rounded-none border-b-2 border-transparent"
                >
                  Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value="comments" className="mt-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      U
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <Button onClick={handleComment} className="mt-2">
                        COMMENT
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="credits" className="mt-6">
                <div className="space-y-4">
                  {video.credits.map((credit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {credit.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {credit.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {credit.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* My Rating */}
            <div>
              <h3 className="font-bold text-foreground mb-3">My Rating</h3>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleRating(value)}
                    className={`w-8 h-8 text-sm font-medium border rounded ${
                      rating === value
                        ? "bg-primary text-white border-primary"
                        : "bg-background text-foreground border-border hover:bg-muted"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 className="font-bold text-foreground mb-3">Details</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>{video.duration}</div>
                <div>{video.ageRating}</div>
                <div>{video.uploadDate}</div>
                <div>{video.views.toLocaleString()} VIEWS</div>
              </div>
            </div>

            {/* Genres */}
            <div>
              <h3 className="font-bold text-foreground mb-3">Genres</h3>
              <div className="flex gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  {video.genre}
                </Badge>
              </div>
            </div>

            {/* Techniques */}
            <div>
              <h3 className="font-bold text-foreground mb-3">Techniques</h3>
              <div className="flex gap-2">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  {video.technique}
                </Badge>
              </div>
            </div>

            {/* Topics */}
            <div>
              <h3 className="font-bold text-foreground mb-3">Topics</h3>
              <div className="flex gap-2 flex-wrap">
                {video.topics.map((topic) => (
                  <Badge
                    key={topic}
                    variant="secondary"
                    className="bg-blue-50 text-blue-700"
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Contact CTAs */}
            <div className="space-y-3 pt-6 border-t border-border">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Contact {video.creator}
              </Button>
              <Button variant="outline" className="w-full">
                Contact Production Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
