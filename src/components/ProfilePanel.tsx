import { useEffect, useState } from "react";
import { UserPlus, MessageCircle, Heart, Info } from "lucide-react";

const ProfilePanel = ({ selectedUser }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedUser?.id) {
      setUser(null);
      return;
    }

    const abortController = new AbortController();

    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://mock-test.worthycodes.com/api/chatSystem/user/${selectedUser.id}`,
          { signal: abortController.signal }
        );
        
        if (!res.ok) throw new Error("Failed to fetch user");
        
        const data = await res.json();
        
        if (!abortController.signal.aborted) {
          setUser(data);
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error("Error fetching user:", err);
          if (!abortController.signal.aborted) {
            setUser(null);
          }
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchUser();

    return () => abortController.abort();
  }, [selectedUser?.id]);

  if (loading) {
    return (
      <div className="w-[340px] bg-card border-l border-border h-screen flex items-center justify-center text-muted-foreground">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="w-[340px] bg-card border-l border-border h-screen flex items-center justify-center text-muted-foreground">
        Select a user to view profile
      </div>
    );
  }

  return (
    <div className="w-[340px] bg-card border-l border-border h-screen overflow-y-auto">
      
      <div className="relative h-48 bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
          <img
            src={user.profileImage}
            alt={user.username}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      
      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-1">
            {user.username}
          </h2>
          <p className="text-sm text-muted-foreground mb-2">
            {user.position}
          </p>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <span>📍</span>
            {user.address}
          </p>
        </div>

       
        <div className="flex items-center justify-center gap-3">
          <button className="h-11 w-11 rounded-full border border-border bg-background hover:bg-accent flex items-center justify-center transition-colors">
            <UserPlus className="h-5 w-5" />
          </button>
          <button className="h-11 w-11 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-colors">
            <MessageCircle className="h-5 w-5" />
          </button>
          <button className="h-11 w-11 rounded-full bg-destructive hover:bg-destructive/90 text-destructive-foreground flex items-center justify-center transition-colors">
            <Heart className="h-5 w-5" />
          </button>
        </div>

        
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              User Information
            </h3>
            <button className="h-6 w-6 hover:bg-accent rounded flex items-center justify-center transition-colors">
              <Info className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Phone</p>
              <p className="text-foreground font-medium">{user.phone}</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Email</p>
              <p className="text-foreground font-medium">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel;