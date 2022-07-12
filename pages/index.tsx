import { GetStaticProps, NextPage } from 'next'
import News, { NewsProps } from '../components/News';
import prisma from '../lib/prisma';
import Header from '../components/Header/index';
import Head from 'next/head';
import Footer from '../components/Footer';

export const getStaticProps: GetStaticProps = async () => {
  const allNews = await prisma.news.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { 
    props: { allNews },
    revalidate: 10,
  };
};

type Props = {
  allNews: NewsProps[]
}

const Home: NextPage<Props> = (props) =>{
  return (
    <div>
      <Head>
      <title>Principal News</title>
      </Head>

      <main className="bg-zinc-200 h-screen">
        <Header />
        <div className="pb-5 mt-20 text-5xl font-bold font-serif text-center w-scree bg-white">Top News</div>
        <div className="p-8 bg-zinc-200 ">
          {props.allNews.map((news) => (
          <div key={news.id}>
            <News news={news} />
          </div>
        ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home;