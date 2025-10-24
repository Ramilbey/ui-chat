import {
  Search,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  AtSign,
  Bold,
  Image,
  Mic,
  Link,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect, useRef } from "react";

const ChatArea = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const fromUser = 5;
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!selectedUser?.id) return;

    const url = `https://mock-test.worthycodes.com/api/chatSystem/chatByUserId/${selectedUser.id}`;
    setLoading(true);
    setMessages([]);

    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const messageData = Array.isArray(data) ? data : data.data || [];
        setMessages(messageData);
      })
      .catch((err) => {
        console.error("Error fetching chats:", err);
        setMessages([]);
      })
      .finally(() => setLoading(false));
  }, [selectedUser]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return;
    const body = { fromUser, toUser: selectedUser.id, message: messageText };

    try {
      const url = "https://mock-test.worthycodes.com/api/chatSystem/chat/add";
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
      const res = await fetch(proxyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error(`Failed ${res.status}`);

      const newMsg = {
        id: Date.now(),
        fromUser,
        toUser: selectedUser.id,
        message: messageText,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, newMsg]);
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-background h-screen">
      {/* Header */}
      <div className="border-b border-border p-4 flex items-center justify-between bg-card">
        <div className="flex items-center gap-3">
          <img
            src={selectedUser?.profileImage || "/default-avatar.png"}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-foreground">
              {selectedUser?.username || "Select a user"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {selectedUser?.role || ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <Search className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Phone className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <Video className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {loading ? (
          <p className="text-center text-muted-foreground">Loading...</p>
        ) : messages.length ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.fromUser === fromUser ? "justify-end" : ""
              }`}
            >
              <div
                className={`p-3 rounded-2xl max-w-md ${
                  msg.fromUser === fromUser
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-card border border-border rounded-tl-sm"
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground">No messages yet</p>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form
        className="border-t border-border p-4 bg-card flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const input = form.elements.namedItem("message") as HTMLInputElement;
          const val = input.value;
          handleSendMessage(val);
          form.reset();
        }}
      >
        <Input
          name="message"
          placeholder="Type a message..."
          className="flex-1 bg-background border-border"
        />
        <Button
          type="submit"
          size="icon"
          className="h-10 w-10 bg-destructive rounded-full"
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default ChatArea;
