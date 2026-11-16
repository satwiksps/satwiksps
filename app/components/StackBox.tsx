"use client";

import { useState } from "react";
import {
  Activity,
  AppWindow,
  Axis3D,
  Binary,
  Blocks,
  BookOpenText,
  Bot,
  Boxes,
  Braces,
  Brain,
  BrainCircuit,
  BrainCog,
  Cable,
  ChartLine,
  ChartNetwork,
  ChartScatter,
  ClipboardCheck,
  Cloud,
  CloudCheck,
  CloudCog,
  CloudUpload,
  Code,
  CodeXml,
  Component,
  Container,
  Database,
  DatabaseSearch,
  DatabaseZap,
  Eye,
  Factory,
  FileBox,
  FileCode,
  FileJson,
  FileType,
  Flame,
  FlaskConical,
  Gauge,
  GitBranch,
  GitFork,
  GitMerge,
  GitPullRequestArrow,
  GlobeLock,
  HardDrive,
  Headset,
  ImagePlus,
  Layers,
  Layers3,
  LayersPlus,
  LayoutDashboard,
  LayoutGrid,
  LibraryBig,
  Link2,
  MemoryStick,
  MousePointerClick,
  Network,
  PackageCheck,
  PackageOpen,
  Paintbrush,
  PanelsTopBottom,
  Plug,
  Radio,
  RadioTower,
  RefreshCw,
  Route,
  Router,
  ScanEye,
  ScanSearch,
  ScanText,
  Search,
  Send,
  Server,
  Shapes,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  SquareTerminal,
  SwatchBook,
  Table2,
  TableProperties,
  Terminal,
  TestTubeDiagonal,
  TestTubes,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const categories = [
  { name: "All Skills", icon: LayoutGrid },
  { name: "Software Development", icon: Code },
  { name: "AI & ML", icon: Brain },
  { name: "Data & Databases", icon: Database },
  { name: "Cloud & DevOps", icon: Cloud },
] as const;

type CategoryName = (typeof categories)[number]["name"];

const skills: {
  name: string;
  category: Exclude<CategoryName, "All Skills">;
  icon: LucideIcon;
  color: string;
}[] = [
  // Software Development
  { name: "Python", category: "Software Development", icon: SquareTerminal, color: "#3776AB" },
  { name: "TypeScript", category: "Software Development", icon: FileType, color: "#3178C6" },
  { name: "JavaScript", category: "Software Development", icon: Braces, color: "#D4B800" },
  { name: "Go (Golang)", category: "Software Development", icon: GitFork, color: "#00ADD8" },
  { name: "C/C++", category: "Software Development", icon: Binary, color: "#00599C" },
  { name: "HTML", category: "Software Development", icon: CodeXml, color: "#E34F26" },
  { name: "CSS", category: "Software Development", icon: Paintbrush, color: "#1572B6" },
  { name: "React.js", category: "Software Development", icon: Component, color: "#61DAFB" },
  { name: "Next.js", category: "Software Development", icon: PanelsTopBottom, color: "#000000" },
  { name: "Vue.js", category: "Software Development", icon: Layers, color: "#4FC08D" },
  { name: "Tailwind", category: "Software Development", icon: SwatchBook, color: "#06B6D4" },
  { name: "Bootstrap", category: "Software Development", icon: LayoutGrid, color: "#7952B3" },
  { name: "Node.js", category: "Software Development", icon: Server, color: "#339933" },
  { name: "Express", category: "Software Development", icon: Route, color: "#000000" },
  { name: "FastAPI", category: "Software Development", icon: Zap, color: "#009688" },
  { name: "Flask", category: "Software Development", icon: FlaskConical, color: "#000000" },
  { name: "Django", category: "Software Development", icon: Layers3, color: "#44B78B" },
  { name: "RESTful APIs", category: "Software Development", icon: Plug, color: "#64748B" },
  { name: "Microservices", category: "Software Development", icon: Blocks, color: "#64748B" },
  { name: "Distributed Systems", category: "Software Development", icon: Network, color: "#64748B" },
  { name: "Design Patterns", category: "Software Development", icon: Shapes, color: "#64748B" },
  { name: "Performance Optimization", category: "Software Development", icon: Gauge, color: "#64748B" },
  { name: "Git", category: "Software Development", icon: GitBranch, color: "#F05032" },
  { name: "Poetry", category: "Software Development", icon: PackageCheck, color: "#59A5D8" },
  { name: "pytest", category: "Software Development", icon: TestTubeDiagonal, color: "#009FE3" },
  { name: "Jest", category: "Software Development", icon: TestTubes, color: "#C21325" },
  { name: "Selenium", category: "Software Development", icon: MousePointerClick, color: "#43B02A" },
  { name: "Postman", category: "Software Development", icon: Send, color: "#FF6C37" },
  { name: "Automated Testing", category: "Software Development", icon: ClipboardCheck, color: "#64748B" },

  // AI & ML
  { name: "PyTorch", category: "AI & ML", icon: Flame, color: "#EE4C2C" },
  { name: "TensorFlow", category: "AI & ML", icon: Workflow, color: "#FF6F00" },
  { name: "Hugging Face Ecosystem", category: "AI & ML", icon: LibraryBig, color: "#FFD21E" },
  { name: "Transformers", category: "AI & ML", icon: BrainCircuit, color: "#FFD21E" },
  { name: "PEFT", category: "AI & ML", icon: SlidersHorizontal, color: "#FFD21E" },
  { name: "Bitsandbytes", category: "AI & ML", icon: MemoryStick, color: "#FFD21E" },
  { name: "Diffusers", category: "AI & ML", icon: ImagePlus, color: "#FFD21E" },
  { name: "OpenAI SDK", category: "AI & ML", icon: Bot, color: "#000000" },
  { name: "LangChain", category: "AI & ML", icon: Link2, color: "#000000" },
  { name: "OpenCV", category: "AI & ML", icon: ScanEye, color: "#5C3EE8" },
  { name: "NLTK", category: "AI & ML", icon: BookOpenText, color: "#3776AB" },
  { name: "Gradio", category: "AI & ML", icon: AppWindow, color: "#F97316" },
  { name: "Azure Machine Learning", category: "AI & ML", icon: BrainCog, color: "#0078D4" },
  { name: "Vertex AI", category: "AI & ML", icon: ChartNetwork, color: "#4285F4" },

  // Data & Databases
  { name: "SQL", category: "Data & Databases", icon: DatabaseSearch, color: "#CC292B" },
  { name: "Pandas", category: "Data & Databases", icon: Table2, color: "#000000" },
  { name: "Spark", category: "Data & Databases", icon: Sparkles, color: "#E25A1C" },
  { name: "Kafka", category: "Data & Databases", icon: RadioTower, color: "#000000" },
  { name: "Databricks", category: "Data & Databases", icon: Layers, color: "#FF3621" },
  { name: "Azure Data Factory", category: "Data & Databases", icon: Factory, color: "#0078D4" },
  { name: "Hadoop", category: "Data & Databases", icon: HardDrive, color: "#FFF000" },
  { name: "BeautifulSoup", category: "Data & Databases", icon: ScanText, color: "#3776AB" },
  { name: "PostgreSQL", category: "Data & Databases", icon: Database, color: "#4169E1" },
  { name: "MySQL", category: "Data & Databases", icon: Database, color: "#4479A1" },
  { name: "SQLite", category: "Data & Databases", icon: FileBox, color: "#003B57" },
  { name: "MongoDB", category: "Data & Databases", icon: FileJson, color: "#47A248" },
  { name: "Redis", category: "Data & Databases", icon: DatabaseZap, color: "#DC382D" },
  { name: "DynamoDB", category: "Data & Databases", icon: TableProperties, color: "#4053D6" },
  { name: "Firebase", category: "Data & Databases", icon: CloudUpload, color: "#FFCA28" },
  { name: "Supabase", category: "Data & Databases", icon: Database, color: "#3ECF8E" },
  { name: "Elasticsearch", category: "Data & Databases", icon: Search, color: "#FEC514" },
  { name: "Pinecone", category: "Data & Databases", icon: ChartScatter, color: "#000000" },
  { name: "FAISS", category: "Data & Databases", icon: ScanSearch, color: "#1877F2" },
  { name: "Qdrant", category: "Data & Databases", icon: Axis3D, color: "#E60067" },
  { name: "ChromaDB", category: "Data & Databases", icon: ChartScatter, color: "#F84525" },

  // Cloud & DevOps
  { name: "AWS", category: "Cloud & DevOps", icon: Cloud, color: "#FF9900" },
  { name: "Microsoft Azure", category: "Cloud & DevOps", icon: CloudCog, color: "#0078D4" },
  { name: "Cloudflare", category: "Cloud & DevOps", icon: GlobeLock, color: "#F38020" },
  { name: "E2E Cloud", category: "Cloud & DevOps", icon: Server, color: "#0052CC" },
  { name: "Linux", category: "Cloud & DevOps", icon: Terminal, color: "#000000" },
  { name: "Security Best Practices", category: "Cloud & DevOps", icon: ShieldCheck, color: "#64748B" },
  { name: "Docker", category: "Cloud & DevOps", icon: Container, color: "#2496ED" },
  { name: "Kubernetes", category: "Cloud & DevOps", icon: Boxes, color: "#326CE5" },
  { name: "Helm", category: "Cloud & DevOps", icon: PackageOpen, color: "#0F1689" },
  { name: "Terraform", category: "Cloud & DevOps", icon: LayersPlus, color: "#844FBA" },
  { name: "Ansible", category: "Cloud & DevOps", icon: Wrench, color: "#EE0000" },
  { name: "Infrastructure as Code", category: "Cloud & DevOps", icon: FileCode, color: "#64748B" },
  { name: "Cloud-Native", category: "Cloud & DevOps", icon: CloudCheck, color: "#64748B" },
  { name: "GitHub Actions", category: "Cloud & DevOps", icon: GitPullRequestArrow, color: "#2088FF" },
  { name: "Azure DevOps", category: "Cloud & DevOps", icon: GitMerge, color: "#0078D4" },
  { name: "CI/CD", category: "Cloud & DevOps", icon: RefreshCw, color: "#64748B" },
  { name: "Prometheus", category: "Cloud & DevOps", icon: ChartLine, color: "#E6522C" },
  { name: "Grafana", category: "Cloud & DevOps", icon: LayoutDashboard, color: "#F46800" },
  { name: "Monitoring", category: "Cloud & DevOps", icon: Activity, color: "#64748B" },
  { name: "Observability", category: "Cloud & DevOps", icon: Eye, color: "#64748B" },
  { name: "Telemetry", category: "Cloud & DevOps", icon: Radio, color: "#64748B" },
  { name: "Production Support", category: "Cloud & DevOps", icon: Headset, color: "#64748B" },
  { name: "Networking", category: "Cloud & DevOps", icon: Router, color: "#64748B" },
  { name: "Scapy", category: "Cloud & DevOps", icon: Cable, color: "#3776AB" },
];

export default function StackBox() {
  const [activeCategory, setActiveCategory] = useState<CategoryName>("All Skills");
  const filteredSkills = activeCategory === "All Skills"
    ? skills
    : skills.filter(({ category }) => category === activeCategory);

  return (
    <>
      <div className="stack-filters" role="group" aria-label="Filter skills by category">
        {categories.map(({ name, icon: Icon }) => (
          <button
            key={name}
            type="button"
            className="stack-filter"
            aria-pressed={activeCategory === name}
            onClick={() => setActiveCategory(name)}
          >
            <Icon size={14} aria-hidden="true" />
            {name}
          </button>
        ))}
      </div>
      <ul className="skill-list">
        {filteredSkills.map(({ name, icon: Icon, color }) => (
          <li key={name} className="skill">
            <Icon size={15} aria-hidden="true" style={{ color: color === "#000000" ? undefined : color }} />
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
