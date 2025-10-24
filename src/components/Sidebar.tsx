import { Home, BarChart3, Bitcoin, Mail, Receipt, Calendar, MessageCircle, Settings, User } from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { icon: Home, active: false },
    { icon: BarChart3, active: false },
    { icon: Bitcoin, active: false },
    { icon: Mail, active: false },
    { icon: Receipt, active: false },
    { icon: Calendar, active: false },
    { icon: MessageCircle, active: true },
  ];

  return (
    <aside className="w-20 h-[650px] bg-gradient-to-b from-primary-dark to-primary 
    flex flex-col items-center justify-start py-8 gap-6 
    rounded-tr-3xl rounded-br-3xl">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all ${
            item.active
              ? "bg-white/10 text-white"
              : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
        >
          <item.icon size={24} />
          {item.active && (
            <div className="absolute left-0 w-1 h-8 bg-accent rounded-r-full" />
          )}
        </button>
      ))}
      
      <button className="mt-auto w-12 h-12 flex items-center justify-center rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all">
        <Settings size={24} />
      </button>
      
      <div className="relative">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
          <div className="w-full h-full bg-gradient-to-br from-accent to-destructive flex items-center justify-center">
            <User size={24} className="text-white" />
          </div>
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] text-white/90 font-medium whitespace-nowrap">
          Natalie
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
