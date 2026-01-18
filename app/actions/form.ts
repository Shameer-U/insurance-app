"use server";

import { readForms, writeForm } from "@/data/jsonDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const getForms = async () => {
  try {
    return readForms();
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
};

export const addForm = async (formData: any) => {
  //checking for session since it is exposed  to client
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Unauthorized");
  }

  try {
    return writeForm(formData);
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
};
