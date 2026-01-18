import { NextResponse } from "next/server";
import { readForm, writeForm } from "@/data/jsonDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// GET: single form
export const GET = async (req: Request) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "id is required" }, { status: 400 });
    }

    const form = readForm(Number(id));
    return NextResponse.json({ data: form }, { status: 200 });
  } catch (error) {
    console.error("GET /api/forms failed:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch forms",
      },
      { status: 500 },
    );
  }
};
