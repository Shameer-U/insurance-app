import fs from "fs";
import path from "path";
import { InsurancePolicy } from "@/types";

const filePath = path.join(process.cwd(), "data/forms.json");

export const readForms = () => {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
};

export const writeForm = (formData: InsurancePolicy) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const newForm = {
    id: data.length + 1,
    ...formData,
  };

  data.push(newForm);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return newForm;
};

export const readForm = (id: number) => {
  const raw = fs.readFileSync(filePath, "utf-8");
  const allForms = JSON.parse(raw);
  return allForms?.find((form: InsurancePolicy) => form.id === id);
};

export const updateForm = (id: number, formData: InsurancePolicy) => {
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  if (!Array.isArray(data)) {
    throw new Error("Invalid forms data");
  }

  const index = data.findIndex((form: InsurancePolicy) => form.id === id);

  if (index === -1) {
    throw new Error(`Form with id ${id} not found`);
  }

  // Preserve original id
  const updatedForm: InsurancePolicy = {
    ...formData,
    id,
  };

  data[index] = updatedForm;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

  return updatedForm;
};
