import { Chat, useCreateChatClient } from 'stream-chat-react';

// your Stream app information
const apiKey = '';
const userId = '';
const userName = '';
const userToken = '';

export default async function Page({ params}) {
    const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: { id: userId, name: userName },
  });

    const slug = (await params).slug
    return <div>My Post: {slug}</div>
}