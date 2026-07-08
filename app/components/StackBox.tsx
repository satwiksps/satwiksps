"use client";

import { useState } from "react";
import { 
  Aperture, 
  Brain, 
  Globe, 
  Cloud, 
  BarChart, 
  Database, 
  Code, 
  Package,
  TerminalSquare
} from "lucide-react";

type CategoryName = "All Skills" | "AI/ML/DL" | "Python Libs" | "Web" | "Cloud" | "Big Data" | "Databases" | "Languages";

const categories: { name: CategoryName; icon: any }[] = [
  { name: "All Skills", icon: Aperture },
  { name: "AI/ML/DL", icon: Brain },
  { name: "Python Libs", icon: Package },
  { name: "Web", icon: Globe },
  { name: "Cloud", icon: Cloud },
  { name: "Big Data", icon: BarChart },
  { name: "Databases", icon: Database },
  { name: "Languages", icon: Code },
];

const skills = [
  // AI/ML/DL
  { name: "PyTorch", category: "AI/ML/DL", icon: Brain, color: "#EE4C2C" },
  { name: "Transformers", category: "AI/ML/DL", icon: Brain, color: "#FFD21E" },
  { name: "PEFT", category: "AI/ML/DL", icon: Brain, color: "#FFD21E" },
  { name: "Bitsandbytes", category: "AI/ML/DL", icon: Brain, color: "#FFD21E" },
  { name: "Diffusers", category: "AI/ML/DL", icon: Brain, color: "#FFD21E" },
  { name: "Hugging Face Ecosystem", category: "AI/ML/DL", icon: Package, color: "#FFD21E" },
  
  // Python Libs
  { name: "NLTK", category: "Python Libs", icon: Aperture, color: "#3776AB" },
  { name: "Scapy", category: "Python Libs", icon: Aperture, color: "#3776AB" },
  { name: "OpenCV", category: "Python Libs", icon: Aperture, color: "#5C3EE8" },
  { name: "BeautifulSoup", category: "Python Libs", icon: Aperture, color: "#3776AB" },
  { name: "Selenium", category: "Python Libs", icon: Aperture, color: "#43B02A" },
  { name: "Pandas", category: "Python Libs", icon: Aperture, color: "#000000" },
  { name: "Poetry", category: "Python Libs", icon: Package, color: "#59A5D8" },
  { name: "Langchain", category: "Python Libs", icon: Brain, color: "#000000" },

  // Web
  { name: "FastAPI", category: "Web", icon: Database, color: "#009688" },
  { name: "Flask", category: "Web", icon: Package, color: "#000000" },
  { name: "Django", category: "Web", icon: Package, color: "#44B78B" },
  { name: "React.js", category: "Web", icon: Code, color: "#61DAFB" },
  { name: "Next.js", category: "Web", icon: Aperture, color: "#000000" },
  { name: "Express", category: "Web", icon: Database, color: "#000000" },
  { name: "Node.js", category: "Web", icon: Database, color: "#339933" },
  { name: "Vue.js", category: "Web", icon: Code, color: "#4FC08D" },
  { name: "Bootstrap", category: "Web", icon: Aperture, color: "#7952B3" },
  { name: "Tailwind", category: "Web", icon: Brain, color: "#06B6D4" },
  { name: "HTML", category: "Web", icon: Code, color: "#E34F26" },
  { name: "CSS", category: "Web", icon: Code, color: "#1572B6" },

  // Cloud
  { name: "SQL", category: "Languages", icon: Database, color: "#CC292B" },
  { name: "Azure", category: "Cloud", icon: Cloud, color: "#0078D4" },
  { name: "Azure Machine Learning", category: "Cloud", icon: Cloud, color: "#0078D4" },
  { name: "AWS", category: "Cloud", icon: Cloud, color: "#FF9900" },
  { name: "AWS SageMaker", category: "Cloud", icon: Cloud, color: "#FF9900" },
  { name: "Docker", category: "Cloud", icon: Package, color: "#2496ED" },
  { name: "Kubernetes", category: "Cloud", icon: Package, color: "#326CE5" },
  { name: "Cloudflare", category: "Cloud", icon: Cloud, color: "#F38020" },
  { name: "E2E Cloud", category: "Cloud", icon: Cloud, color: "#0052CC" },

  // Big Data
  { name: "Databricks", category: "Big Data", icon: Aperture, color: "#FF3621" },
  { name: "Azure Data Factory", category: "Big Data", icon: Cloud, color: "#0078D4" },
  { name: "Apache Spark", category: "Big Data", icon: Aperture, color: "#E25A1C" },
  { name: "Hadoop", category: "Big Data", icon: Aperture, color: "#FFF000" },
  { name: "Kafka", category: "Big Data", icon: Aperture, color: "#000000" },

  // Databases
  { name: "MongoDB", category: "Databases", icon: Database, color: "#47A248" },
  { name: "PostgreSQL", category: "Databases", icon: Database, color: "#4169E1" },
  { name: "Firebase", category: "Databases", icon: Aperture, color: "#FFCA28" },
  { name: "Redis", category: "Databases", icon: Aperture, color: "#DC382D" },
  { name: "MySQL", category: "Databases", icon: Database, color: "#4479A1" },
  { name: "Supabase", category: "Databases", icon: Aperture, color: "#3ECF8E" },
  { name: "Pinecone", category: "Databases", icon: Aperture, color: "#000000" },
  { name: "FAISS", category: "Databases", icon: Brain, color: "#1877F2" },
  { name: "Qdrant", category: "Databases", icon: Aperture, color: "#E60067" },
  { name: "ChromaDB", category: "Databases", icon: Aperture, color: "#F84525" },

  // Languages
  { name: "JavaScript", category: "Languages", icon: Code, color: "#D4B800" },
  { name: "TypeScript", category: "Languages", icon: Code, color: "#3178C6" },
  { name: "Python", category: "Languages", icon: TerminalSquare, color: "#3776AB" },
  { name: "C/C++", category: "Languages", icon: Aperture, color: "#00599C" }
];

export default function StackBox() {
  const [activeCategory, setActiveCategory] = useState<CategoryName>("All Skills");

  const filteredSkills = activeCategory === "All Skills" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className="innerContainer p-4 md:p-6 py-8">
      {/* Categories / Filters */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center sm:justify-start">
        {categories.map((cat) => {
          const count = cat.name === "All Skills" 
            ? skills.length 
            : skills.filter(s => s.category === cat.name).length;

          const isActive = activeCategory === cat.name;

          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border shadow-sm ${
                isActive 
                ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]' 
                : 'bg3 text2 hover:text1 hover:bg2 border-[var(--border)]'
              }`}
            >
              <cat.icon size={14} strokeWidth={isActive ? 2.5 : 2} />
              <span>{cat.name}</span>
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] flex items-center justify-center font-bold leading-none ml-0.5 ${
                isActive 
                ? 'bg-[var(--background)] text-[var(--foreground)] shadow-sm' 
                : 'bg2 text2'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {filteredSkills.map((skill, index) => (
          <div 
            key={`${skill.name}-${index}`} 
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg1 text1 text-xs font-medium shadow-sm hover:bg2 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            style={{ 
              ['--hover-color' as any]: skill.color === '#000000' ? 'currentColor' : skill.color 
            }}
          >
            <skill.icon size={14} strokeWidth={2} style={{ color: skill.color === '#000000' ? 'currentColor' : skill.color }} />
            <span 
              className="tracking-tight transition-colors duration-300"
              style={{ color: 'var(--text-color, inherit)' }}
              onMouseEnter={(e) => {
                if(skill.color !== '#000000') {
                  e.currentTarget.style.color = skill.color;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'inherit';
              }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
