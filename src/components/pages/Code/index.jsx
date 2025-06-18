import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostFeed = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
const naviagte=useNavigate()
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/posts");
      return res.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 30000,
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const categories = [
    "AI",
    "Machine Learning",
    "Neural Networks",
    "Data Science",
    "Future Tech",
    "Quantum Computing",
  ];

  const handleDetail=(id)=>{
    naviagte(`/post-detail/${id}`)
    
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <div className="text-red-600 text-center">
          <p className="text-lg font-semibold">Failed to load posts</p>
          <p className="text-sm text-gray-400 mt-1">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">📡 Next Feed</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Stream of posts · {data?.length ?? 0} total
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className={`px-4 py-2 rounded-md text-sm border transition ${
            isRefreshing
              ? "bg-gray-300 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          {isRefreshing ? "Refreshing..." : "🔄 Refresh"}
        </button>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post) => {
          const category =
            categories[Math.floor(Math.random() * categories.length)];
          const timeAgo = `${Math.floor(Math.random() * 59) + 1}m ago`;
          return (
            <div
              key={post.id}
              onClick={()=>handleDetail(post.id)}
              className="bg-white dark:bg-gray-900 cursor-pointer border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-medium text-sm">
                  {post.author?.charAt(0)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-md">{post.author}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {timeAgo}
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">
                      #{category}
                    </span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed line-clamp-4 text-gray-700 dark:text-gray-300">
                    {post.body}
                  </p>

                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex gap-4">
                      <span className="hover:text-red-500 cursor-pointer">
                        ❤️ 24
                      </span>
                      <span className="hover:text-blue-500 cursor-pointer">
                        💬 8
                      </span>
                    </div>
                    <span className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
                      ⋮
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostFeed;
