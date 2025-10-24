import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactList = () => {
  const contacts = [
    {
      name: "Jonathan",
      message: "Lorem Ipsum is simply text...",
      time: "10:00AM",
      date: "Dec 12 2022",
      unread: 1,
      avatar: "J",
      color: "bg-green-500"
    },
    {
      name: "Elizabeth Jan",
      message: "It is a long established fact",
      time: "10:40AM",
      date: "Dec 12 2022",
      avatar: "E",
      color: "bg-red-500"
    },
    {
      name: "Kevin",
      message: "Contrary to popular belief, Lor...",
      time: "03:00PM",
      date: "Dec 12 2022",
      unread: 2,
      avatar: "K",
      color: "bg-purple-500"
    },
    {
      name: "Michael Sean",
      message: "Great!",
      time: "05:46PM",
      date: "Dec 12 2022",
      unread: 1,
      avatar: "M",
      color: "bg-blue-500"
    },
  ];

  const groups = [
    { name: "App Development", initial: "A", color: "bg-red-100 text-red-600", members: 12 },
    { name: "UI/UX Designs", initial: "D", color: "bg-yellow-100 text-yellow-600" },
    { name: "iSpring ABC Team", initial: "I", color: "bg-pink-100 text-pink-600" },
    { name: "Marketing", initial: "M", color: "bg-green-100 text-green-600", members: 12 },
    { name: "Accounts and Sales Team", initial: "A", color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <div className="w-[360px] bg-card border-r border-border flex flex-col h-screen">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Chat</h2>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
            Add New Profile
          </Button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Contact"
            className="pl-10 bg-secondary border-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-2">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary cursor-pointer transition-colors"
            >
              <div className="relative">
                <div className={`w-12 h-12 rounded-full ${contact.color} flex items-center justify-center text-white font-medium`}>
                  {contact.avatar}
                </div>
                {contact.unread && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-white text-xs">
                    {contact.unread}
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm">{contact.name}</h3>
                <p className="text-xs text-muted-foreground truncate">{contact.message}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs text-muted-foreground">{contact.date}</span>
                  <span className="text-xs font-medium text-foreground">{contact.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-3">
          <div className="flex gap-2 mb-4">
            <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
              Meeting
            </Button>
            <Button variant="ghost" className="flex-1">
              Schedule
            </Button>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Groups (5)</h3>
            <Button size="icon" variant="ghost" className="h-6 w-6">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            {groups.map((group, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary cursor-pointer transition-colors"
              >
                <div className={`w-8 h-8 rounded-full ${group.color} flex items-center justify-center font-medium text-sm`}>
                  {group.initial}
                </div>
                <span className="flex-1 text-sm text-foreground">{group.name}</span>
                {group.members && (
                  <span className="text-xs text-muted-foreground">+{group.members}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
