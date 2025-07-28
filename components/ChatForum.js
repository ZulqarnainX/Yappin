'use client';

import React, { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css"; // Stream styles

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;
  const userImage = clerkUser.image || clerkUser.imageUrl;

  const user = {
    id: userId,
    name: userName,
    image: userImage,
  };

  const [channel, setChannel] = useState(null);

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel("messaging", slug, {
      image: "https://getstream.io/random_png/?name=react",
      name: capitalize(slug) + " Discussion",
    });

    setChannel(channel);
  }, [client]);

  useEffect(() => {
    const interval = setInterval(() => {
      const messageList = document.querySelector('.str-chat__list');
      if (messageList) {
        messageList.scrollTop = messageList.scrollHeight;
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('chatTheme') || 'light';
    setTheme(saved);
    document.body.classList.toggle('dark-mode', saved === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('chatTheme', next);
    document.body.classList.toggle('dark-mode', next === 'dark');
  };

  if (!client || !channel) return <div className="p-4 text-center">Loading chat...</div>;

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden">
      <Chat client={client} theme={`str-chat__theme-${theme}`}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader
              title={
                <div className="flex justify-between items-center w-full">
                  <span>{channel.data.name}</span>
                  <button
                    onClick={toggleTheme}
                    className="ml-4 p-2 text-sm"
                  >
                    {theme === 'light' ? '🌙' : '☀️'}
                  </button>
                </div>
              }
            />
            <div className="flex-1 overflow-y-auto">
              <MessageList />
            </div>
            <div className={`p-2 border-t ${
              theme === 'light'
                ? 'bg-white border-gray-200'
                : 'bg-[#1a1a1a] border-gray-700'
            }`}>
              <MessageInput />
            </div>
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};

export default ChatForum;
