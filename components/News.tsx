import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type NewsProps = {
 id: string;
 title: string;
 author: {
  name: string;
  email: string;
 } | null;
 article: string;
 published: boolean;
};

const News: React.FC<{ news: NewsProps }> = ({ news }) => {
 const authorName = news.author ? news.author.name : "Unknown author";
 return (
  <div className="text-black bg-zinc-200" 
   onClick={() => Router.push('/p/[id]', `/p/${news.id}`)}>
    <div className="bg-white p-3">
     <div className="font-bold text-2xl">{news.title}</div>
     <p className="text-xs">- By {authorName}</p>
     <ReactMarkdown children={news.article} />
    </div>
  </div>
 )
}

export default News;