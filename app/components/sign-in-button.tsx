"use client"
// import { auth } from "./auth";
// import { signIn } from "./auth";
// // import { login } from "./lib/actions/auth";
import { signIn } from "next-auth/react";
export const SignInButton  = ()=>{

return( <div>  <p>you are not signed in</p> <button onClick={()=>signIn("github")} className="border p-2 border-2 border-black bg-gray-300 m-5">sign in with github</button>   
</div>
)
}