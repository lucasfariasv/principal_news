import Link from "next/link";
import Navbar from "./navbar";

function Header() {

 return (
  <article className="shadow-sm border-b bg-white top-0 fixed w-full h-16 items-center justify-center">
   <div className="flex justify-between max-w-4xl mx-5 xl:mx-auto center mt-3">
    <Link href='/'>
     <h1 className="relative lg:inline-grid cursor-pointer text-2xl font-serif font-bold">
      Principal News
     </h1>
    </Link>
    <Navbar />
   </div>
  </article>
 );

};

export default Header;