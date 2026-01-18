"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const LoginJsonForm = dynamic(() => import("@/app/components/loginJsonForm"), {
  ssr: false,
});
import { signIn } from "next-auth/react";
import { type Errors } from "../components/loginJsonForm";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //prevent login if errors present
    if (errors && errors?.length > 0) {
      alert("Please fix all errors");
      return;
    }

    try {
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/dashboard",
      });
    } catch (error) {
      alert("Something went wrong, please try again");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: 500 }}
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg"
      >
        <h2 className="mb-6 text-center text-2xl font-semibold">Login</h2>
        <LoginJsonForm
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
