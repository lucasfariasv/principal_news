import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { NewsProps } from "../../components/News";
import { PaperPlaneTilt, Trash } from "phosphor-react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import prisma from "../../lib/prisma";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Loading } from "../../components/Loading";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
 const news = await prisma.news.findUnique({
  where: {
   id: String(params?.id),
  },
  include: {
   author: {
    select: { name: true },
   },
  },
 });

 return {
  props: news,
 };
};

async function publishNews(id: string) : Promise<void> {
 await fetch(`/api/publish/${id}`, {
  method: 'PUT',
 });
 await Router.push('/');
}

async function deleteNews(id: string) : Promise<void> {
 await fetch(`/api/news/${id}`, {
  method: 'DELETE',
 });
 Router.push('/');
}

const News: React.FC<NewsProps> = (props) => {
 const { data: session, status } = useSession();
 
 if (status === 'loading') {
  return <Loading />
 };

 const userHasValidSession = Boolean(session);
 const newsBelongsToUser = Boolean(session?.user?.email === props.author?.email);

 let title = props.title;
 
 if (!props.published) title = `${title} (Draft)`;

 if (!props.published && userHasValidSession && newsBelongsToUser) {
  return (
   <div>
    <Header />
    <div>
     <div className="pb-5 mt-20 text-5xl font-bold font-serif text-center">{title}</div>
     <p className="text-center">- By {props?.author?.name || 'Unknown author'}</p>
     <div>
      <ReactMarkdown className="px-6 py-4 text-xl flex justify-center item-center h-screen" children={props.article} />
      <div className="mt-28">
       <button 
       className="border-0 bg-gray-200 rounded-sm py-4 px-8" 
       onClick={() => publishNews(props.id)}>
        <PaperPlaneTilt className="w-6 h-6" weight="bold"/>
        Publish
      </button>
      <button 
       className="border-0 bg-gray-200 rounded-sm py-4 px-8 justify-center mt-24"
       onClick={() => deleteNews(props.id)}>
        <Trash className="w-6 h-6" weight="bold"/>
        Delete
       </button>
      </div>
     </div>
    </div>
   </div>
  );
 };

 if (userHasValidSession && newsBelongsToUser) {
  return (
   <div>
    <Header />
    <div>
     <div className="pb-5 mt-20 text-5xl font-bold font-serif text-center">{title}</div>
     <p className="text-center">- By {props?.author?.name || 'Unknown author'}</p>
     <div>
      <ReactMarkdown className="px-6 py-4 text-xl flex justify-center item-center h-screen" children={props.article} />
      <div className="mt-28">
      <button 
       className="border-0 bg-gray-200 rounded-sm py-4 px-8 justify-center mt-24"
       onClick={() => deleteNews(props.id)}>
        <Trash className="w-6 h-6" weight="bold"/>
        Delete
       </button>
      </div>
     </div>
    </div>
   </div>
  );
 };


 return (
  <div>
   <Header />
   <div>
    <div className="pb-5 mt-20 text-5xl font-bold font-serif text-center">{title}</div>
    <p className="text-center">- By {props?.author?.name || 'Unknown author'}</p>
    <div>
     <ReactMarkdown className="px-6 py-4 text-xl flex justify-center item-center h-screen" children={props.article} />
    </div>
   </div>
   <Footer />
  </div>
 );
};

export default News;