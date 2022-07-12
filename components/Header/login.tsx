import { useSession, signIn, signOut } from "next-auth/react";
import { Loading } from "../Loading";

export default function Login() {

  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <>
        <Loading />
      </>
      
    )
  } 
  
  if (session) {
    return (
      <>
        <div className="flex items-center justify-center gap-6">
          <p className="inline-block text-sm">
            {session.user.name} ({session.user.email})
          </p>
          
          <button className="font-bold hover:font-normal hover:text-sky-800 hover:underline hover:underline-offset-1" onClick={() => signOut()}>
            Log out
          </button>
        </div>
      </>
    )
  }
    
  if (!session) {
    return (
    <>
      <button className="font-bold hover:font-normal hover:text-sky-800 hover:underline hover:underline-offset-1" onClick={() => signIn()}>Log in</button>
    </>
    )
  }
    
}