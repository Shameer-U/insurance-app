"use server";

import { readForms } from "@/data/jsonDB";

export const getForms = async () => {
  try {
    return readForms();
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
};
