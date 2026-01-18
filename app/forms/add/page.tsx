"use client";

import { useState } from "react";
import { addForm } from "@/app/actions/form";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const InsuranceForm = dynamic(() => import("@/app/components/insuranceForm"), {
  ssr: false,
});
import { type Errors } from "@/app/components/insuranceForm";
import { InsurancePolicy } from "@/types";

const AddForm = () => {
  const router = useRouter();
  const [data, setData] = useState<InsurancePolicy>({
    policyNumber: "",
    policyHolder: {
      name: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
      },
      contact: {
        phone: "",
        email: "",
      },
    },
    effectiveDate: "",
    expirationDate: "",
    policyLimits: {
      bodilyInjuryPerPerson: "",
      bodilyInjuryPerAccident: "",
      propertyDamagePerAccident: "",
      combinedSingleLimit: "",
    },
    vehicles: [
      {
        vehicleId: "",
        make: "",
        model: "",
        year: "",
        VIN: "",
        usage: "",
        coverage: {
          collision: false,
          comprehensive: false,
          deductible: {
            collision: "",
            comprehensive: "",
          },
        },
      },
    ],
    drivers: [
      {
        driverId: "",
        name: "",
        licenseNumber: "",
        dateOfBirth: "",
        dateOfHire: "",
      },
    ],
    endorsements: [
      {
        endorsementId: "",
        description: "",
        effectiveDate: "",
        expirationDate: "",
      },
    ],
    premiums: {
      annualPremium: "",
      paymentPlan: "",
      nextPaymentDue: "",
      paymentAmount: "",
    },
  });
  const [errors, setErrors] = useState<Errors>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //prevent submission if errors present
    if (errors && errors?.length > 0) {
      alert("Please fix all errors");
      return;
    }

    try {
      await addForm(data);
      router.push("/forms");
    } catch (error) {
      alert("Something went wrong, please try again");
    }
  };

  return (
    <div className="mx-auto p-6">
      <h2 className="text-xl font-semibold">Add Form</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full rounded-xl bg-white p-6 shadow-lg"
      >
        <InsuranceForm
          data={data}
          onChange={(data, errors) => {
            setData(data);
            setErrors(errors);
          }}
        />
        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
