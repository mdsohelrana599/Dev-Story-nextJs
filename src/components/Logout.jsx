"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function Logout() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.replace("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
    >
      <LogOut size={18} />
      Logout
    </button>
  );
}
