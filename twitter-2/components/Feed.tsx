import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";
import { Tweet } from "../typings";
import Tweetbox from "./Tweetbox";
import TweetComponent from "../components/Tweet";

interface Props {
  tweets: Tweet[];
}

function Feed({ tweets }: Props) {
  console.log(tweets);
  return (
    <div className="col-span-7 lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          className="h-8 w-8 text-twitter cursor-pointer mr-5 
        mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>

      <div>
        <Tweetbox />
      </div>
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
