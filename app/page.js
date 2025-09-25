// "use client"
// import { signIn } from "./auth";
// import { login } from "./lib/actions/auth";
// export default function Page() {
//   const Seession = awa
//   return <button onClick={()=>login("github")}>sign in with github</button>
// }
// "use client"
// import { login } from "./lib/actions/auth"
// export default function Page(){
//   return
//   <div>
//     <button onClick={()=>login()}>signIn with git hub</button>
//   </div>


// } 
// "use client"
// import { SignOutButton } from "./components/sign-out-button";

// import Image from "next/image";
// import { signIn } from "next-auth/react";
// // import { login } from "./lib/actions/auth";
// // import Image from "next/image";
// import { auth } from "./auth";
// import { SignInButton } from "./components/sign-in-button";
// import Link from "next/link";
// export default async function  Home() {
//   const Seession = await auth();
// if (Seession?.user) {
//   return (
//     <div>
//  <Link href={"/userinfo"}>userinfo</Link>

//  <div>
//         <SignInButton/>
//       {""}
//       {/* <p>you are not signed in</p> <button onClick={()=>signIn("github")} className="border p-2 border-2 border-black bg-gray-300 m-5">sign in with github</button> */}
//     </div>
// </div>
//   )
// }
//         <SignOutButton/>

// // // console.log(Seession)
//   // return (
   
//   // )
// }
// app/page.tsx (Server Component by default)
import { auth } from "./auth";
import Link from "next/link";
import { SignInButton } from "./components/sign-in-button";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
        <p>Welcome, {session.user.name}</p>
        <Link href="/userinfo">User Info</Link>
        
      </div>
    );
  }

  return (
    <div>
      <p>You are not signed in</p>
      <SignInButton />
    </div>
  );
}
