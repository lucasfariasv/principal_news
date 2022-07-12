import { useSession } from "next-auth/react";
import MyNews from "../MyNews";
import Login from "./login";

export default function Navbar() {
 const { data: session } = useSession();

 if (session) {
  return (
    <div className="flex relative gap-20">
     <MyNews />
     <Login />
    </div>
  )
 }

 return (
  <>
   <Login />
  </>
 )
}