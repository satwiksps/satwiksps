"use client";

import { useId, useState } from "react";
import {
  Boxes,
  Cloud,
  Code2,
  Database,
  Library,
  Search,
  Workflow,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";

type CategoryName =
  | "Languages"
  | "Frameworks"
  | "Tools"
  | "Concepts"
  | "Platforms"
  | "Databases"
  | "Libraries";

type SkillGroup = {
  name: CategoryName;
  icon: LucideIcon;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "Go (Golang)", "SQL", "JavaScript", "C/C++", "HTML", "CSS"],
  },
  {
    name: "Frameworks",
    icon: Boxes,
    skills: [
      "React.js", "FastAPI", "Next.js", "Vue.js", "PyTorch", "TensorFlow",
      "LangChain", "Gradio", "Spark", "OpenAI SDK", "Flask", "Django",
      "Express", "Bootstrap", "Tailwind",
    ],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: [
      "Docker", "Kubernetes", "Helm", "Git", "GitHub Actions", "pytest",
      "Terraform", "Ansible", "Prometheus", "Grafana", "Node.js", "Jest",
      "Postman", "Poetry",
    ],
  },
  {
    name: "Concepts",
    icon: Workflow,
    skills: [
      "Distributed Systems", "Cloud-Native", "Microservices", "RESTful APIs",
      "CI/CD", "Automated Testing", "Performance Optimization", "Monitoring",
      "Observability", "Telemetry", "Production Support", "Networking",
      "Security Best Practices", "Infrastructure as Code", "Design Patterns",
    ],
  },
  {
    name: "Platforms",
    icon: Cloud,
    skills: [
      "Microsoft Azure", "AWS (SageMaker, Bedrock, Step Functions, S3, EC2, Lambda)",
      "Azure DevOps", "Linux", "Vertex AI", "Kafka", "Azure Machine Learning",
      "Azure Data Factory", "Cloudflare", "E2E Cloud", "Databricks", "Hadoop",
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      "PostgreSQL", "MySQL", "DynamoDB", "Elasticsearch", "SQLite", "MongoDB",
      "Redis", "Pinecone", "Firebase", "Supabase", "FAISS", "Qdrant", "ChromaDB",
    ],
  },
  {
    name: "Libraries",
    icon: Library,
    skills: [
      "Transformers", "PEFT", "Bitsandbytes", "Diffusers", "Hugging Face Ecosystem",
      "NLTK", "Scapy", "OpenCV", "BeautifulSoup", "Selenium", "Pandas",
    ],
  },
];

export default function StackBox() {
  const [activeCategory, setActiveCategory] = useState<CategoryName | "All">("All");
  const [search, setSearch] = useState("");
  const searchId = useId();
  const resultsId = useId();
  const query = search.trim().toLowerCase();
  const visibleGroups = skillGroups
    .filter((group) => activeCategory === "All" || group.name === activeCategory)
    .map((group) => ({
      ...group,
      skills: group.skills.filter((skill) =>
        `${group.name} ${skill}`.toLowerCase().includes(query),
      ),
    }))
    .filter((group) => group.skills.length > 0);
  const visibleCount = visibleGroups.reduce((count, group) => count + group.skills.length, 0);

  return (
    <div className="innerContainer px-5 py-6 sm:px-8 sm:py-8">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text2 text-sm leading-relaxed">The tools behind the things I build.</p>
        <div className="relative w-full sm:w-56">
          <label className="sr-only" htmlFor={searchId}>Search skills</label>
          <Search aria-hidden="true" size={15} className="text2 pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id={searchId}
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Find a skill…"
            aria-controls={resultsId}
            className="bg1 text1 h-11 w-full rounded-xl border border-[var(--border)] pl-9 pr-11 text-base outline-none transition-colors placeholder:text-[var(--text2)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)] sm:text-sm [&::-webkit-search-cancel-button]:appearance-none"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear skill search"
              className="text2 absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-xl transition-colors hover:text-[var(--text1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <X aria-hidden="true" size={15} />
            </button>
          )}
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter skills by category">
        {(["All", ...skillGroups.map((group) => group.name)] as const).map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              aria-controls={resultsId}
              className={`min-h-11 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                  : "text2 border-[var(--border)] bg-[var(--bg1)] hover:bg-[var(--bg2)] hover:text-[var(--text1)]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="sr-only" role="status">{visibleCount} skills in {visibleGroups.length} categories.</p>
      <div id={resultsId} className="space-y-5">
        {visibleGroups.map(({ name, icon: Icon, skills }) => (
          <section key={name} aria-label={`${name} skills`} className="grid gap-3 border-b border-[var(--border)] pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-5">
            <div className="flex items-center gap-2 self-start sm:pt-1.5">
              <Icon size={15} aria-hidden="true" className="shrink-0 text-[var(--accent)]" />
              <h3 className="text1 text-sm font-medium">{name}</h3>
            </div>
            <ul className="flex min-w-0 flex-wrap gap-1.5">
              {skills.map((skill) => (
                <li key={skill} className="text1 max-w-full rounded-lg border border-[var(--border)] bg-[var(--bg1)] px-2.5 py-1.5 text-xs leading-relaxed transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]">
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
        {visibleCount === 0 && (
          <div className="rounded-2xl border border-dashed border-[var(--border)] px-5 py-10 text-center">
            <p className="text1 text-sm">No matching skills here.</p>
            <button
              type="button"
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="mt-3 min-h-11 rounded-lg px-3 text-sm text-[var(--accent)] underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Show all skills
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
