import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";

const ContactList = ({ onSelectUser }) => {

  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const url =
          "https://mock-test.worthycodes.com/api/chatSystem/users/list";

        const res = await fetch(url);
        const result = await res.json();
        setUsers(result);
      } catch (error) {
        console.error("Error fetching users: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const url =
          "https://mock-test.worthycodes.com/api/chatSystem/groups/list";

        const res = await fetch(url);
        const result = await res.json();
        setGroups(result);
      } catch (error) {
        console.error("Error fetching groups: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGroups();
  }, []);
  


  const handleUserClick = (userId) => {
    setSelectedUser(userId);
    onSelectUser(userId); 
    console.log(" User selected:", userId);
  };

  if (loading) return <div className="chat-user-list">Loading Users...</div>;

  return (
    <div className="w-[360px] bg-card border-r border-border flex flex-col h-screen">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Chat</h2>
          
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type = "text"
            placeholder="Search Contact"
            value={search}
            className="pl-10 bg-secondary border-none"
            onChange={(e)=> setSearch(e.target.value)}
          />
          {users
            .filter((user) =>
              user.username.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary cursor-pointer transition-colors"
            >
              <div className="relative">
                <img
                  src={user.profileImage}
                  alt={user.username}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium`}
                />
                {user.unread && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-white text-xs">
                    {user.position}
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground text-sm">
                  {user.username}
                </h3>
                <p className="text-xs text-muted-foreground truncate">
                  {user.phone}
                </p>
               
              </div>
            </div>
          ))}
        </div>

       

        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-foreground">Groups (5)</h3>
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
                <div
                  className={`w-8 h-8 rounded-full  flex items-center justify-center font-medium text-sm bg-green-500`}
                >
                  {group.name.charAt(0).toUpperCase()}
                </div>
                <span className="flex-1 text-sm text-foreground">
                  {group.name}
                </span>
              </div>
            ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactList;
