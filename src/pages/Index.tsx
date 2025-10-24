import Sidebar from "@/components/Sidebar";
import ContactList from "@/components/ContactList";
import ChatArea from "@/components/ChatArea";
import ProfilePanel from "@/components/ProfilePanel";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <ContactList />
      <ChatArea />
      <ProfilePanel />
    </div>
  );
};

export default Index;
