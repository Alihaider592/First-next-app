import NextAuth from "next-auth";
import GITHUB from "next-auth/providers/github"
export const {auth,handlers,signIn,signOut} = NextAuth ({
    providers:[GITHUB
        ({
      clientId: process.env.GITHUB_ID ,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    ]
})

console.log('process.env.XYZ')