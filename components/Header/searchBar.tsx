import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

export default function SearchBar() {
  const [searchContent, setSearchContent] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const query = { searchContent };
    await fetch('/api/search', {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <div className='justify-center relative rounded-sm border-solid border-2 border-gray-300 flex bg-gray-50 items-center '>
    <MagnifyingGlass className='h-5 w-5 mx-2 text-gray-400 items-center'/>
    <input
      onSubmit={submitData}
      value={searchContent}
      onChange={(e) => setSearchContent(e.target.value)}
      type='text'
      placeholder='Search'
      className='bg-gray-50 p-1 focus:outline-none focus:ring-2 focus:ring-zinc-500'
    />
    </div>
  )
}