// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import { connectToDatabase } from "@/lib/mongodb";
import { connectToDatabase } from "../../lib/mongodb";
import User from "../../../models/User";

// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const body = await req.json(); // get data from request
    const user = await User.create(body);

    return Response.json(user, { status: 201 });
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

