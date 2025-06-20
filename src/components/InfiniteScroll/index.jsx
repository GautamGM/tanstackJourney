import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { cn } from "../../utils/cn";
const fetchCars = async ({ pageParam }) => {
  console.log(pageParam)
  console.log(pageParam);
  const res = await axios.get(
    `http://localhost:4000/cars/?_limit=10&_page=${pageParam}`
  );
  return res.data;
};

const InfiniteScroll = () => {
  const { data, isLoading, error ,fetchNextPage ,hasNextPage} = useInfiniteQuery({
    queryKey: ["car"],
    queryFn: fetchCars,
    staleTime: 3000,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPage) => {

      if (allPage?.length < 5) {
        return allPage.length + 1;
      } else {
        return undefined;
      }
    },
  });




console.log(data)
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-blue-600">Loading cars...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl text-red-500">Error fetching cars</p>
      </div>
    );
  console.log(data);
  return (
    <div className="p-2 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          🚗 Infinite Scroll Cars
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.pages?.map((c) =>
            c.map((car) => {
              return (
                <div
                  key={car.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-105"
                >
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {car.make} 
                      <span className="font-bold text-4xl">{car.id}</span>
                    </h2>
                    <p className="text-gray-600">{car.model}</p>
                    <p className="text-gray-500 mt-1">Year: {car.year}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <button onClick={fetchNextPage} disabled={!hasNextPage} className={cn("bg-red-600",{
        "!w-[200px] h-[200px] rounded-full bg-amber-400":!hasNextPage
      })}>{!hasNextPage?"Hooolalalholala":"Load More"}</button>
    </div>
  );
};

export default InfiniteScroll;
