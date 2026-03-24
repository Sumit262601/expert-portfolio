"use client";
import Link from "next/link";

import { Code2, ExternalLink, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Img1, Img3, Img4 } from "@/assets/index";


const Projects = [
  {
    title: "Youtube Downloader",
    description:
      "This platform to help youtube video download in high quality and they also supported copyright video.",
    logo: Img1,
    features: [
      "User-friendly interface in python GUI",
      "An online website must have the same feature for video downloading, but it has a condition: users must pay and then receive a high-resolution video.",
      "Users can easly download the youtube video.",
      "Gain insights at a glance with a dynamic dashboard that showcases total and consumed storage",
    ],
    technologies: ["Python", "yt-dlp", "tkinter", "ffmpeg"],

    link: "",
    sourceCode: "https://github.com/Sumit262601/YT-Downlaoder",
  },

  {
    title: "Code Craft",
    description: "Online IDE with multi-language support (10 languages)",
    logo: Img3,
    features: [
      "Smart output handling with Success & Error states",
      "Flexible pricing with Free & Pro plans",
      "Customizable experience with 5 VSCode themes",
      "Community-driven code sharing system",
      "Personal profile with execution history tracking",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Convex",
      "Clerk Auth",
      "Lemon Squeezy",
    ],

    link: "https://thecodecraft.vercel.app/",
    sourceCode: "https://github.com/Sumit262601/Code-Craft",
  },

  {
    title: "ImageGen (AI Image Generate)",
    description: "",
    logo: Img4,
    features: [
      "Developed a text-to-image generation application using Nebius AI Studio enabling users to create high-quality images from text prompts",
      "Implemented features for image generation, sharing, and downloading enhancing user engagement and accessibility",
      "Optimized the model for efficient processing and high-resolution outputs ensuring a seamless user experience",
      "Deployed the application with a user-friendly interface, leveraging modern UI/UX principles for smooth interaction",
    ],
    technologies: ["React.js", "TypeScript", "Shadcn UI", "Nebius AI Studio"],

    link: "https://ai-image-generater-murex.vercel.app/",
    sourceCode: "https://github.com/Sumit262601/ImageAI",
  },
];

export default function ProjectCard() {
  return (
    <div className="space-y-8 md:space-y-10">
      {Projects.map((project) => (
        <div
          key={project.title}
          className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg sm:p-6 lg:p-8"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
            <section className="overflow-hidden rounded-xl border border-border/70 bg-background/70">
              <Image
                src={project.logo}
                width={1280}
                height={720}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </section>

            <section className="relative flex flex-col gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Sparkles className="size-4" />
                  <span>Featured Project</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {project.title}
                </h3>

                {project.description ? (
                  <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                    {project.description}
                  </p>
                ) : null}
              </div>

              <ul className="space-y-2.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                  >
                    <span className="mt-1 text-primary">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-xs font-medium transition-colors hover:bg-secondary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link href={project.link} target="_blank" rel="noreferrer">
                  <Button className="w-full lg:w-fit">
                    <ExternalLink />
                    Live Demo
                  </Button>
                </Link>

                <Link href={project.sourceCode} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full lg:w-fit">
                    <Code2 />
                    View Code
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}
