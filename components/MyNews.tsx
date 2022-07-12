import Link from "next/link";
import { FileDotted, FilePlus } from "phosphor-react";

export default function MyNews() {
 
 return (
  <>
   <div className="flex items-center justify-center gap-6">
    <div className="flex items-center justify-center">
     <Link href="/create">
      <button className="flex items-center justify-center font-bold gap-1 hover:font-normal hover:underline">
       <FilePlus className="w-6 h-6" />
       <a>Add a news</a>
      </button>
     </Link>
    </div>
    <div className="items-center">
     <Link href="/drafts">
      <button className="flex items-center justify-center font-bold gap-1 hover:font-normal hover:underline">
       <FileDotted className="w-6 h-6"/>
       <a>My drafts</a>
      </button>
     </Link>
    </div>
   </div>
  </>
 )
};