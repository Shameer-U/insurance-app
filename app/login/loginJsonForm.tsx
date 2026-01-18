"use client";

import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";

const schema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 1 },
  },
  required: ["email", "password"],
};

const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/email",
      label: "Email",
    },
    {
      type: "Control",
      scope: "#/properties/password",
      label: "Password",
      options: { format: "password" },
    },
  ],
};

type Data = {
  email: string;
  password: string;
};

type Props = {
  data: Data;
  onChange: (data: Data) => void;
};

const LoginJsonForm = ({ data, onChange }: Props) => {
  return (
    <JsonForms
      schema={schema}
      uischema={uischema}
      data={data}
      renderers={materialRenderers}
      cells={materialCells}
      onChange={({ data }) => onChange(data)}
    />
  );
};

export default LoginJsonForm;
