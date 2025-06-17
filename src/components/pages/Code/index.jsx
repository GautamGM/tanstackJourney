// src/components/PostFeed.jsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PostFeed = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/posts");
      return res.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60, // 1 minute
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  // Generate mock categories for demonstration
  const categories = [
    "AI",
    "Machine Learning",
    "Neural Networks",
    "Data Science",
    "Future Tech",
    "Quantum Computing",
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-purple-600 rounded-full animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
            Loading Neural Feed
          </h2>
          <p className="mt-2 text-gray-400 max-w-md text-center">
            Connecting to the Grok knowledge network...
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex flex-col items-center justify-center p-4">
        <div className="max-w-lg w-full bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">
              Neural Connection Failed
            </h2>
            <p className="mt-3 text-gray-300">
              Unable to retrieve knowledge from the Grok network
            </p>
            <div className="mt-6 bg-gray-900/80 rounded-lg p-4 text-left">
              <p className="text-red-400 font-mono text-sm">{error.message}</p>
            </div>
            <button
              onClick={handleRefresh}
              className="mt-8 w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              disabled={isRefreshing}
            >
              {isRefreshing ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Reconnecting...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Retry Connection
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 sm:mb-14 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="ml-4 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
              Grok Neural Feed
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            AI-curated knowledge stream powered by Grok intelligence. Explore
            insights from across the neural network.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleRefresh}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 border border-gray-700 hover:border-purple-500/50"
              disabled={isRefreshing}
            >
              {isRefreshing ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {isRefreshing ? "Refreshing..." : "Refresh Data"}
            </button>

            <div className="flex items-center text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              Neural network online • {data.length} posts loaded
            </div>
          </div>
        </header>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post) => {
            // Select random category and time for demo
            const randomCategory =
              categories[Math.floor(Math.random() * categories.length)];
            const timeAgo = `${Math.floor(Math.random() * 59) + 1}m ago`;

            return (
              <div
                key={post.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
              >
                <div className="p-5">
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-gray-200 group-hover:text-purple-300 transition-colors">
                        {post.author}
                      </h3>
                      <p className="text-xs text-gray-500">{timeAgo}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{post.body}</p>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-700 text-purple-300 px-3 py-1 rounded-full">
                      #{randomCategory}
                    </span>
                    <span className="text-xs bg-gray-700 text-gray-400 px-3 py-1 rounded-full">
                      #grok
                    </span>
                  </div>
                </div>

                <div className="px-5 py-3 bg-gray-800/50 border-t border-gray-800 flex justify-between">
                  <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    <span>{Math.floor(Math.random() * 100)}</span>
                  </button>

                  <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{Math.floor(Math.random() * 20)}</span>
                  </button>

                  <button className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm pb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-2 animate-pulse"></div>
              <span>TanStack Query</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-gray-600"></div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2 animate-pulse"></div>
              <span>Grok AI Theme</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-gray-600"></div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              <span>Real-time Updates</span>
            </div>
          </div>
          <p>
            Powered by Neural Network API • {new Date().getFullYear()} Grok
            Intelligence
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PostFeed;
