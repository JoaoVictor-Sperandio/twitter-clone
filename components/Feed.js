import { SparklesIcon } from "@heroicons/react/outline"
import Input from "./Input"
import Post from "./Post"

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "João Victor Sperandio",
      username: "Sperandio.Joao",
      userImg: "https://avatars.githubusercontent.com/u/104575223?v=4",
      img: "https://images.unsplash.com/photo-1677056781459-4f85f82df5fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8eEh4WVRNSExnT2N8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      text: "Amazing trip!!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "João Victor Sperandio",
      username: "Sperandio.Joao",
      userImg: "https://avatars.githubusercontent.com/u/104575223?v=4",
      img: "https://images.unsplash.com/photo-1677050564225-a22616ed37f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "Awesome car that i bought!!",
      timestamp: "3 days ago",
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-400  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-400">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input />
        {posts.map((post) => (
          <Post key={post.id} post = {post}/>
        ))}
    </div>
  )
}
