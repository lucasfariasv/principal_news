import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
 const newsId = req.query.id;
 const news = await prisma.news.update({
  where: { id: newsId },
  data: { published: true },
 });
 res.json(news);
}