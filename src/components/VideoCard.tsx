import { Play, Eye, MessageSquare, Calendar } from "lucide-react";
import { StarRating } from "./StarRating";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    company: string;
    thumbnail: string;
    duration: string;
    uploadDate: string;
    views: number;
    rating: number;
    reviewCount: number;
    tags: string[];
    description?: string;
  };
  size?: "sm" | "md" | "lg";
  showDescription?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const VideoCard = ({ 
  video, 
  size = "md", 
  showDescription = false,
  className,
  style,
  onClick 
}: VideoCardProps) => {
  const sizeClasses = {
    sm: "aspect-video max-w-sm",
    md: "aspect-video max-w-md", 
    lg: "aspect-video max-w-lg"
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric", 
      year: "numeric" 
    });
  };

  return (
    <div 
      className={cn(
        "group cursor-pointer transition-all duration-300 bg-card rounded-lg overflow-hidden",
        "hover:shadow-card-hover border border-border",
        className
      )}
      style={style}
      onClick={onClick}
    >
      {/* Video Thumbnail */}
      <div className={cn(
        "relative overflow-hidden bg-muted",
        sizeClasses[size]
      )}>
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-primary text-primary-foreground rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-current" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-1 flex-wrap max-w-[80%]">
          {video.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-black/60 text-white border-none">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Video Info */}
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-medium text-foreground line-clamp-2 leading-snug">
            {video.title}
          </h3>
          <p className="text-sm text-muted-foreground">{video.company}</p>
        </div>

        {/* Rating and Stats */}
        <div className="flex items-center justify-between">
          <StarRating rating={video.rating} size="sm" />
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {formatViews(video.views)}
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              {video.reviewCount}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-1 flex-wrap">
          {video.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Description */}
        {showDescription && video.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        )}
      </div>
    </div>
  );
};