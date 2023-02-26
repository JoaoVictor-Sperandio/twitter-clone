/* eslint-disable @next/next/no-img-element */
import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";
import Moment from "react-moment";

export default function Post({post}) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-400">
        {/** user Image */}
        <img 
            className="h-11 w-11 rounded-full mr-4" 
            src={post.data().userImg} 
            alt="user-img" 
        />
        {/** Right side */}
        <div className="">
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
                className="rounded-2xl mr-2 xl:max-w-[520px] xl:max-h-[520px] lg:max-w-[480px] lg:max-h-[480px]" 
                src={post?.data()?.image} 
                alt="post-img" 
            />
            {/** Icons */}
            <div className="flex justify-between text-gray-500 p-2 ">
              <ChatIcon className="h-9 w-9 hoverEffect p-1 hover:text-sky-500 hover:bg-sky-200"/>
              <TrashIcon className="h-9 w-9 hoverEffect p-1 hover:text-red-600 hover:bg-red-200"/>
              <HeartIcon className="h-9 w-9 hoverEffect p-1 hover:text-red-600 hover:bg-red-200"/>
              <ShareIcon className="h-9 w-9 hoverEffect p-1 hover:text-sky-500 hover:bg-sky-200"/>
              <ChartBarIcon className="h-9 w-9 hoverEffect p-1 hover:text-sky-500 hover:bg-sky-200"/>
            </div>
            
        </div>
    </div>
  )
}
