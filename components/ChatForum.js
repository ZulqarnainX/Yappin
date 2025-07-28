'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import {
  StreamChat,
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
  Window,
  Chat,
} from 'stream-chat-react'
import { StreamChat as Stream } from 'stream-chat'
import 'stream-chat-react/dist/css/v2/index.css'

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
const userToken = process.env.NEXT_PUBLIC_STREAM_USER_TOKEN
const chatClient = Stream.getInstance(apiKey)

export default function ChatForum() {
  const { user } = useUser()
  const [channel, setChannel] = useState(null)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (!user) return

    const connect = async () => {
      await chatClient.connectUser(
        {
          id: user.id,
          name: user.fullName || user.username || 'Anonymous',
        },
        userToken
      )

      const channel = chatClient.channel('messaging', 'chatforum', {
        name: 'ChatForum',
        members: [user.id],
      })

      await channel.watch()
      setChannel(channel)
    }

    connect()

    return () => {
      if (chatClient) chatClient.disconnectUser()
    }
  }, [user])

  if (!channel) return <div>Loading chat...</div>

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Chat client={chatClient} theme={`str-chat__theme-${theme}`}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader
              title={
                <div className="flex justify-between items-center w-full">
                  <span>{channel.data.name}</span>
                  <button
                    onClick={toggleTheme}
                    className="ml-4 px-2 py-1 text-sm rounded border dark:border-gray-600 border-gray-300"
                  >
                    {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                  </button>
                </div>
              }
            />
            <MessageList className="custom-scrollbar" />
            <div
              className={`p-2 border-t ${
                theme === 'light'
                  ? 'bg-white border-gray-200'
                  : 'bg-[#1a1a1a] border-gray-800'
              }`}
            >
              <MessageInput />
            </div>
          </Window>
        </Channel>
      </Chat>

      <style jsx global>{`
        .dark ::-webkit-scrollbar {
          width: 8px;
        }

        .dark ::-webkit-scrollbar-track {
          background: #111;
        }

        .dark ::-webkit-scrollbar-thumb {
          background-color: #444;
          border-radius: 10px;
          border: 2px solid #111;
        }

        
        .str-chat__message-list {
          background-color: inherit;
        }
      `}</style>
    </div>
  )
}
