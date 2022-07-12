import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import News, { NewsProps } from "../components/News";
import prisma from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ req, res}) => {
 const session = await getSession({ req });

 if (!session) {
  res.statusCode = 403;
  return { props: { drafts: [] } };
 };

 const drafts = await prisma.news.findMany({
  where: {
   author: { email: session.user.email },
   published: false,
  },
  include: {
   author: {
    select: { name: true },
   },
  },
 });

 return {
  props: { drafts },
 };
};

type Props = {
 drafts: NewsProps[];
};

const Drafts: NextPage<Props> = (props) => {
 const { data: session } = useSession();

 if (!session) {
  return (
   <div>
    <Header />
    <h1 className="flex items-center mt-16 text-lg font-bold text-center w-full h-10 bg-white justify-center mr-2">My Drafts</h1>
    <div className="flex justify-center item-center h-screen">You need to be authenticated to view this page.</div>
    <div className="h-screen bg-zinc-200">
     {props.drafts.map((news) => (
      <div key={news.id}>
       <News news={news} />
      </div>
     ))}
    </div>
    <Footer />
   </div>
  );
 }

 return (
   <div>
     <Header />
    <h1 className="flex items-center mt-16 text-lg font-bold text-center w-full h-10 bg-zinc-200 justify-center mr-2">My Drafts</h1>
    <main className="h-screen bg-zinc-200">
      {props.drafts.map((news) => (
        <div key={news.id}>
        <News news={news} />
        </div>
      ))}
    </main>
    <Footer />
   </div>
 );
};

export default Drafts;