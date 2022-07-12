import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
 const { query: { searchContent } } = req;

 if (req.method === 'GET') {

  const allNews = searchContent ?
   { OR: [
      { title: { contains: searchContent as string } },
      { article: { contains: searchContent as string } }
   ],
  } : {}
  const news = await prisma.news.findMany({
   where: {
    published: true,
    ...allNews,
   },
   include: {
    author: { select: { name: true } },
   },
  });
  res.json(news);
 } else {
   throw new Error(
   `The HTTP ${req.method} method is not supported at this route.`
   );
 } 
};