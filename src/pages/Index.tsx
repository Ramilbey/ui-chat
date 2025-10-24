import Sidebar from "@/components/Sidebar";
import ContactList from "@/components/ContactList";
import ChatArea from "@/components/ChatArea";
import ProfilePanel from "@/components/ProfilePanel";
import React, { useState } from "react";

const Index = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar  />
      <ContactList onSelectUser={setSelectedUser} />
      <ChatArea selectedUser={selectedUser} />
      <ProfilePanel selectedUser={selectedUser}/>
    </div>
  );
};

export default Index;