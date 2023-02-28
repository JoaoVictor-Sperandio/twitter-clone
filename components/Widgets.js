/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { SearchIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import News from "./News";

export default function Widgets({ newsResults, randomUsersResults }) {
    const [articleNum, setArticleNum] = useState(3)
    const [randomUserNum, setRandomUserNum] = useState(3)
    return (
        <div className="xl:w-[600px] hidden lg:inline lg:max-w-md ml-8 space-y-5"> {/** Top div */}
            
            {/** Search bar*/}
            <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-2 z-50">
                <div className="flex items-center p-3 rounded-full bg-red-200 relative">
                    <SearchIcon className="h-5 z-50 text-gray-500"/>
                    <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-200" type="text" placeholder="Search Twitter" />
                </div>
            </div>

            {/** What's Happening */}
            <div className="text-gray-700 space-y-3 bg-gray-200 roudned-xl pt-2 w-[90%] xl:w[75%]">
                <h4 className="font-bold text-xl px-4">What's Happening</h4>
                <AnimatePresence>
                    {newsResults.slice(0, articleNum).map((article) =>(
                        <motion.div key={article.title}
                            initial    = {{ opacity: 0 }}
                            animate    = {{ opacity: 1 }}
                            exit       = {{ opacity: 0 }}
                            transition = {{ duration: 0.5 }}
                        >
                            <News key={article.title} article={article}/>
                        </motion.div>
                    ))}

                </AnimatePresence>
                <button onClick={() => setArticleNum(articleNum + 3)} className="text-blue-400 pl-4 pb-3 hover:text-blue-500">
                    Show more
                </button>
            </div>

            {/** Who To Follow */}
            <div className="text-gray-700 space-y-3 bg-gray-200 roudned-xl pt-2 w-[90%] xl:w[75%] sticky top-16">
                <h4 className="font-bold text-xl px-4">Who To Follow</h4>
                <AnimatePresence>
                    {randomUsersResults.slice(0, randomUserNum).map((randomUser) => (
                        <motion.div key={randomUser.login.username}
                        initial    = {{ opacity: 0 }}
                        animate    = {{ opacity: 1 }}
                        exit       = {{ opacity: 0 }}
                        transition = {{ duration: 0.5 }}
                        >
                            <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-300 transition duration-500 ease-out" key={randomUser.login.username}> 
                                <img className="rounded-full" width="40" src={randomUser.picture.thumbnail}/>
                                <div className="truncate ml-4 leading-5">
                                    <h4 className="font-bold hover:underline text-[14px] truncate">{randomUser.login.username}</h4>
                                    <h5 className="text-[13px] text-gray-500 truncate">{randomUser.name.first + " " + randomUser.name.last}</h5>
                                </div>
                                <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">Follow</button>
                            </div>
                        </motion.div>
                    ))}

                </AnimatePresence>
                <button onClick={() => setRandomUserNum(randomUserNum + 3)} className="text-blue-400 pl-4 pb-3 hover:text-blue-500">
                    Show More
                </button>
            </div>

        </div>
    )
}
