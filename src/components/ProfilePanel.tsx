import { UserPlus, MessageCircle, Heart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfilePanel = () => {
  return (
    <div className="w-[340px] bg-card border-l border-border h-screen overflow-y-auto">
      <div className="relative h-48 bg-gradient-to-br from-accent to-[hsl(31,96%,50%)] flex items-center justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-1">Kevin</h2>
          <p className="text-sm text-muted-foreground mb-2">UI / UX Designer</p>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <span>📍</span>
            San Francisco, California
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button size="icon" variant="outline" className="h-11 w-11 rounded-full">
            <UserPlus className="h-5 w-5" />
          </Button>
          <Button size="icon" className="h-11 w-11 rounded-full bg-primary hover:bg-primary/90">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button size="icon" className="h-11 w-11 rounded-full bg-destructive hover:bg-destructive/90">
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              User Information
            </h3>
            <Button size="icon" variant="ghost" className="h-6 w-6">
              <Info className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Phone</p>
              <p className="text-foreground font-medium">+01-222-345678</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Email</p>
              <p className="text-foreground font-medium">Kevin_aztechnologies@gmail.com</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Group Participants</h3>
            <Button size="icon" variant="ghost" className="h-6 w-6">
              <UserPlus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-medium text-sm">
              M
            </div>
            <span className="flex-1 text-sm text-foreground">Marketing</span>
            <span className="text-xs text-muted-foreground">+2</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Media</h3>
            <Button size="icon" variant="ghost" className="h-6 w-6">
              <Info className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&h=150&fit=crop" 
              alt="Media 1" 
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=150&h=150&fit=crop" 
              alt="Media 2" 
              className="w-full aspect-square object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=150&h=150&fit=crop" 
              alt="Media 3" 
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;
