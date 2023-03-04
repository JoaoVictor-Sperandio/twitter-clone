/* eslint-disable jsx-a11y/alt-text */
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
import { useRouter } from "next/router";


export default function Comment({ comment, commentId, originalPostId }) {
  const {data : session} = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", originalPostId, "comments", commentId, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db, originalPostId, commentId]);

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === session?.user.uid) !== -1)
  }, [likes])

  async function likeComment() {
    if(session){
      if(hasLiked){
        await deleteDoc(doc(db, "posts", originalPostId, "comments", commentId, "likes", session?.user.uid),{
        });
      }else{
        await setDoc(doc(db, "posts", originalPostId, "comments", commentId, "likes", session?.user.uid), {
          username: session?.user?.name.split(" ").join("").toLocaleLowerCase().slice(0,18),
        });
      }
    }else{
      signIn();
    }
  }

  async function deleteComment(){
    if(window.confirm("Are you sure you want to delete this comment?")){
      deleteDoc(doc(db, "posts", originalPostId, "comments", commentId));
    }
  }
  

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-400 pl-20">
        {/** user Image */}
        <img 
            className="h-11 w-11 rounded-full mr-4" 
            src={comment?.userImg} 
            alt="user-img" 
        />
        
        {/** Right side */}
        <div className="flex-1">
            {/** Header */}
            <div className="flex items-center justify-between">
                {/** Comment User Info */}
                <div className="flex items-center space-x-1 whitespace-nowrap">
                  <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{comment?.name.slice(0,18)}</h4>
                  <span className="text-sm sm:text-[15px]">@{comment?.name.split(" ").join("").toLocaleLowerCase().slice(0,19)} - </span>
                  <span className="text-sm sm:text-[15px] hover:underline">
                    <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
                  </span>
                </div>
                {/** dot icon */}
                <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-200 hover:text-sky-500 p-2"/>
            </div> 
            {/** Comment Text */}
            <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{comment?.comment}</p>
            {/** Icons */}
            <div className="flex justify-between text-gray-500 p-2 ">
              <div className="flex items-center select-none">
                <ChatIcon 
                  onClick={() => {
                    if(!session){
                      signIn();
                    }else{
                      setPostId(originalPostId);
                      setOpen(!open);
                    }
                  }}
                  className="h-9 w-9 hoverEffect p-1 hover:text-sky-500 hover:bg-sky-200"
                />
              </div>
              {session?.user.uid === comment?.userId && (
                <TrashIcon 
                  onClick={deleteComment}
                  className= "h-9 w-9 hoverEffect p-1 hover:text-red-600 hover:bg-red-200"
                />
              )}
              <div className="flex items-center">
                {hasLiked ? (
                  <HeartIconFilled 
                    onClick={likeComment}
                    className="h-9 w-9 hoverEffect p-1 text-red-600 hover:bg-red-200"
                  />
                  ) : (
                  <HeartIcon 
                    onClick={likeComment}
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
