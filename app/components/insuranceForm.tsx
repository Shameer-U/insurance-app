"use client";

import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { InsurancePolicy } from "@/types";

const schema = {
  title: "Commercial Auto Policy",
  type: "object",
  properties: {
    policyNumber: {
      type: "string",
    },
    policyHolder: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        address: {
          type: "object",
          properties: {
            street: { type: "string" },
            city: { type: "string" },
            state: { type: "string" },
            zipCode: { type: "string" },
          },
          required: ["street", "city", "state", "zipCode"],
        },
        contact: {
          type: "object",
          properties: {
            phone: { type: "string" },
            email: { type: "string" },
          },
          required: ["phone", "email"],
        },
      },
      required: ["name", "address", "contact"],
    },
    effectiveDate: {
      type: "string",
      format: "date",
    },
    expirationDate: {
      type: "string",
      format: "date",
    },
    policyLimits: {
      type: "object",
      properties: {
        bodilyInjuryPerPerson: { type: "string" },
        bodilyInjuryPerAccident: { type: "string" },
        propertyDamagePerAccident: { type: "string" },
        combinedSingleLimit: { type: "string" },
      },
      required: [
        "bodilyInjuryPerPerson",
        "bodilyInjuryPerAccident",
        "propertyDamagePerAccident",
        "combinedSingleLimit",
      ],
    },
    vehicles: {
      type: "array",
      items: {
        type: "object",
        properties: {
          vehicleId: { type: "string" },
          make: { type: "string" },
          model: { type: "string" },
          year: { type: "integer" },
          VIN: { type: "string" },
          usage: { type: "string" },
          coverage: {
            type: "object",
            properties: {
              collision: { type: "boolean" },
              comprehensive: { type: "boolean" },
              deductible: {
                type: "object",
                properties: {
                  collision: { type: "string" },
                  comprehensive: { type: "string" },
                },
                required: ["collision", "comprehensive"],
              },
            },
            required: ["collision", "comprehensive", "deductible"],
          },
        },
        required: [
          "vehicleId",
          "make",
          "model",
          "year",
          "VIN",
          "usage",
          "coverage",
        ],
      },
    },
    drivers: {
      type: "array",
      items: {
        type: "object",
        properties: {
          driverId: { type: "string" },
          name: { type: "string" },
          licenseNumber: { type: "string" },
          dateOfBirth: {
            type: "string",
            format: "date",
          },
          dateOfHire: {
            type: "string",
            format: "date",
          },
        },
        required: [
          "driverId",
          "name",
          "licenseNumber",
          "dateOfBirth",
          "dateOfHire",
        ],
      },
    },
    endorsements: {
      type: "array",
      items: {
        type: "object",
        properties: {
          endorsementId: { type: "string" },
          description: { type: "string" },
          effectiveDate: {
            type: "string",
            format: "date",
          },
          expirationDate: {
            type: "string",
            format: "date",
          },
        },
        required: [
          "endorsementId",
          "description",
          "effectiveDate",
          "expirationDate",
        ],
      },
    },
    premiums: {
      type: "object",
      properties: {
        annualPremium: { type: "string" },
        paymentPlan: { type: "string" },
        nextPaymentDue: {
          type: "string",
          format: "date",
        },
        paymentAmount: { type: "string" },
      },
      required: [
        "annualPremium",
        "paymentPlan",
        "nextPaymentDue",
        "paymentAmount",
      ],
    },
  },
  required: [
    "policyNumber",
    "policyHolder",
    "effectiveDate",
    "expirationDate",
    "policyLimits",
    "vehicles",
    "drivers",
    "endorsements",
    "premiums",
  ],
};
const uiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Group",
      label: "Policy Information",
      elements: [
        { type: "Control", scope: "#/properties/policyNumber" },
        { type: "Control", scope: "#/properties/effectiveDate" },
        { type: "Control", scope: "#/properties/expirationDate" },
      ],
    },

    {
      type: "Group",
      label: "Policy Holder",
      elements: [
        { type: "Control", scope: "#/properties/policyHolder/properties/name" },

        {
          type: "Group",
          label: "Address",
          elements: [
            {
              type: "Control",
              scope:
                "#/properties/policyHolder/properties/address/properties/street",
            },
            {
              type: "Control",
              scope:
                "#/properties/policyHolder/properties/address/properties/city",
            },
            {
              type: "Control",
              scope:
                "#/properties/policyHolder/properties/address/properties/state",
            },
            {
              type: "Control",
              scope:
                "#/properties/policyHolder/properties/address/properties/zipCode",
            },
          ],
        },

        {
          type: "Group",
          label: "Contact",
          elements: [
            {
              type: "Control",
              scope:
                "#/properties/policyHolder/properties/contact/properties/phone",
            },
            {
              type: "Control",
              scope:
                "#/properties/policyHolder/properties/contact/properties/email",
            },
          ],
        },
      ],
    },

    {
      type: "Group",
      label: "Policy Limits",
      elements: [
        {
          type: "Control",
          scope: "#/properties/policyLimits/properties/bodilyInjuryPerPerson",
        },
        {
          type: "Control",
          scope: "#/properties/policyLimits/properties/bodilyInjuryPerAccident",
        },
        {
          type: "Control",
          scope:
            "#/properties/policyLimits/properties/propertyDamagePerAccident",
        },
        {
          type: "Control",
          scope: "#/properties/policyLimits/properties/combinedSingleLimit",
        },
      ],
    },

    {
      type: "Control",
      scope: "#/properties/vehicles",
      options: {
        detail: {
          type: "VerticalLayout",
          elements: [
            { type: "Control", scope: "#/properties/vehicleId" },
            { type: "Control", scope: "#/properties/make" },
            { type: "Control", scope: "#/properties/model" },
            { type: "Control", scope: "#/properties/year" },
            { type: "Control", scope: "#/properties/VIN" },
            { type: "Control", scope: "#/properties/usage" },

            {
              type: "Group",
              label: "Coverage",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/coverage/properties/collision",
                },
                {
                  type: "Control",
                  scope: "#/properties/coverage/properties/comprehensive",
                },
                {
                  type: "Control",
                  scope:
                    "#/properties/coverage/properties/deductible/properties/collision",
                },
                {
                  type: "Control",
                  scope:
                    "#/properties/coverage/properties/deductible/properties/comprehensive",
                },
              ],
            },
          ],
        },
      },
    },

    {
      type: "Control",
      scope: "#/properties/drivers",
    },

    {
      type: "Control",
      scope: "#/properties/endorsements",
    },

    {
      type: "Group",
      label: "Premiums",
      elements: [
        {
          type: "Control",
          scope: "#/properties/premiums/properties/annualPremium",
        },
        {
          type: "Control",
          scope: "#/properties/premiums/properties/paymentPlan",
        },
        {
          type: "Control",
          scope: "#/properties/premiums/properties/nextPaymentDue",
        },
        {
          type: "Control",
          scope: "#/properties/premiums/properties/paymentAmount",
        },
      ],
    },
  ],
};

export type Errors = any[] | null;

type Props = {
  data: InsurancePolicy;
  onChange: (data: InsurancePolicy, errors: Errors) => void;
};

const InsuranceForm = ({ data, onChange }: Props) => {
  return (
    <JsonForms
      schema={schema}
      uischema={uiSchema}
      data={data}
      renderers={materialRenderers}
      cells={materialCells}
      onChange={({ data, errors }) => onChange(data, errors as Errors)}
    />
  );
};

export default InsuranceForm;
