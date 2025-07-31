import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

interface TechItem {
  name: string;
  icon: string;
}

interface TechStackProps {
  items: TechItem[];
}

// Back-End
const backEndTech = [
  { name: "PHP", slug: "php" },
  { name: "Codeigniter", slug: "codeigniter" },
  { name: "MySQL", slug: "mysql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Express", slug: "express" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "PostgreSQL", slug: "postgresql" },
];

// Front-End Tech
const frontEndTech = [
  { name: "CSS", slug: "css" },
  { name: "HTML", slug: "html5" },
  { name: "React", slug: "react" },
  { name: "Python", slug: "python" },
  { name: "NextJS", slug: "nextdotjs" },  
  { name: "JavaScript", slug: "javascript" },
  // { name: "TypeScript", slug: "typescript" },
];

// Dev Tools
const devTools = [
  { name: "Git", slug: "git" },
  { name: "Vite", slug: "vite" },
  { name: "NumPy", slug: "numpy" },
  { name: "Pandas", slug: "pandas" },
  { name: "Github", slug: "github" },
  { name: "Vercel", slug: "vercel" },
  // { name: "Postman", slug: "postman" },
  // { name: "Appwrite", slug: "appwrite" },
  { name: "Shadcn UI", slug: "shadcnui" },
  { name: "Bootstrap", slug: "bootstrap" },
  { name: "Tailwind", slug: "tailwindcss" },
];

const backEndIcons = backEndTech.map((tech) => ({
  ...tech,
  icon: `https://cdn.simpleicons.org/${tech.slug}`,
}));

const frontEndIcons = frontEndTech.map((tech) => ({
  ...tech,
  icon: `https://cdn.simpleicons.org/${tech.slug}`,
}));

const devToolsIcons = devTools.map((tech) => ({
  ...tech,
  icon: `https://cdn.simpleicons.org/${tech.slug}`,
}));

const StackList: React.FC<TechStackProps> = ({ items }) => (
  <>
    <Marquee className="py-6" pauseOnHover={false}>
      <div className="flex gap-8">
        {items.map((tech, i) => (
          <div key={i} className="relative group text-center">
            <div
              className="w-20 border h-20 bg-gradient-to-b rounded-2xl p-6 transition-all duration-300 
                        hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
                        flex items-center justify-center"
            >
              <Image
                src={tech.icon}
                alt={`${tech.name} logo`}
                width={55}
                height={55}
                loading="lazy"
              />
            </div>
            <span className="text-sm whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </div>
    </Marquee>

    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
  </>
);

const TechStack = () => {
  return (
    <div className="relative">
      <StackList items={frontEndIcons} />
      <StackList items={backEndIcons} />
      <StackList items={devToolsIcons} />
    </div>
  );
};

export default TechStack;
