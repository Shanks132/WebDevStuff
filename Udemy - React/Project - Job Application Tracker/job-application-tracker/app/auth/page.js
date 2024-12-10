"use client";
import { auth } from "../firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const handleGoogleAuth = async (event) => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user.displayName);
        router.push("/", { name: user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <>
      <main className="w-full flex flex-col h-screen ">
        <header className="mx-auto text-center">
          <h1 className="mt-16 mb-5 text-6xl">
            Job Application Tracker
          </h1>
          <strong className="my-8 text-xl">
            Track all your job applications from multiple job application websites from one place !
          </strong>
        </header>
        <button
          onClick={handleGoogleAuth}
          className="text-2xl p-6 text-yellow-50 mx-auto my-6 border-2 border-white">
          Login with google
        </button>
      </main>
    </>
  );
}
