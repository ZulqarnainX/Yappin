"use client"
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
import 'stream-chat-react/dist/css/v2/index.css'; // Fixes the layout

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const ChatForum = ({ clerkUser, slug }) => {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
    const userId = clerkUser.id;
    const userName = clerkUser.name;
    const userToken = clerkUser.token;
    const userImage = clerkUser.image || clerkUser.imageUrl; // use correct image from Clerk


    const user = {
        id: userId,
        name: userName,
        image: userImage, //  using Clerk profile image
    };

    const [channel, setChannel] = useState();
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    useEffect(() => {
        if (!client) return;

        const channel = client.channel('messaging', slug, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(slug) + " Discussion",
        });

        setChannel(channel);
    }, [client]);

    if (!client) return <div>Setting up client & connection...</div>;

    return (
        <Chat client={client}>
            <Channel channel={channel}>
                <Window>
                    <ChannelHeader />
                    <div className="h-[79vh] scrollbar-thumb-gray-400 scrollbar-track-transparent">
                        <MessageList />
                    </div>
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    );
};

export default ChatForum;
