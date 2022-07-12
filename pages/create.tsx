import { useState } from "react"
import { NextPage } from "next";
import { Trash } from "phosphor-react";
import Router from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Draft: NextPage = () => {
 const [title, setTitle] = useState('');
 const [article, setArticle] = useState('');

 const submitData = async (e: React.SyntheticEvent) => {
  e.preventDefault();

  
  const body = { title, article };
  await fetch('/api/news', {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify(body),
  });
  await Router.push('/drafts')
 };

 return (
   <div className="bg-zinc-200 h-screen">
     <Header />
     <div className="flex items-center mt-16 text-lg font-bold text-center w-full h-10 bg-zinc-200 justify-center mr-2">New Draft</div>
    <form
      className="shadow-sm border-b w-full h-16 items-center justify-center" 
      onSubmit={submitData}>
      <input
        className="w-full mx-4 p-1 my-2 focus:outline-none focus:ring-2 focus:ring-zinc-700 rounded-md"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
        type='text'
        value={title}
      />
      <textarea
        className="w-screen mx-4 p-1 my-2 focus:outline-none focus:ring-2 focus:ring-zinc-700 rounded-md"
        cols={50}
        onChange={(e) => setArticle(e.target.value)}
        placeholder='Article'
        rows={8}
        value={article}  
      />
      <div className="flex justify-end items-center gap-4 mr-2" >
        <input
        disabled={!article || !title}
        className="bg-white h-10 w-28 rounded-full flex items-center justify-center hover:ring-2 hover:ring-emerald-900 hover:bg-emerald-500 hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:ring-zinc-200 disabled:hover:text-black"
        type='submit'
        value='Create'
        />
        <button 
          className="bg-white h-10 w-28 rounded-full flex items-center justify-center hover:ring-2 hover:ring-red-700 hover:bg-red-400 hover:text-white hover:font-bold"
          onClick={() => Router.push('/')}>
            <Trash className="mr-2 w-6 h-6" weight="bold"/>
            Cancel
        </button>
      </div>
    </form>
    <Footer />
   </div>
 )
};

export default Draft;