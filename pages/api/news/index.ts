import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
 const { 
  body: { title, article } 
 } = req;

 const session = await getSession({ req });
 const result = await prisma.news.create({
  data: {
   title: title,
   article: article,
   author: { connect: { email: session?.user?.email } },
  },
 });
 res.send(result);
};