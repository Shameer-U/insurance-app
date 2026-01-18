import { NextResponse } from "next/server";
import { readForms, writeForm } from "@/data/jsonDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// GET: list forms
export const GET = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const forms = readForms();
    return NextResponse.json({ data: forms }, { status: 200 });
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
