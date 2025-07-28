"use client";

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

  if (!client || !channel) return <div className="p-4 text-center">Loading chat...</div>;

  return (
    <div className="min-h-[87vh] md:h-[95vh] flex flex-col overflow-hidden">
      <Chat client={client}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <div className="flex-1 overflow-hidden md:overflow-y-auto">
              <MessageList />
            </div>
            <div className="p-2 border-t bg-white">
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
