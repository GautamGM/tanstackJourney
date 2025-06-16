import React from "react"

import { useEffect, useState } from "react"
import { BookOpen, Settings, Rocket, Sparkles, Zap } from "lucide-react"

const steps = [
  {
    title: "Understand the Basics",
    description:
      "Master core concepts like Queries, Mutations, and Caching strategies. Learn the fundamental principles that power modern data fetching.",
    icon: BookOpen,
    gradient: "from-[#00b0ff] to-[#0077c2]",
    bgGradient: "from-[#00b0ff]/10 to-[#0077c2]/5",
    delay: 0,
  },
  {
    title: "Setup Your Project",
    description:
      "Install and configure TanStack Query in your React application. Set up the perfect development environment for success.",
    icon: Settings,
    gradient: "from-[#00b0ff] to-[#00c3ff]",
    bgGradient: "from-[#00b0ff]/10 to-[#00c3ff]/5",
    delay: 200,
  },
  {
    title: "Build Real Projects",
    description:
      "Create production-ready applications with best practices. Deploy scalable solutions that handle real-world complexity.",
    icon: Rocket,
    gradient: "from-[#ff4081] to-[#ff0066]",
    bgGradient: "from-[#ff4081]/10 to-[#ff0066]/5",
    delay: 400,
  },
]

const LearningPath = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveStep((prev) => (prev % steps.length) + 1)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [isHovering])

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] py-12 lg:py-20 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00b0ff]/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff4081]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00b0ff]/3 to-[#ff4081]/3 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>

        {/* Additional floating elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#00b0ff] rounded-full animate-ping opacity-20"></div>
        <div
          className="absolute bottom-32 right-32 w-1 h-1 bg-[#ff4081] rounded-full animate-ping opacity-30"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00b0ff] to-[#ff4081] border border-[#00b0ff]/30 mb-8 animate-bounce shadow-lg shadow-[#00b0ff]/20">
            <Sparkles size={16} className="text-white animate-spin" style={{ animationDuration: "2s" }} />
            <span className="text-sm font-semibold text-white tracking-wide">Learning Journey</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00b0ff] to-[#ff4081] mb-6 animate-pulse">
            Master TanStack Query
          </h2>

          <p className="text-[#a0a0a0] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 hover:text-[#d0d0d0]">
            Follow our structured path to become a data fetching expert. Each step unlocks new possibilities.
          </p>
        </div>

        {/* Enhanced Learning Cards */}
        <div
          className="mb-16 lg:mb-20"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => {
              const stepNumber = index + 1
              const isActive = stepNumber === activeStep
              const isHovered = hoveredCard === stepNumber
              const Icon = step.icon

              return (
                <div
                  key={index}
                  className={`transform transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  } ${isHovered ? "scale-105 -translate-y-3" : ""}`}
                  style={{ transitionDelay: `${step.delay}ms` }}
                  onClick={() => setActiveStep(stepNumber)}
                  onMouseEnter={() => setHoveredCard(stepNumber)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`relative p-8 lg:p-10 rounded-3xl cursor-pointer min-h-[280px] lg:min-h-[320px] transition-all duration-500 group overflow-hidden ${
                      isActive
                        ? "bg-[#1a1a1a] border border-[#00b0ff]/50 shadow-[0_0_40px_10px_rgba(0,176,255,0.15)]"
                        : "bg-[#0f0f0f] border border-[rgba(255,255,255,0.1)] hover:border-[#00b0ff]/40 hover:bg-[#1a1a1a] hover:shadow-[0_0_30px_5px_rgba(0,176,255,0.1)]"
                    }`}
                  >
                    {/* Animated gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 transition-opacity duration-500 ${
                        isActive || isHovered ? "opacity-100" : ""
                      }`}
                    ></div>

                    {/* Top gradient bar */}
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient} transition-all duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    ></div>

                    {/* Enhanced floating particles */}
                    {isActive && (
                      <>
                        <div className="absolute top-6 right-6 w-2 h-2 bg-[#00b0ff] rounded-full animate-ping"></div>
                        <div
                          className="absolute top-10 right-10 w-1 h-1 bg-[#ff4081] rounded-full animate-ping"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        <div
                          className="absolute bottom-10 left-6 w-1.5 h-1.5 bg-[#00c3ff] rounded-full animate-ping"
                          style={{ animationDelay: "1s" }}
                        ></div>
                      </>
                    )}

                    <div className="relative z-10">
                      {/* Step Number with enhanced styling */}
                      <div className="flex justify-center mb-6">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 ${
                            isActive
                              ? `bg-gradient-to-br ${step.gradient} text-white shadow-xl shadow-[#00b0ff]/30 scale-110 animate-pulse`
                              : "bg-[#0f0f0f] text-[#a0a0a0] border border-[rgba(255,255,255,0.1)] group-hover:bg-[#1a1a1a] group-hover:scale-110 group-hover:border-[#00b0ff]/30"
                          } ${isHovered ? "rotate-12" : ""}`}
                        >
                          {stepNumber}
                        </div>
                      </div>

                      {/* Enhanced Icon */}
                      <div className="flex justify-center mb-6">
                        <div
                          className={`p-4 rounded-2xl transition-all duration-500 ${
                            isActive
                              ? `text-white bg-gradient-to-br ${step.bgGradient} shadow-xl shadow-[#00b0ff]/20 scale-110 rotate-6`
                              : "text-[#a0a0a0] bg-[#0f0f0f] border border-[rgba(255,255,255,0.1)] group-hover:text-white group-hover:bg-[#1a1a1a] group-hover:scale-110 group-hover:border-[#00b0ff]/30"
                          } ${isHovered ? "rotate-12 scale-125" : ""}`}
                        >
                          <Icon size={28} />
                        </div>
                      </div>

                      {/* Enhanced Content */}
                      <div className="text-center">
                        <h3
                          className={`text-xl lg:text-2xl font-bold mb-4 transition-all duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-[#ffffff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00b0ff] group-hover:to-[#ff4081]"
                          }`}
                        >
                          {step.title}
                        </h3>

                        <p
                          className={`text-sm lg:text-base leading-relaxed transition-colors duration-300 ${
                            isActive ? "text-[#b0b0b0]" : "text-[#a0a0a0] group-hover:text-[#d0d0d0]"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced bottom gradient bar */}
                    {isActive && (
                      <div
                        className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient} rounded-b-3xl shadow-[0_0_15px_3px_rgba(0,176,255,0.3)]`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    )}

                    {/* Enhanced hover glow */}
                    <div
                      className={`absolute inset-0 rounded-3xl transition-opacity duration-300 ${
                        isHovered ? "shadow-[0_0_50px_15px_rgba(0,176,255,0.1)] opacity-100" : "opacity-0"
                      }`}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Enhanced Progress Bar */}
          <div className="hidden lg:block mt-20 max-w-3xl mx-auto">
            <div className="relative h-4 bg-[#1a1a1a] rounded-full overflow-hidden shadow-inner border border-[rgba(255,255,255,0.1)]">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00b0ff] to-[#ff4081] rounded-full transition-all duration-1000 ease-in-out shadow-[0_0_20px_rgba(0,176,255,0.5)]"
                style={{ width: `${(activeStep / steps.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
              <div
                className="absolute -top-4 w-8 h-12 bg-gradient-to-b from-white to-[#00b0ff] rounded-full transition-all duration-1000 ease-in-out shadow-[0_0_20px_8px_rgba(0,176,255,0.4)] animate-bounce border-2 border-white"
                style={{
                  left: `${(activeStep / steps.length) * 100}%`,
                  transform: "translateX(-50%)",
                  animationDuration: "2s",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Enhanced Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Sparkles,
              title: "Responsive Design",
              description:
                "This component automatically adjusts to sidebar visibility and screen size with smooth animations.",
              color: "#00b0ff",
              bgColor: "from-[#00b0ff]/10 to-[#00b0ff]/5",
              delay: 0,
            },
            {
              icon: BookOpen,
              title: "Learning Path",
              description:
                "Follow the structured path to master TanStack Query with interactive cards and visual feedback.",
              color: "#ff4081",
              bgColor: "from-[#ff4081]/10 to-[#ff4081]/5",
              delay: 200,
            },
            {
              icon: Zap,
              title: "Dark Theme",
              description: "Customized to match your dark theme with accent colors and enhanced hover effects.",
              color: "#00c3ff",
              bgColor: "from-[#00c3ff]/10 to-[#00c3ff]/5",
              delay: 400,
            },
          ].map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className={`bg-[#0f0f0f] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-[0_0_30px_8px_rgba(0,176,255,0.1)] hover:border-[#00b0ff]/40 group overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${card.delay}ms` }}
              >
                {/* Card background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="p-4 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ backgroundColor: `${card.color}20` }}
                    >
                      <Icon size={24} style={{ color: card.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00b0ff] group-hover:to-[#ff4081] transition-all duration-300">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[#a0a0a0] group-hover:text-[#d0d0d0] transition-colors duration-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LearningPath
