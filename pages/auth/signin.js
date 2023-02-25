/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { getProviders, signIn } from "next-auth/react"

// Client Side
export default function signin( {providers} ) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
        <img 
            className="hidden object-cover md:w-44 md:h-80 rotate-6  md:inline-flex"
            src="https://www.techbooky.com/wp-content/uploads/2021/07/4859E08D-388B-4475-9FCC-C05914CC654A.png" 
            alt="Twitter Image inside a phone"
        />
        <div className="">
            {Object.values(providers).map(( provider ) => (
                <div  className="flex flex-col items-center">
                    <img
                        className="w-36 object-cover"
                        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                        alt="twitter logo"
                    />
                    <p className="text-center text-sm italic my-10">
                        This App is created for learning purposes
                    </p>
                    <button onClick={() => signIn(provider.id, {callbackUrl:"/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with Google</button>
                </div>
            ))}
        </div>
    </div>
  )
}

// Server side
export async function getServerSideProps(){
    const providers = await getProviders();
    return{
        props:{
            providers,
        },
    };
}
