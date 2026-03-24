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
      duration: "11 months",
      company: "Virtual Education Trust",
      period: "Feb 2024 – Dec 2024",
      achievements: [
        "Designed and developed a dynamic single-page website for Sai-Prerna using CodeIgniter.",
        "Built responsive and user-centric web interfaces following modern UI/UX principles.",
        "Implemented performance optimization techniques to improve website speed and efficiency.",
        "Applied industry best practices and clean coding standards during development.",
        "Developed scalable solutions to ensure smooth functionality and future enhancements.",
        "Gained hands-on experience in web application architecture and real-world development workflows.",
      ]
    },
    {
      id: 2,
      title: "React Native Developer",
      duration: "7 months",
      company: "OffLens Studio",
      period: "Aug 2025 - Feb 2026",
      achievements: [
        "Provided technical support for web and mobile applications, ensuring smooth functionality and a positive user experience.",
        "Worked directly with React JS and React Native (Expo) to identify, debug, and resolve front-end and iOS application issues.",
        "Assisted in the development, testing, and troubleshooting of iOS applications built using React Native and Expo framework.",
        "Used Git and GitHub for version control and collaborated with the development team to track and resolve bugs.",
        "Utilized Chrome Developer Tools and Expo debugging tools to analyze performance and resolve application errors.",
        "Managed customer queries and technical tickets using Intercom.",
        "Recognized for fast issue resolution, strong problem-solving skills, and effective client communication."
      ]
    }
  ];

  return (
    <div
      ref={containerRef}
      id="experience"
      className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-5">
          Experience
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
          A detailed overview of my professional journey,
          <br className="hidden sm:block" />
          highlighting key roles, achievements, and skills acquired.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto" ref={timelineRef}>
        {/* Centered Timeline Line */}
        <div className="absolute left-2 sm:left-2 md:left-1/2 md:transform md:-translate-x-1/2 top-0 w-[2px] bg-border/80 rounded-full h-full">
          <div
            className="w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 rounded-full transition-all duration-300 ease-out"
            style={{
              height: `${scrollProgress * 100}%`,
              boxShadow: "0 0 18px rgba(59, 130, 246, 0.35)",
            }}
          />
        </div>

        {/* Timeline Items */}
        {experiences.map((experience, index) => {
          const isEven = index % 3 === 0;
          const normalizedIndex = index / experiences.length;
          const nodeActive = scrollProgress >= normalizedIndex - 0.2;
          const cardVisible = scrollProgress >= normalizedIndex - 0.1;

          return (
            <div
              key={experience.id}
              className="relative pb-16 sm:pb-20 pl-6 sm:pl-16 md:pl-0"
            >
              {/* Timeline Node */}
              <div
                className={`absolute w-5 h-5 rounded-full border-4 transition-all duration-700 z-10 left-2 sm:left-2 md:left-1/2 top-7 md:-translate-x-1/2 ${nodeActive
                  ? "bg-blue-600 border-white shadow-lg shadow-blue-500/40"
                  : "bg-background border-border"
                  }`}
                style={{
                  transform: `scale(${nodeActive ? 1.2 : 1})`,
                }}
              />

              {/* Experience Card */}
              <div
                className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-card/90 backdrop-blur-sm p-6 sm:p-7 lg:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(0,0,0,0.14)] max-w-[92rem] md:max-w-5xl md:w-[calc(88%-1.25rem)] lg:w-[calc(50%-1.75rem)] ${
                  (isEven
                    ? 'md:mr-auto md:ml-0'
                    : 'md:ml-auto md:mr-0'
                  ) +
                  // Animation states
                  (cardVisible
                    ? " opacity-100 translate-y-0"
                    : " opacity-0 translate-y-8")
                  }`}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent" />

                {/* Company Info */}
                <div className="mb-6 relative z-10">
                  <div className="inline-flex items-center text-muted-foreground gap-2.5 mb-4 rounded-full border border-border/70 bg-background/80 px-3.5 py-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="text-white" size={20} />
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground font-medium">{experience.company}</p>
                  </div>
                  <div className="text-foreground mt-4">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight tracking-tight">
                      {experience.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground font-medium flex items-center gap-2">
                      <CalendarDays size={16} className="flex-shrink-0" />
                      <span> {experience.period} </span>
                      <span> {experience.duration} </span>
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4 relative z-10">
                  {experience.achievements.map((achievement, achIndex) => (
                    <div
                      key={achIndex}
                      className={`flex items-start gap-3 transition-all duration-700 ${cardVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4"
                        }`}
                      style={{
                        transitionDelay: `${(achIndex + 1) * 100}ms`
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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