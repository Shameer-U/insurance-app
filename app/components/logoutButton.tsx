"use client";

import { signOut, useSession } from "next-auth/react";

const LogoutButton = () => {
  const { data: session } = useSession();

  // Hide button if not logged in
  if (!session) return null;

  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
