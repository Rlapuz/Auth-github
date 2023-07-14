"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <>
      <div className="text-black flex flex-col gap-10">
        <button
          onClick={() => signIn("github")}
          className="mt-4 bg-slate-800 text-white px-6 py-3 rounded-lg">
          Sign in with Github
        </button>
        <p className="flex justify-center">or</p>
        <button
          onClick={() => signIn("google")}
          className="mt-4 bg-slate-800 text-white px-6 py-3 rounded-lg">
          Sign in with Google
        </button>
      </div>
    </>
  );
}
