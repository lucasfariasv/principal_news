import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import prisma from "../../../lib/prisma";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {

 return await NextAuth(req, res, {
  providers: [
   GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
   })
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  })
};