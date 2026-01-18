import { InsurancePolicy } from "@/types";

const FormsTable = ({ forms }: { forms: InsurancePolicy[] }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
              Policy Number
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
              Effective Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
              Expiration Date
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {forms
            ? forms?.map((form: InsurancePolicy) => (
                <tr key={form?.id} className="transition hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {form?.policyNumber}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {form?.effectiveDate}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {form?.expirationDate}
                  </td>
                </tr>
              ))
            : "No Data"}
        </tbody>
      </table>
    </div>
  );
};

export default FormsTable;
