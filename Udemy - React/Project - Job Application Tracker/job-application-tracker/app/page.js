"use client";
import { auth } from "./firebase/firebaseConfig";
import { useRouter, redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const user = auth.currentUser;
  if (!user) {
    redirect("/auth");
  }
  let currentUser = "";

  const [token, setToken] = useState(null);
  const goToHomePage = () => {
    router.push("/home");
  };
  useEffect(()=>{
   handleGetToken();  
  },[])
  const handleGetToken = () => {
    if (typeof window !== "undefined") {
      currentUser = user.displayName;
      setToken(currentUser);
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <button
          className="bg-slate-700 w-56 mx-auto hover:bg-slate-800 my-3"
          onClick={goToHomePage}>
          Go to Home Page
        </button>
      </div>
    </>
  );
}
