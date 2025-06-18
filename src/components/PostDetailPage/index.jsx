import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const fetchPostById = async (id) => {
    const res = await axios.get(`http://localhost:4000/posts/${id}`);
    return res.data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPostById(id)
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-slate-200 border-t-violet-500 rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-16 h-16 border-2 border-violet-200 rounded-full animate-pulse mx-auto"></div>
          </div>
          <p className="text-slate-600 font-medium">Loading neural pathways...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
          <div className="text-red-500 text-center">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Knowledge Retrieval Failed</h2>
            <p className="text-slate-600 mb-6">{error.message}</p>
          </div>
          <button 
            onClick={() => navigate(-1)}
            className="w-full py-3 px-6 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            Return to Feed
          </button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  // Format the date
  const formattedDate = format(parseISO(data.createdAt), 'MMMM dd, yyyy • h:mm a');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50/30 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="py-8 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="group flex items-center text-slate-600 hover:text-violet-600 transition-all duration-200 mb-10 p-2 -ml-2 rounded-xl hover:bg-white/60"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-violet-100 flex items-center justify-center mr-3 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">Back to Feed</span>
          </button>
          
          <div className="flex items-start justify-between">
            <div className="flex-1 mr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">{data.title}</h1>
              <div className="flex items-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-violet-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{data.author.charAt(0)}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-slate-900 text-lg">{data.author}</h3>
                  <p className="text-slate-500 font-medium">{formattedDate}</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="w-11 h-11 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-200 flex items-center justify-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500 group-hover:text-violet-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button className="w-11 h-11 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white hover:shadow-lg transition-all duration-200 flex items-center justify-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500 group-hover:text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Content Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden mb-8">
          <div className="p-8 md:p-12">
            <div className="prose prose-xl max-w-none text-slate-700 leading-relaxed">
              <p className="text-lg font-normal">{data.body}</p>
            </div>
          </div>
          
          {/* Tags and Stats */}
          <div className="px-8 md:px-12 py-6 bg-gradient-to-r from-slate-50/50 to-violet-50/30 border-t border-slate-100/50">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
                <span className="px-4 py-2 bg-violet-100 text-violet-700 rounded-2xl text-sm font-semibold border border-violet-200/50">
                  #Technology
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-2xl text-sm font-semibold border border-blue-200/50">
                  #API
                </span>
                <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-2xl text-sm font-semibold border border-slate-200/50">
                  #WebDevelopment
                </span>
              </div>
              
              <div className="flex space-x-8">
                <div className="flex items-center text-slate-600 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-100 flex items-center justify-center mr-2 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">248</span>
                </div>
                <div className="flex items-center text-slate-600 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mr-2 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">42</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Neural Insights</h2>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>Live discussion</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Comment 1 */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">Alex Morgan</h4>
                      <span className="text-sm text-slate-500 font-medium">2 hours ago</span>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">This explanation really helped me understand the difference between REST and SOAP APIs. The examples were particularly clear!</p>
                  
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-slate-500 hover:text-red-500 transition-colors duration-200 group">
                      <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-red-50 flex items-center justify-center transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">12</span>
                    </button>
                    <button className="flex items-center space-x-2 text-slate-500 hover:text-blue-500 transition-colors duration-200 group">
                      <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comment 2 */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">J</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">Jordan Taylor</h4>
                      <span className="text-sm text-slate-500 font-medium">5 hours ago</span>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-4">Could you expand more on how authentication works with REST APIs? Especially token-based authentication.</p>
                  
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-slate-500 hover:text-red-500 transition-colors duration-200 group">
                      <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-red-50 flex items-center justify-center transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">8</span>
                    </button>
                    <button className="flex items-center space-x-2 text-slate-500 hover:text-blue-500 transition-colors duration-200 group">
                      <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">Reply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add Comment */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="font-semibold text-slate-900 text-xl mb-6">Add your insight</h3>
            <div className="space-y-4">
              <textarea 
                className="w-full border border-slate-200/50 rounded-2xl p-4 focus:ring-2 focus:ring-violet-300 focus:border-transparent bg-white/50 backdrop-blur-sm placeholder-slate-400 resize-none transition-all duration-200" 
                rows="4"
                placeholder="Share your thoughts..."
              ></textarea>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <button className="flex items-center space-x-2 hover:text-slate-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    <span>Attach</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-slate-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v4H4V1a1 1 0 011-1h2z" />
                    </svg>
                    <span>Code</span>
                  </button>
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold">
                  Post Insight
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;