/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { db, storage } from "@/firebase";
import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import Moment from "react-moment";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { deleteObject, ref } from "firebase/storage";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "@/atom/modalAtom";


export default function Post({post}) {
  const {data : session} = useSession();
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    )
  }, [db]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.id, "comments"),
      (snapshot) => setComments(snapshot.docs)
    )
  }, [db]);

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === session?.user.uid) !== -1)
  }, [likes])

  async function likePost() {
    if(session){
      if(hasLiked){
        await deleteDoc(doc(db, "posts", post.id, "likes", session?.user.uid),{
        });
      }else{
        await setDoc(doc(db, "posts", post.id, "likes", session?.user.uid), {
          username: session?.user?.name.split(" ").join("").toLocaleLowerCase().slice(0,18),
        });
      }
    }else{
      signIn();
    }
  }

  async function deletePost(){
    if(window.confirm("Are you sure you want to delete this post")){
      deleteDoc(doc(db, "posts", post.id));
      if(post.data().image){
        deleteObject(ref(storage, `posts/${post.id}/image`));
      }
    }

  }

  

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-400">
        {/** user Image */}
        <img 
            className="h-11 w-11 rounded-full mr-4" 
            src={post.data().userImg} 
            alt="user-img" 
        />
        {/** Right side */}
        <div className="flex-1">
            {/** Header */}
            <div className="flex items-center justify-between">
                {/** Post User Info */}
                <div className="flex items-center space-x-1 whitespace-nowrap">
                  <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.data().name.slice(0,18)}</h4>
                  <span className="text-sm sm:text-[15px]">@{post.data().name.split(" ").join("").toLocaleLowerCase().slice(0,18)} - </span>
                  <span className="text-sm sm:text-[15px] hover:underline">
                    <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
                  </span>
                </div>
                {/** dot icon */}
                <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-200 hover:text-sky-500 p-2"/>
            </div> 
            {/** Post Text */}
            <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post?.data()?.text}</p>
            {/** Post Image */}
            <img 
                className="rounded-2xl mr-2 xl:max-w-[520px] xl:max-h-[520px] lg:max-w-[480px] lg:max-h-[480px] sm:max-w-[480px] sm:max-h-[480px]" 
                src={post?.data()?.image} 
                alt="post-img" 
            />
            {/** Icons */}
            <div className="flex justify-between text-gray-500 p-2 ">
              <div className="flex items-center select-none">
                <ChatIcon 
                  onClick={() => {
                    if(!session){
                      signIn();
                    }else{
                      setPostId(post.id);
                      setOpen(!open);
                    }
                  }}
                  className="h-9 w-9 hoverEffect p-1 hover:text-sky-500 hover:bg-sky-200"
                />
                {comments.length > 0 && (
                  <span className="text-sm">
                    {comments.length}
                  </span>
                )}
              </div>
              {session?.user.uid === post?.data().id && (
                <TrashIcon 
                  onClick={deletePost}
                  className= "h-9 w-9 hoverEffect p-1 hover:text-red-600 hover:bg-red-200"
                />
              )}
              <div className="flex items-center">
                {hasLiked ? (
                  <HeartIconFilled 
                    onClick={likePost}
                    className="h-9 w-9 hoverEffect p-1 text-red-600 hover:bg-red-200"
                  />
                  ) : (
                  <HeartIcon 
                    onClick={likePost}
                    className="h-9 w-9 hoverEffect p-1 hover:text-red-600 hover:bg-red-200"
                  />
                )}
                {
                  likes.length > 0? (
                    <span className={`${hasLiked && "text-red-500"} text-sm sm:text-[15px] select-none`}>{likes.length}</span>
                  ) : (
                    <span className={`${hasLiked && "text-red-500"} text-sm sm:text-[15px] select-none`}>0</span>
                  )
                }
              </div>
              <ShareIcon className="h-9 w-9 hoverEffect p-1 hover:text-sky-500 hover:bg-sky-200"/>
              <ChartBarIcon className="h-9 w-9 hoverEffect p-1 hover:text-sky-500 hover:bg-sky-200"/>
            </div>
            
        </div>
    </div>
  )
}
