'use client';

import React, { useState, useEffect } from 'react';
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css'; // Stream styles

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

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: capitalize(slug) + ' Discussion',
    });

    setChannel(channel);
  }, [client, slug]);

  useEffect(() => {
    const interval = setInterval(() => {
      const messageList = document.querySelector('.str-chat__list');
      if (messageList) {
        messageList.scrollTop = messageList.scrollHeight;
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // THEME STATE & TOGGLE
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('chatTheme') || 'light';
    setTheme(saved);
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${saved}-mode`);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('chatTheme', next);
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(`${next}-mode`);
  };

  if (!client || !channel)
    return <div className="p-4 text-center">Loading chat...</div>;

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] overflow-hidden">
      <Chat client={client}>
        <Channel channel={channel}>
          <Window>
            <div className="flex justify-between items-center px-4 py-2 border-b">
              <ChannelHeader />
              <button
                onClick={toggleTheme}
                className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white transition"
              >
                {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <MessageList />
            </div>
            <div className="p-2 border-t bg-white dark:bg-gray-900">
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
