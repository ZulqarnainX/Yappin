import ChatForum from '@/components/ChatForum';
import { currentUser } from '@clerk/nextjs/server';

export default async function Page({ params }) {
  const user = await currentUser();
  const slug = (await params).slug;

  //  Calling /api/create endpoint on the server
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { id: user.id } }),
  });

  const { token } = await res.json(); //  get the token

  return (
    <ChatForum
      slug={slug}
      clerkUser={{ id: user.id, name: user.firstName, token,
        image: user.imageUrl
      }} //  now token is fresh
    />
  );
}
