
"use client";

import Banner from "@/components/Banner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");

    if (loginStatus === "true") {
      setIsAuthenticated(true);
    } else {
      router.replace("/login");
    }

    setChecking(false);
  }, [router]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="animate-pulse text-lg">
          Checking Login...
        </p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <Banner />;
}
