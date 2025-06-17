import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Detect screen size and adjust sidebar accordingly
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] flex flex-col">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isMobile={isMobile}
      />

      <div className="flex-1 flex flex-col">
        <div
          className="flex-1 transition-all duration-300 ease-in-out"
          style={{
            marginLeft: isSidebarOpen && !isMobile ? "280px" : "0",
            minHeight: "calc(100vh - 64px)", // Adjust based on your navbar height
          }}
        >
          <main className="flex-1 p-4 sm:p-6 min-h-screen lg:p-8">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>

          {/* Footer with proper spacing and responsive design */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
