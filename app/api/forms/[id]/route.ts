import { NextResponse } from "next/server";
import { updateForm } from "@/data/jsonDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const PUT = async (
  req: Request,
  context: { params: Promise<{ id: string }> },
) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    const formId = Number(id);
    if (Number.isNaN(formId)) {
      return NextResponse.json({ error: "Invalid form id" }, { status: 400 });
    }

    const body = await req.json();
    if (!body) {
      return NextResponse.json(
        { error: "Request body is required" },
        { status: 400 },
      );
    }

    const updatedForm = updateForm(formId, body);

    if (!updatedForm) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Form updated", data: updatedForm },
      { status: 200 },
    );
  } catch (error) {
    console.error("PUT /api/forms/[id] failed:", error);
    return NextResponse.json(
      { error: "Failed to update form" },
      { status: 500 },
    );
  }
};
