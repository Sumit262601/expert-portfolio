import React, { useState, useEffect, useRef } from "react";
import { Building2, CalendarDays } from "lucide-react";

const Timeline: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      if (!containerRef.current || !timelineRef.current) return;

      const timeline: HTMLDivElement = timelineRef.current;
      const timelineRect: DOMRect = timeline.getBoundingClientRect();

      const windowHeight: number = window.innerHeight;
      const timelineTop: number = timelineRect.top;
      const timelineHeight: number = timelineRect.height;

      const startPoint: number = windowHeight - 100;
      const endPoint: number = -timelineHeight + 400;

      let progress: number = 0;
      if (timelineTop <= startPoint && timelineTop >= endPoint) {
        progress = (startPoint - timelineTop) / (startPoint - endPoint);
      } else if (timelineTop < endPoint) {
        progress = 1;
      }

      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Experience
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-gray-600 px-4">
            A detailed overview of my professional journey,
            <br className="hidden sm:block" />
            highlighting key roles, achievements, and skills acquired.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Animated Timeline Line */}
          <div
            className="absolute left-4 sm:left-6 lg:left-8 top-0 w-[2px] sm:w-[3px] bg-gray-200 rounded-full"
            style={{ height: "100%" }}
          >
            <div
              className="w-[2px] sm:w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
              }}
            />
          </div>

          {/* Timeline Item */}
          <div className="relative pl-12 sm:pl-16 lg:pl-20 pb-16">
            {/* Timeline Node */}
            <div
              className={`absolute left-2.5 sm:left-4 lg:left-6 top-4 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-3 sm:border-4 transition-all duration-500 ${
                scrollProgress > 0.1
                  ? "bg-blue-800 border-blue-100 shadow-lg shadow-blue-500/30"
                  : "bg-white border-gray-300"
              }`}
            />

            {/* Experience Card */}
            <div
              className={`bg-white rounded-xl sm:rounded-2xl w-full p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-700 ${
                scrollProgress > 0.2
                  ? "opacity-100 translate-y-0"
                  : "opacity-70 translate-y-4"
              }`}
            >
              {/* Company Info */}
              <div className="mb-6">
                <div className="flex items-center text-gray-600 gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-white" size={20} />
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-medium">6 months</span>
                </div>
                <div className="text-gray-900">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 leading-tight">
                    PHP Development Internship
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium flex items-center gap-2 flex-wrap">
                    <CalendarDays size={16} className="flex-shrink-0" />
                    <span>Feb 2024 - July 2024</span>
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3 sm:space-y-4">
                <div
                  className={`flex items-start gap-3 transition-all duration-700 delay-100 ${
                    scrollProgress > 0.3
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Developed a dynamic single-page website with admin panel for
                    Sai-Prerna using CodeIgniter, demonstrating proficiency in
                    responsive and user-friendly web design.
                  </p>
                </div>

                <div
                  className={`flex items-start gap-3 transition-all duration-700 delay-200 ${
                    scrollProgress > 0.4
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Enhanced performance and scalability of the application by
                    applying industry best practices and optimizing load times.
                  </p>
                </div>

                <div
                  className={`flex items-start gap-3 transition-all duration-700 delay-300 ${
                    scrollProgress > 0.5
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Strengthened web development skills through real-world
                    experience, focusing on CodeIgniter framework, MVC
                    structure, and scalable solution implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;