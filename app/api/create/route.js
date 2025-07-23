import { StreamChat } from "stream-chat";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
// const user_id = "user_2ztTGFIfC5APedOURHNDC1POiOA";



export async function POST(request) {
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json()
    
    // Create User Token
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED")
    return Response.json({ message: 'Hello World' })
}