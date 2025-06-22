import React, { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { cn } from "../../utils/cn";
import { useInView } from "react-intersection-observer";

// Define brand colors
const brandColors = {
  Toyota: { primary: "#EB0A1E", secondary: "#FFFFFF" },
  Honda: { primary: "#F26722", secondary: "#1C1C1C" },
  Ford: { primary: "#003478", secondary: "#FFFFFF" },
  Chevrolet: { primary: "#F82E2E", secondary: "#FFFFFF" },
  Hyundai: { primary: "#002C5F", secondary: "#FFFFFF" },
  Nissan: { primary: "#C3002F", secondary: "#FFFFFF" },
  Volkswagen: { primary: "#003D7D", secondary: "#FFFFFF" },
  Subaru: { primary: "#003D7D", secondary: "#FFFFFF" },
  Mazda: { primary: "#D40026", secondary: "#FFFFFF" },
  Kia: { primary: "#C21E30", secondary: "#FFFFFF" },
  BMW: { primary: "#0066B1", secondary: "#FFFFFF" },
  Audi: { primary: "#CC0000", secondary: "#FFFFFF" },
  "Mercedes-Benz": { primary: "#00A2AD", secondary: "#FFFFFF" },
  Lexus: { primary: "#1A1A1A", secondary: "#FFFFFF" },
  Acura: { primary: "#1A1A1A", secondary: "#FFFFFF" },
  Infiniti: { primary: "#000000", secondary: "#FFFFFF" },
  Volvo: { primary: "#003057", secondary: "#FFFFFF" },
  Jaguar: { primary: "#121212", secondary: "#FFFFFF" },
  Genesis: { primary: "#002A5C", secondary: "#FFFFFF" },
  "Alfa Romeo": { primary: "#981E32", secondary: "#FFFFFF" },
  Tesla: { primary: "#E31937", secondary: "#FFFFFF" },
  Porsche: { primary: "#CC0000", secondary: "#FFFFFF" },
  default: { primary: "#6366F1", secondary: "#FFFFFF" },
};

const fetchCars = async ({ pageParam }) => {
  const res = await axios.get(
    `http://localhost:4000/cars/?_limit=10&_page=${pageParam}`
  );
  return res.data;
};

const CarCard = ({ car }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState("");
  const cardRef = useRef(null);
  const colors = brandColors[car.make] || brandColors.default;

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / 15).toFixed(2);
    const rotateY = (x / 15).toFixed(2);
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const resetTransform = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      className="relative group transition-transform duration-300"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetTransform();
      }}
      style={{
        transform: transform,
        transformStyle: "preserve-3d",
        transition: "transform 0.2s ease-out",
      }}
    >
      <div
        className={cn(
          "h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-700 transition-all duration-300"
        )}
      >
        {/* Glow */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${Math.random() * 100}% ${
              Math.random() * 100
            }%, ${colors.primary}30, transparent)`,
          }}
        />

        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
          <img
            src={car.image || car.jp_image}
            alt={`${car.make} ${car.model}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <div className="text-2xl font-bold text-white drop-shadow-lg">
              {car.make}
              <span className="text-cyan-300 ml-2">{car.model}</span>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full font-medium">
                {car.year}
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2 animate-pulse"
                style={{ backgroundColor: colors.primary }}
              />
              <span className="text-gray-400 text-sm font-mono">
                ID: {car.id}
              </span>
            </div>
            <div
              className="text-xs px-2 py-1 rounded-full font-medium"
              style={{
                backgroundColor: `${colors.primary}20`,
                color: colors.primary,
              }}
            >
              {car.model.includes("Hybrid") || car.model.includes("Electric")
                ? "ECO"
                : "GAS"}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="bg-gray-800/50 p-2 rounded-lg text-center">
              <div className="text-xs text-gray-400">HP</div>
              <div className="font-bold text-white">
                {Math.floor(Math.random() * 300) + 100}
              </div>
            </div>
            <div className="bg-gray-800/50 p-2 rounded-lg text-center">
              <div className="text-xs text-gray-400">0-60</div>
              <div className="font-bold text-white">
                {Math.random().toFixed(1) + 4}s
              </div>
            </div>
            <div className="bg-gray-800/50 p-2 rounded-lg text-center">
              <div className="text-xs text-gray-400">MPG</div>
              <div className="font-bold text-white">
                {Math.floor(Math.random() * 40) + 20}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2 mt-4">
            <button
              className="flex-1 py-2 rounded-lg font-medium hover:-translate-y-1 transition-all duration-300"
              style={{
                background: colors.primary,
                color: colors.secondary,
              }}
            >
              Details
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{
                backgroundColor: `${colors.primary}20`,
                color: colors.primary,
              }}
            >
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
      </div>

      {/* Floating reflection */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl opacity-10 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}40, transparent)`,
            transform: "translateZ(30px)",
            filter: "blur(10px)",
          }}
        />
      )}
    </div>
  );
};

const InfiniteScroll = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["car"],
      queryFn: fetchCars,
      staleTime: 3000,
      initialPageParam: 1,
      getNextPageParam: (_lastPage, allPage) => {
        return allPage?.length < 5 ? allPage.length + 1 : undefined;
      },
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [fetchNextPage, inView]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-8 h-8 border-2 border-cyan-300 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <p className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">
          Error fetching cars
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
            Infinite Drive
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Explore our curated collection of premium vehicles with seamless
            infinite scrolling
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.pages?.map((page) =>
            page.map((car) => <CarCard key={car.id} car={car} />)
          )}
        </div>

        <div ref={ref} className="flex justify-center py-10">
          {hasNextPage && (
            <div className="flex flex-col items-center">
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
              <p className="mt-4 text-cyan-300 font-light tracking-wider">
                Loading next models...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
