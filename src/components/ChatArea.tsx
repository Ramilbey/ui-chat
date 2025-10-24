import { Search, Phone, Video, MoreVertical, Paperclip, Smile, Send, AtSign, Bold, Image, Mic, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatArea = () => {
  return (
    <div className="flex-1 flex flex-col bg-background h-screen">
      <div className="border-b border-border p-4 flex items-center justify-between bg-card">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-destructive flex items-center justify-center text-white font-medium">
            K
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Kevin</h2>
            <p className="text-sm text-muted-foreground">UI / UX Designer</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Phone className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Video className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
            M
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">Michael Sean</span>
              <span className="text-xs text-muted-foreground">Yesterday 10:44 AM</span>
            </div>
            <div className="bg-card p-4 rounded-2xl rounded-tl-sm max-w-md shadow-sm border border-border">
              <p className="text-sm text-foreground">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 justify-end">
          <div className="flex flex-col gap-1 items-end">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">10:20 AM Yesterday</span>
              <span className="text-sm font-medium text-foreground">Michael Sean</span>
            </div>
            <div className="bg-primary p-4 rounded-2xl rounded-tr-sm max-w-md shadow-sm">
              <p className="text-sm text-primary-foreground">
                It is a long established fact that a reader will be distracted by the readable
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-destructive flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
            K
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
            M
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">Michael Sean</span>
              <span className="text-xs text-muted-foreground">Yesterday 10:50 AM</span>
            </div>
            <div className="bg-card p-3 rounded-2xl rounded-tl-sm max-w-md shadow-sm border border-border">
              <p className="text-sm text-foreground mb-2">I shared Website here. Check it and let me know</p>
              <div className="grid grid-cols-2 gap-2">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=150&fit=crop" alt="Hospital" className="w-full h-24 object-cover rounded-lg" />
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=150&fit=crop" alt="Office" className="w-full h-24 object-cover rounded-lg" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Azhospital | United States</p>
              <a href="#" className="text-xs text-primary hover:underline">https://azhospitals.com/preventivehealth/</a>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 justify-end">
          <div className="flex flex-col gap-1 items-end">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">10:20 AM Yesterday</span>
              <span className="text-sm font-medium text-foreground">Michael Sean</span>
            </div>
            <div className="bg-primary p-4 rounded-2xl rounded-tr-sm max-w-md shadow-sm">
              <p className="text-sm text-primary-foreground">
                There are many variations of passages of Lorem Ipsum available, but the majority.
              </p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-destructive flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
            K
          </div>
        </div>
      </div>

      <div className="border-t border-border p-4 bg-card">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Type a message here.."
            className="flex-1 bg-background border-border"
          />
          <div className="flex items-center gap-1">
            <Button size="icon" variant="ghost" className="h-9 w-9">
              <AtSign className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9">
              <Bold className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9">
              <Smile className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9">
              <Image className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9">
              <Mic className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9">
              <Link className="h-4 w-4" />
            </Button>
          </div>
          <Button size="icon" className="h-10 w-10 bg-destructive hover:bg-destructive/90 rounded-full">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
