const stackIcons = [
  { name: "Python", slug: "python" },
  { name: "SQL", slug: "postgresql" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Microsoft Azure", slug: "microsoftazure" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Git", slug: "git" },
  { name: "Terraform", slug: "terraform" },
  { name: "Jenkins", slug: "jenkins" },
  { name: "Prometheus", slug: "prometheus" },
  { name: "Grafana", slug: "grafana" },
  { name: "Apache Spark", slug: "apachespark" },
  { name: "dbt", slug: "dbt" },
  { name: "Apache Airflow", slug: "apacheairflow" },
  { name: "Snowflake", slug: "snowflake" },
  { name: "Databricks", slug: "databricks" },
  { name: "Apache Kafka", slug: "apachekafka" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "Scikit-learn", slug: "scikitlearn" },
  { name: "Pandas", slug: "pandas" },
  { name: "NumPy", slug: "numpy" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "MLflow", slug: "mlflow" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "LangChain", slug: "langchain" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "Qiskit", slug: "qiskit" },
  { name: "FastAPI", slug: "fastapi" },
];

const needsBg = ["nextjs", "express", "cursor", "shadcn-ui", "github"];

export default function StackBox() {
  return (
    <div className="innerContainer p-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-6 place-items-center">
        {stackIcons.map((tech) => (
          <div key={tech.name} className="relative group">
            {/* Icon */}
            <div
              className={`
                size-11 flex items-center justify-center rounded-xl
                ${needsBg.includes(tech.slug) ? "dark:bg-white" : ""}
              `}
            >
              <img
                src={`/techstack/${tech.slug}.svg`}
                className="size-10 rounded-md object-contain"
                alt={tech.name}
              />
            </div>

            {/* Tooltip */}
            <div
              className="
  absolute -top-10 left-1/2 -translate-x-1/2
  opacity-0 group-hover:opacity-100
  transition-all duration-200
  pointer-events-none z-50
"
            >
              <div className="tooltip text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-md bg-zinc-800 text-white dark:bg-white dark:text-black">
                {tech.name}
              </div>

              <div className="tooltip-arrow w-2 h-2 rotate-45 absolute left-1/2 -translate-x-1/2 top-full -mt-1 bg-zinc-800 dark:bg-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
