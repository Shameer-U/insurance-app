import { getForms } from "@/app/actions/form";
import FormsTable from "@/app/components/formsTable";
import Link from "next/link";

const fetchForms = async () => {
  try {
    const forms = await getForms();
    return forms;
  } catch (error) {
    return null;
  }
};

const Forms = async () => {
  const data = await fetchForms();

  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Forms</h2>
        <Link
          href="/forms/add"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Add Form
        </Link>
      </div>
      <FormsTable forms={data} />
    </div>
  );
};

export default Forms;
