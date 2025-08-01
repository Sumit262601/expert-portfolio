import React, { useState, useEffect, useRef } from "react";
import { Building2, CalendarDays } from "lucide-react";

const Timeline: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    const handleScroll = (): void => {
      if (!containerRef.current || !timelineRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Calculate when timeline section enters and exits viewport
      const startTrigger = windowHeight * 0.8; // Start when 80% down the viewport
      const endTrigger = -containerHeight + windowHeight * 0.2; // End when 20% remains

      let progress = 0;
      if (containerTop <= startTrigger && containerTop >= endTrigger) {
        progress = (startTrigger - containerTop) / (startTrigger - endTrigger);
      } else if (containerTop < endTrigger) {
        progress = 1;
      }

      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const experiences = [
    {
      id: 1,
      title: "PHP Development Intern",
      duration: "6 months",
      period: "Feb 2024 - July 2024",
      achievements: [
        "Developed a dynamic single-page website with admin panel for Sai-Prerna using CodeIgniter, demonstrating proficiency in responsive and user-friendly web design.",
        "Enhanced performance and scalability of the application by applying industry best practices and optimizing load times.",
        "Strengthened web development skills through real-world experience, focusing on CodeIgniter framework, MVC structure, and scalable solution implementation."
      ]
    },
    // {
    //   id: 2,
    //   title: "Frontend Developer",
    //   duration: "8 months",
    //   period: "Aug 2024 - Present",
    //   achievements: [
    //     "Built responsive React applications with modern UI/UX principles and component-based architecture.",
    //     "Collaborated with cross-functional teams to deliver high-quality user interfaces and improved user experience.",
    //     "Implemented state management solutions and optimized application performance for better user engagement."
    //   ]
    // }
  ];

  return (
    <div
      ref={containerRef}
      id="experience"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 "
    >
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ">
          Experience
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4 ">
          A detailed overview of my professional journey,
          <br className="hidden sm:block" />
          highlighting key roles, achievements, and skills acquired.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto" ref={timelineRef}>
        {/* Centered Timeline Line */}
        <div className="absolute left-4 sm:left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-0 w-[3px] bg-gray-300 rounded-full h-full">
          <div
            className="w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-300 ease-out"
            style={{
              height: `${scrollProgress * 100}%`,
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
            }}
          />
        </div>

        {/* Timeline Items */}
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;
          const itemProgress = scrollProgress * experiences.length - index;
          // const isVisible = itemProgress > 0;
          const nodeActive = itemProgress > 0.2;
          const cardVisible = itemProgress > 0.4;

          return (
            <div
              key={experience.id}
              className={`relative pb-16 ${
                // Mobile and small screens: all items on right
                'pl-12 sm:pl-16 ' +
                // Medium screens and up: alternating sides
                'md:pl-0 ' +
                (isEven 
                  ? 'md:pr-1/2 md:pr-8 lg:pr-12' // Even items on left side
                  : 'md:pl-1/2 md:pl-8 lg:pl-12'  // Odd items on right side
                )
              }`}
            >
              {/* Timeline Node */}
              <div
                className={`absolute w-5 h-5 rounded-full border-4 transition-all duration-700 z-10 left-2 sm:left-4 md:left-1/2 top-6 md:-translate-x-1/2 ${
                  nodeActive
                    ? "bg-blue-600 border-white shadow-lg shadow-blue-500/40"
                    : "bg-white border-gray-400"
                }`}
                style={{
                  transform: `scale(${nodeActive ? 1.2 : 1})`,
                }}
              />

              {/* Experience Card */}
              <div
                className={`bg-gray-100 rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-700 max-w-4xl ${
                  // Mobile: all cards on right side
                  '' +
                  // Medium+: alternating sides with proper alignment
                  (isEven 
                    ? 'md:ml-auto md:mr-8 lg:mr-12'
                    : 'md:mr-auto md:ml-8 lg:ml-12'
                  ) +
                  // Animation states
                  (cardVisible
                    ? " opacity-100 translate-y-0"
                    : " opacity-0 translate-y-8")
                }`}
              >
                {/* Company Info */}
                <div className="mb-6">
                  <div className="flex items-center text-gray-600 gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="text-white" size={20} />
                    </div>
                    <span className="text-base lg:text-lg font-medium">
                      {experience.duration}
                    </span>
                  </div>
                  <div className="text-gray-900">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                      {experience.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 font-medium flex items-center gap-2">
                      <CalendarDays size={16} className="flex-shrink-0" />
                      <span>{experience.period}</span>
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  {experience.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className={`flex items-start gap-3 transition-all duration-700 ${
                        cardVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                      }`}
                      style={{
                        transitionDelay: `${(achIndex + 1) * 100}ms`
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;