import {
  Search,
  Phone,
  Video,
  MoreVertical,
  Send,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const ChatArea = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const fromUser = 5;
  const bottomRef = useRef(null);

  useEffect(() => {
    if (!selectedUser?.id) {
      setMessages([]);
      return;
    }

    const abortController = new AbortController();
    const url = `https://mock-test.worthycodes.com/api/chatSystem/chatByUserId/${selectedUser.id}`;
    
    setLoading(true);
    setMessages([]);

    fetch(url, { signal: abortController.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const messageData = Array.isArray(data) ? data : data.data || [];
        if (!abortController.signal.aborted) {
          setMessages(messageData);
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error("Error fetching chats:", err);
          if (!abortController.signal.aborted) {
            setMessages([]);
          }
        }
      })
      .finally(() => {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      });

    return () => abortController.abort();
  }, [selectedUser?.id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!messageInput.trim()) return;
    const body = { fromUser, toUser: selectedUser.id, message: messageInput };

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
        message: messageInput,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, newMsg]);
      setMessageInput("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-background h-screen">
      {/* Header */}
      <div className="border-b border-border p-3 sm:p-4 flex items-center justify-between bg-card">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <img
            src={selectedUser?.profileImage || "/default-avatar.png"}
            alt={selectedUser?.username || "User"}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-foreground text-sm sm:text-base truncate">
              {selectedUser?.username || "Select a user"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">
              {selectedUser?.role || ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <button className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center hover:bg-accent rounded-lg transition-colors">
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button className="hidden sm:flex h-10 w-10 items-center justify-center hover:bg-accent rounded-lg transition-colors">
            <Phone className="h-5 w-5" />
          </button>
          <button className="hidden sm:flex h-10 w-10 items-center justify-center hover:bg-accent rounded-lg transition-colors">
            <Video className="h-5 w-5" />
          </button>
          <button className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center hover:bg-accent rounded-lg transition-colors">
            <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
        {loading ? (
          <p className="text-center text-muted-foreground text-sm">Loading...</p>
        ) : messages.length ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.fromUser === fromUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-2.5 sm:p-3 rounded-2xl max-w-[85%] sm:max-w-md text-sm sm:text-base break-words ${
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
          <p className="text-center text-muted-foreground text-sm">
            {selectedUser ? "No messages yet" : "Select a user to start chatting"}
          </p>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-border p-3 sm:p-4 bg-card flex items-center gap-2">
        <input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={!selectedUser}
        />
        <button
          onClick={handleSendMessage}
          disabled={!selectedUser || !messageInput.trim()}
          className="h-9 w-9 sm:h-10 sm:w-10 bg-destructive hover:bg-destructive/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center text-destructive-foreground transition-colors"
        >
          <Send className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatArea;