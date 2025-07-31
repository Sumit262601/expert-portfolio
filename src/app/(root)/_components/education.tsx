"use client";

import {
  Card,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import { Building2, CalendarDays } from "lucide-react";

export function EducationStack() {
  const { theme } = useTheme();
  return (
    <div className="px-4 sm:px-6 lg:px-8 mb-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6"> Education</h2>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          A summary of my academic background, including
          <br />
          degree, certification.
        </p>
      </div>

      <Card className="p-0 w-full max-w-3xl mx-auto shadow-none border-none">
        <MagicCard
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          className="p-0"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-700">
            {/* Company Info */}
            <div className="items-center gap-4 mb-6">
              <div className="flex text-gray-600 gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Building2 className="text-white" size={30} />
                </div>
                <div className="text-gray-900">
                  <h1 className="text-3xl font-bold mb-3">
                    Tata Institute of Social Science (TISS), Mumbai
                  </h1>
                  <p className="text-gray-600 font-medium flex gap-2">
                    <CalendarDays />
                    Sep 2022 - July 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 transition-all duration-700 delay-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  
                </p>
              </div>
            </div>
          </div>
        </MagicCard>
      </Card>
    </div>
  );
}
