"use client"
// import { signOut } from "next-auth/react";
// import { signOut } from "next-auth/react";
// import { signOut } from "../auth";
// import { logOut } from "../lib/actions/auth";
// import { auth } from "./auth";
// import { signIn } from "./auth";
// // import { login } from "./lib/actions/auth";
// import { signOut } from "next-auth/react";
import { logOut } from "../lib/actions/auth";
export const SignOutButton  = ()=>{

return( <div>  <p>you are not signed in</p> <button onClick={()=>logOut()} className="border p-2 border-2 border-black bg-gray-300 m-5">Sign Out</button>   
</div>
)
}