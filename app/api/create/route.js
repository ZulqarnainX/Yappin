import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server"; // ✅ correct import for App Router

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
    console.log("Generated Stream token:", token);

    // Create Stream user
    await serverClient.upsertUser({ id: userId });

    // ✅ Set token in Clerk publicMetadata
    // await clerkClient.users.updateUserMetadata(userId, {
    //   publicMetadata: {
    //     token: token, // already string
    //   },
    // });
    console.log("Token saved to Clerk metadata.");

    // Create and join channels
    const slugs = [
      "python-new",
      "frontend-new",
      "projects-new",
      "career-new",
      "gaming-new",
      "anime-new",
    ];

    await Promise.all(
      slugs.map(async (item) => {
        const channel = serverClient.channel("messaging", item, {
          image: "https://getstream.io/random_png/?name=react",
          name: captialize(item) + " Discussion",
          created_by_id: userId,
        });
        await channel.create();
        await channel.addMembers([userId]);
      })
    );

    return Response.json({ message: "User created, metadata saved, channels joined." });

  } catch (err) {
    console.error("Error in /api/create:", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
