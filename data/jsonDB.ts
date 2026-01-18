import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/forms.json");

export const readForms = () => {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw).forms;
};
