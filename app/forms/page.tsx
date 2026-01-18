import { getForms } from "@/app/actions/form";
import FormsTable from "@/app/components/formsTable";

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
      <FormsTable forms={data} />
    </div>
  );
};

export default Forms;
