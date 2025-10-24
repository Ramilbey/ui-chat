import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";

const ContactList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [usersRes, groupsRes] = await Promise.all([
          fetch("https://mock-test.worthycodes.com/api/chatSystem/users/list"),
          fetch("https://mock-test.worthycodes.com/api/chatSystem/groups/list")
        ]);
        
        const usersData = await usersRes.json();
        const groupsData = await groupsRes.json();
        
        setUsers(Array.isArray(usersData) ? usersData : usersData.data || []);
        setGroups(Array.isArray(groupsData) ? groupsData : groupsData.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUserId(user.id);
    onSelectUser(user);
  };

  const filteredUsers = users.filter((u) => 
    u.username?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="w-[360px] bg-card border-r border-border flex items-center justify-center h-screen">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-[360px] bg-card border-r border-border flex flex-col h-screen">
      {/* Header */}
      <div className="flex-shrink-0 p-6 border-b border-border">
        <h2 className="text-xl font-semibold text-foreground mb-4">Chat</h2>
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search Contact"
            value={search}
            className="pl-10 bg-secondary border-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      
      <div className="flex-1 overflow-y-auto px-4 py-2">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => handleUserClick(user)}
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-secondary cursor-pointer transition-colors ${
                selectedUserId === user.id ? "bg-secondary" : ""
              }`}
            >
              <img
                src={user.profileImage || "/default-avatar.png"}
                alt={user.username}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm">{user.username}</h3>
                <p className="text-xs text-muted-foreground truncate">{user.phone}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground py-8">No users found</p>
        )}
      </div>

   
      {groups.length > 0 && (
        <div className="flex-shrink-0 px-4 pb-4 border-t border-border pt-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Groups ({groups.length})</h3>
            <Button size="icon" variant="ghost" className="h-6 w-6">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2">
            {groups.map((group) => (
              <div
                key={group.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary cursor-pointer transition-colors"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm bg-green-500 text-white">
                  {group.name?.charAt(0).toUpperCase() || "G"}
                </div>
                <span className="flex-1 text-sm text-foreground">{group.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;