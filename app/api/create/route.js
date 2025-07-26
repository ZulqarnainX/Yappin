import { StreamChat } from "stream-chat";


const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;

function captialize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function POST(request) {
  try {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();
    const userId = user?.data?.id;

    if (!userId) {
      return Response.json({ error: "Missing user ID" }, { status: 400 });
    }

    const token = serverClient.createToken(userId);

    // Create Stream user
    await serverClient.upsertUser({
      id: userId,
      name: user?.data?.name,
      image: user?.data?.image,
    });


    // Create and join channels
    const slugs = [
      "python-ai",
      "frontend-tech",
      "projects",
      "career",
      "gaming",
      "anime-cartoons",
    ];

    await Promise.all(
      slugs.map(async (item) => {
        const channel = serverClient.channel("messaging", item, {
          image: `http://localhost:3000/channel-pfps/${item}.png`,
          name: captialize(item) + " Discussion",
          created_by_id: userId,
        });
        await channel.create();
        await channel.addMembers([userId]);
      })
    );

    return Response.json({
      message: "User created, channels joined.",
      token, //  return token in response
    });


  } catch (err) {
    console.error("Error in /api/create:", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
