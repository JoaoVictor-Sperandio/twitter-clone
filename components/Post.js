import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";

export default function Post({post}) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-400">
        {/** user Image */}
        <img className="h-11 w-11 rounded-full mr-4" src={post.userImg} alt="" />
        {/** Right side */}
        <div className="">
            {/** Header */}
            <div className="flex items-center justify-between">
                {/** Post User Info */}
                <div className="flex items-center space-x-1 whitespace-nowrap">
                  <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                  <span className="text-sm sm:text-[15px]">@{post.username} - </span>
                  <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
                </div>
                {/** dot icon */}
                <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-200 hover:text-sky-500 p-2"/>
            </div>
            {/** Post Text */}
            <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>
            {/** Post Image */}
            <img className="rounded-2xl mr-2" src={post.img} alt="" />
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
