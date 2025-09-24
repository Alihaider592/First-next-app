"use server"

import { signIn, signOut } from "../../auth"

export const login = async()=>{
    console.log(login)
    await signIn("github",{redirectTo:"/"})
} 
export const logOut = async()=>{
    console.log(logOut)
    await signOut({redirectTo:"/"})
} 