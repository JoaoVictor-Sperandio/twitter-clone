/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets'
import CommentModal from '@/components/CommentModal'
import Post from '@/components/Post'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { db } from '@/firebase'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import Comment from '@/components/Comment'
import { AnimatePresence } from 'framer-motion'

export default function PostPage({ newsResults, randomUsersResults }) {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  
  //get post data by id
  useEffect(
    () => onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)),
    [db, id]
  );

  //get comments of the post
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ), (snapshot) => setComments(snapshot.docs) 
    );
  }, [db, id] )

  return (
    <div>
      <Head>
        <title>Post Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='flex min-h-screen mx-auto align-center'>

        {/** Side bar */}
        <Sidebar />

        {/** Post */}
        <div className="xl:ml-[370px] xl:max-w-3xl border-l border-r border-gray-400  xl:min-w-[620px] sm:ml-[73px] flex-grow max-w-[100%]">
            <div className="flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-400">
                <div 
                    className="hoverEffect"
                    onClick={() => router.push("/")}
                >
                    <ArrowLeftIcon className="h-5 "/>
                </div>
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer"> Tweet </h2>
            </div>
            <Post id={id} post={post} />
            {comments.length > 0 && (
              <div className=""> 
                {comments.map((comment) => (
                  <Comment 
                    key={comment.id} 
                    id={comment.id} 
                    comment={comment.data()} 
                  />
                ))}
              </div>
            )}
        </div>

        {/** Widgets  */}
        <Widgets 
          newsResults={newsResults.articles} 
          randomUsersResults={randomUsersResults.results}
        />
        {/** Modal    */}
        <CommentModal />
      </main>
    
    </div>
  )
}

/*
News API
https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json

Random Users API
Catching name, login and picture
https://randomuser.me/api/?results=50&inc=name,login,picture
*/
export async function getServerSideProps() {
  //What's Happening
  const newsResults = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json")
  .then((res)=>res.json());

  //Who To Follow section
  const randomUsersResults = await fetch("https://randomuser.me/api/?results=50&inc=name,login,picture")
  .then((res)=>res.json());

  return{
    props:{
      newsResults,
      randomUsersResults,
    },
  }
}


