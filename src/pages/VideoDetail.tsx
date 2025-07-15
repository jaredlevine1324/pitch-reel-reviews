import { useState } from "react";
import { ArrowLeft, ExternalLink, Calendar, Eye, Share2, Heart, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import { Header } from "@/components/Header";

// Mock video data
const mockVideo = {
  id: "1",
  title: "Stripe's Revolutionary Payment Infrastructure Demo",
  company: "Stripe",
  description: "A comprehensive demo showcasing Stripe's latest payment infrastructure innovations, including instant payouts, global compliance, and developer-first APIs.",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
  duration: "8:42",
  uploadDate: "2024-01-15",
  views: 125000,
  rating: 4.6,
  reviewCount: 89,
  tags: ["demo", "fintech", "API", "payments"],
  submittedBy: "Sarah Chen"
};

const mockReviews = [
  {
    id: "1",
    user: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    text: "Incredible demo! The way they explain complex payment flows is so clear. This is exactly what we needed to see for our integration.",
    date: "2024-01-20",
    likes: 12
  },
  {
    id: "2", 
    user: "Maria Garcia",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b2d1b4c6?w=40&h=40&fit=crop&crop=face",
    rating: 4,
    text: "Great technical depth, though I wish they covered more about international compliance. Still very valuable for understanding their platform.",
    date: "2024-01-18",
    likes: 8
  },
  {
    id: "3",
    user: "David Kim", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    rating: 5,
    text: "This demo convinced our team to switch to Stripe. The developer experience looks amazing and the API design is so intuitive.",
    date: "2024-01-16",
    likes: 15
  }
];

export const VideoDetail = () => {
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      month: "long", 
      day: "numeric", 
      year: "numeric" 
    });
  };

  const handleSubmitReview = () => {
    // TODO: Implement with Supabase
    console.log("Submitting review:", { rating: userRating, text: reviewText });
    setUserRating(0);
    setReviewText("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header isLoggedIn={true} />
      
      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Feed
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-card">
              <iframe
                src={mockVideo.videoUrl}
                title={mockVideo.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  {mockVideo.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{mockVideo.company}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(mockVideo.uploadDate)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {formatViews(mockVideo.views)} views
                  </div>
                </div>
              </div>

              {/* Rating and Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <StarRating rating={mockVideo.rating} size="lg" />
                    <span className="text-sm text-muted-foreground">
                      ({mockVideo.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? "text-red-500" : ""}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                {mockVideo.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {mockVideo.description}
                </p>
              </div>

              <div className="text-sm text-muted-foreground">
                Submitted by <span className="text-foreground">{mockVideo.submittedBy}</span>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="space-y-6">
            {/* Add Review */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Write a Review
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Rating</label>
                  <StarRating 
                    rating={userRating} 
                    interactive 
                    onRatingChange={setUserRating}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Review</label>
                  <Textarea
                    placeholder="Share your thoughts about this video..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                </div>
                <Button 
                  onClick={handleSubmitReview}
                  disabled={userRating === 0 || !reviewText.trim()}
                  className="w-full"
                >
                  Submit Review
                </Button>
              </CardContent>
            </Card>

            {/* Reviews List */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({mockReviews.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {mockReviews.map((review) => (
                  <div key={review.id} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <img
                        src={review.avatar}
                        alt={review.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-foreground">{review.user}</h4>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(review.date)}
                          </span>
                        </div>
                        <StarRating rating={review.rating} size="sm" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {review.text}
                        </p>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-auto p-1 text-xs"
                          >
                            <Heart className="w-3 h-3 mr-1" />
                            {review.likes}
                          </Button>
                        </div>
                      </div>
                    </div>
                    {review.id !== mockReviews[mockReviews.length - 1].id && (
                      <div className="border-b border-border" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};