import { Search, User, Plus, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onSubmitVideo?: () => void;
  onLogin?: () => void;
  onProfile?: () => void;
  isLoggedIn?: boolean;
  className?: string;
}

export const Header = ({ 
  onSearch, 
  onSubmitVideo, 
  onLogin, 
  onProfile, 
  isLoggedIn = false,
  className 
}: HeaderProps) => {
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/80",
      className
    )}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-serif font-medium text-primary tracking-wide">
            STARTUPREELS
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search startups, videos, or tags..."
              className="pl-10 bg-secondary border-border focus:border-primary"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onSubmitVideo}
                className="hidden sm:flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Submit Video
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onProfile}
                className="flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Button>
            </>
          ) : (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onLogin}
              className="flex items-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};