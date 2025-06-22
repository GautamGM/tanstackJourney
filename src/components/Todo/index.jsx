import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import AddTodoForm from "../AddTodoForm";

const getTodos = async () => {
  const res = await axios.get("http://localhost:4000/todos");
  return res.data;
};

const Todo = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    staleTime: 30 * 1000,
    refetchOnWindowFocus: false, // Optional: disable refetch on tab focus
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-800 px-4 py-3 rounded-md">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center text-white drop-shadow-md">
        Todo List
      </h1>
      <div>
        <AddTodoForm />
      </div>
      <div className="space-y-6">
        {data?.map((todo) => (
          <div
            key={todo.id}
            className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full shadow-md hover:shadow-blue-500/40 hover:scale-[1.015] transition-all duration-300"
          >
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-lg rounded-2xl transition-all duration-300 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col gap-4">
              <h2
                className={`text-xl font-semibold ${
                  todo.completed ? "line-through text-gray-400" : "text-white"
                }`}
              >
                {todo.title}
              </h2>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300">
                <span className="bg-white/10 px-3 py-1 rounded-full">
                  ID: {todo.id}
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full">
                  User: {todo.userId}
                </span>

                <span
                  className={`ml-auto px-3 py-1 rounded-full text-sm font-medium ${
                    todo.completed
                      ? "bg-green-500/20 text-green-300"
                      : "bg-yellow-500/20 text-yellow-300"
                  }`}
                >
                  {todo.completed ? "Completed" : "Pending"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
