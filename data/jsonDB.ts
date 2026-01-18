import fs from "fs";
import path from "path";
import { InsurancePolicy } from "@/types";

const filePath = path.join(process.cwd(), "data/forms.json");

export const readForms = () => {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw).forms;
};

export const writeForm = (formData: InsurancePolicy) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const newForm = {
    id: data.forms.length + 1,
    ...formData,
  };

  data.forms.push(newForm);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return newForm;
};

export const readForm = (id: number) => {
  const raw = fs.readFileSync(filePath, "utf-8");
  const allForms = JSON.parse(raw).forms;
  return allForms?.find((form: InsurancePolicy) => form.id === id);
};
