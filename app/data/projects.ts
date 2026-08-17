import type { ProjectData } from "../types/Project.types";

export const projects: ProjectData[] = [
  {
    slug: "rigsolve",
    heading: "rigsolve",
    subheading: "Explainable GPU Stack Compatibility Resolver",
    image: "/images/rigsolve-social-card.png",
    alt: "rigsolve compatibility resolver preview",
    description:
      "An offline-first compatibility resolver for PyTorch, CUDA, and native GPU extensions. It profiles a machine without importing torch, evaluates the relevant constraints together, and produces a sourced install or repair plan.",
    tech: ["Python", "PyTorch", "CUDA", "Constraint Solving"],
    filler: "turning GPU dependency conflicts into explainable, reproducible plans.",
    features: [
      "Detects GPU, driver, toolkit, Python, and installed-package constraints",
      "Produces deterministic install, repair, lockfile, and container plans",
      "Explains conflicts using versioned compatibility evidence"
    ],
    links: {
      live: "https://rigsolve.vercel.app",
      github: "https://github.com/satwiksps/rigsolve",
    },
  },
  {
    slug: "scaffoldscope",
    heading: "ScaffoldScope",
    subheading: "Controlled Experiments for Coding-Agent Harnesses",
    image: "/images/scaffoldscope-social-card.png",
    alt: "ScaffoldScope coding-agent experiment preview",
    description:
      "A reproducible experiment runner for measuring how coding-agent harness choices affect solve rate, token use, cost, and constraint retention while holding the model, tasks, evaluator, and budget fixed.",
    tech: ["Python", "AI Agents", "SWE-bench", "Docker"],
    filler: "making agent-scaffold comparisons controlled and reviewable.",
    features: [
      "Runs paired scaffold treatments under fixed experimental conditions",
      "Captures durable traces, metrics, patches, and evidence bundles",
      "Supports local evaluation, Docker isolation, and SWE-bench exports"
    ],
    links: {
      live: "https://scaffoldscope.vercel.app",
      github: "https://github.com/satwiksps/scaffoldscope",
    },
  },
  {
    slug: "testseal",
    heading: "TestSeal",
    subheading: "Deterministic Test-Integrity Checks for Python Diffs",
    image: "/images/testseal-social-card.png",
    alt: "TestSeal test-integrity checker preview",
    description:
      "A deterministic, offline analyzer that compares tests before and after a change and reports concrete weakening signals such as removed assertions, disabled tests, wider tolerances, swallowed exceptions, and suspicious mocks.",
    tech: ["Python", "pytest", "Static Analysis", "SARIF"],
    filler: "giving teams a reproducible signal when a green suite becomes easier to pass.",
    features: [
      "Detects test weakening across before-and-after Python syntax",
      "Runs without importing or executing the repository being scanned",
      "Integrates with pre-commit and GitHub Actions using text, JSON, and SARIF"
    ],
    links: {
      live: "https://testseal-integrity.vercel.app",
      github: "https://github.com/satwiksps/testseal",
    },
  },
  {
    slug: "steadlith",
    heading: "Steadlith",
    subheading: "Stable Incremental Indexing for Changing RAG Corpora",
    image: "/images/steadlith-social-card.jpg",
    alt: "Steadlith incremental RAG indexing preview",
    description:
      "A Python toolkit for stable, incremental RAG indexing that combines content-defined chunking, content-addressed identities, cache-aware planning, and transactional indexing so small edits produce small index updates.",
    tech: ["Python", "RAG", "SQLite", "Content-Defined Chunking"],
    filler: "reusing unchanged chunks and embeddings across evolving document collections.",
    features: [
      "Plans chunk additions, moves, keeps, and deletions before applying changes",
      "Reuses embeddings through stable content identities and a transactional cache",
      "Includes deterministic benchmarks for chunk churn and retrieval quality"
    ],
    links: {
      live: "https://steadlith.vercel.app",
      github: "https://github.com/satwiksps/steadlith",
    },
  }
];
