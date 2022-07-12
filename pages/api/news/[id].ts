import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
 const newsId = req.query.id;

 if (req.method === 'DELETE') {
  const news = await prisma.news.delete({
   where: { id: newsId },
  });
  res.json(news);
 } else {
  throw new Error(
   `The HTTP ${req.method} method is not supported at this route.`
  );
 } 
}