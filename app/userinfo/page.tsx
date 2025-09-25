// "use client"
import Image from "next/image";
// import { signIn } from "next-auth/react";
import { auth } from "../auth";
import { SignOutButton } from "../components/sign-out-button";


// import { login } from "./lib/actions/auth";
// import Image from "next/image";
// import { SignInButton } from "./components/sign-in-button";
export default async function userinfo() {
    
      const Seession = await auth();
    if (Seession?.user) {
      return (
        <div>
          {""}
          <h1>Next auth v5 vs  Next.js 15</h1>
          <p> user sign in with name:{Seession.user.name}</p>
          <p>user sign in with email:{Seession.user.email}</p>
          {Seession.user.image &&(
        <Image
          src="https://avatars.githubusercontent.com/u/223991950?v=4"
          width={100}   // required
          height={100}  // required
          alt="GitHub Avatar"
          className="rounded-full"
        />
          )
        }
      <SignOutButton />
        </div>
      )
    }
}