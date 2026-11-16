import harborCover from "../../public/images/harbor-social-card.png";
import organizationsCover from "../../public/images/openorganizations-social-card.jpg";
import qudetCover from "../../public/images/qudet-social-card.png";
import rigsolveCover from "../../public/images/rigsolve-social-card.png";
import scaffoldscopeCover from "../../public/images/scaffoldscope-social-card.png";
import steadlithCover from "../../public/images/steadlith-social-card.png";
import streamweldCover from "../../public/images/streamweld-social-card.png";
import testsealCover from "../../public/images/testseal-social-card.png";
import type { ProjectData } from "../types/Project.types";

export const projects: ProjectData[] = [
  {
    slug: "testseal",
    heading: "TestSeal",
    subheading: "Test integrity and CI analyzer",
    summary: "Caught 98.3% of seeded changes that weakened tests.",
    image: testsealCover,
    alt: "TestSeal social card comparing a strong assertion with a weakened one",
    description: "A passing build can hide a test that was made easier to pass. TestSeal flags weakened checks in Python pull requests so reviewers can see which guarantees a change removes.",
    implementation: [
      "I matched Python syntax trees across Git revisions at the level of individual tests. That lets the analyzer detect a replaced assertion or disabled test even when the assertion count stays the same. It reads source and Git data locally without importing the target project.",
      "I scoped Git reads to the files needed for comparison and integrated the analyzer with pre-commit and GitHub Actions. CI findings point to the affected code, giving reviewers a concrete change to inspect.",
    ],
    results: [
      {
        value: "98.3%",
        label: "of seeded weakenings detected",
        context: "Measured on deliberate changes to test files, including disabled tests and assertion replacements.",
      },
      {
        value: "51.6%",
        label: "fewer Git subprocess launches",
        context: "Compared with a baseline that loaded every changed file.",
      },
      {
        value: "0.62 s",
        label: "median time for annotated feedback",
        context: "Measured locally on historical diffs with the GitHub Actions reporting path.",
      },
    ],
    tech: ["Python", "Node.js", "Git", "pytest", "GitHub Actions", "pre-commit"],
    links: [
      { label: "Website", href: "https://testseal-integrity.vercel.app/" },
      { label: "PyPI", href: "https://pypi.org/project/testseal/" },
      { label: "GitHub", href: "https://github.com/satwiksps/testseal" },
    ],
  },
  {
    slug: "streamweld",
    heading: "Streamweld",
    subheading: "Durable LLM streaming proxy",
    summary: "79.9 ms median stream resume time in local tests.",
    image: streamweldCover,
    alt: "Streamweld social card showing a disconnected reader resuming from the last event",
    description: "A network drop or deployment can interrupt a long model response. Streamweld lets clients reconnect to an OpenAI-compatible stream and pick up at the last event they received, even through a different proxy replica.",
    implementation: [
      "I built the Go proxy around a Redis event journal and server-sent event cursors. An atomic idempotency check makes concurrent retries share one generation, saving inference work when requests arrive together.",
      "I packaged the proxy for Docker and Kubernetes with Helm, published a TypeScript client, and built a React project site with keyboard navigation and focus management.",
    ],
    results: [
      {
        value: "79.9 ms",
        label: "median resume latency",
        context: "Measured from the resume request to the next content during local CPU inference.",
      },
      {
        value: "96.9%",
        label: "fewer backend generation calls",
        context: "Compared with requests without idempotency keys in local retry-burst benchmarks.",
      },
    ],
    tech: ["Go", "TypeScript", "Redis", "Docker", "Kubernetes", "Helm", "React", "Terraform"],
    links: [
      { label: "Website", href: "https://streamweld.vercel.app/" },
      { label: "npm", href: "https://www.npmjs.com/package/@streamweld/client" },
      { label: "GitHub", href: "https://github.com/satwiksps/streamweld" },
    ],
  },
  {
    slug: "steadlith",
    heading: "Steadlith",
    subheading: "Incremental RAG indexer",
    summary: "Cut median index refresh time from 5.76 s to 1.69 s.",
    image: steadlithCover,
    alt: "Steadlith social card illustrating the reuse of unchanged chunks",
    description: "A small documentation edit can shift fixed chunk boundaries and make a retrieval index re-embed text that never changed. Steadlith keeps chunk identities stable across edits and refreshes only the parts of the index that need new work.",
    implementation: [
      "I used Rabin fingerprinting to find boundaries based on the text itself, then keyed the embedding cache by content. The index can reuse an embedding when an unchanged passage moves to a different offset.",
      "I built a plan-and-apply workflow with atomic SQLite snapshots. Readers see a consistent version of the document index while updates add changed chunks and retire old ones.",
    ],
    results: [
      {
        value: "31.8%",
        label: "less text sent for re-embedding",
        context: "Compared with fixed-size chunking on the bundled edit benchmark.",
      },
      {
        value: "5.76 s → 1.69 s",
        label: "median index refresh time",
        context: "Compared with full-document re-embedding on real documentation edits using a preloaded MiniLM model on CPU.",
      },
    ],
    tech: ["Python", "SQLite", "OpenAI SDK", "Transformers", "TypeScript", "pytest"],
    links: [
      { label: "Website", href: "https://steadlith.vercel.app/" },
      { label: "PyPI", href: "https://pypi.org/project/steadlith/" },
      { label: "GitHub", href: "https://github.com/satwiksps/steadlith" },
    ],
  },
  {
    slug: "scaffoldscope",
    heading: "ScaffoldScope",
    subheading: "Coding-agent evaluation harness",
    summary: "Cut trial runtime by 45.8% in a local benchmark.",
    image: scaffoldscopeCover,
    alt: "ScaffoldScope social card comparing two trials with the same task, model and budget",
    description: "Coding-agent experiments are hard to interpret when the model, tasks and tools all change together. ScaffoldScope runs paired trials that isolate a harness decision and records enough evidence to review how each agent reached its result.",
    implementation: [
      "I built a trial scheduler that holds the model, task set, evaluator and budget fixed across comparisons. Parallel workers have separate workspaces, with traces and patches recorded per trial so an experiment can resume and its results can be audited.",
      "I implemented context compaction as a knapsack problem. It selects whole action-and-result pairs that fit the prompt budget, so the model still sees what each retained action produced. The audit log retains the full history.",
    ],
    results: [
      {
        value: "45.8%",
        label: "lower median execution time",
        context: "Compared with serial execution on a local scripted benchmark.",
      },
      {
        value: "61.4%",
        label: "fewer context text tokens",
        context: "Compared with replaying the full history on local code-reading traces.",
      },
    ],
    tech: ["Python", "Docker", "Git", "pytest", "GitHub Actions"],
    links: [
      { label: "Website", href: "https://scaffoldscope.vercel.app/" },
      { label: "PyPI", href: "https://pypi.org/project/scaffoldscope/" },
      { label: "GitHub", href: "https://github.com/satwiksps/scaffoldscope" },
    ],
  },
  {
    slug: "harbor",
    heading: "Harbor",
    subheading: "WooCommerce MCP gateway",
    summary: "Cut tool-definition payload by 98.3% in a 500-tool test.",
    image: harborCover,
    alt: "Harbor social card showing chat and MCP clients reaching WooCommerce products and orders through the gateway",
    description: "Store teams need AI tools that respect account permissions and let people review changes. Harbor connects WooCommerce to Gemini and other MCP clients through one gateway, with per-user keys, scoped access and a record of tool actions.",
    implementation: [
      "I built the FastAPI gateway and React console. Gemini can discover tools as needed and retrieve complete schemas for the tools it uses. The gateway checks permissions, and administrators can review proposed store writes in the console.",
      "I reused Python workers to validate tools without restarting a process for each request. I also split the dashboard build and runtime into separate Docker stages for the Helm deployment on Oracle Cloud.",
    ],
    results: [
      {
        value: "98.3%",
        label: "smaller tool-definition payload",
        context: "Measured across 500 synthetic tools with full schemas still available on demand.",
      },
      {
        value: "90.9%",
        label: "lower median tool validation time",
        context: "Measured after switching to reusable Python workers.",
      },
      {
        value: "81.4%",
        label: "smaller dashboard image",
        context: "Measured before and after moving to a multi-stage Docker build.",
      },
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Docker", "Helm"],
    links: [
      { label: "Console", href: "https://harbor.satwiksps.site/" },
      { label: "Sample store", href: "https://store.harbor.satwiksps.site/" },
      { label: "GitHub", href: "https://github.com/satwiksps/harbor" },
    ],
  },
  {
    slug: "rigsolve",
    heading: "Rigsolve",
    subheading: "GPU compatibility resolver",
    summary: "Same optimal plan with 92.2% fewer checks in a benchmark.",
    image: rigsolveCover,
    alt: "Rigsolve social card showing PyTorch, CUDA and a native extension resolved into one install plan",
    description: "A PyTorch wheel, CUDA runtime and native extension can each install successfully and still fail together. Rigsolve checks the constraints as one system and produces an install or repair plan with reasons for the versions it picks.",
    implementation: [
      "I built an offline-first Python resolver that profiles the machine without importing PyTorch. It uses constraint propagation to eliminate incompatible combinations early and records the compatibility evidence behind its plan.",
      "I added a repair mode that prioritizes keeping working packages. It looks for the smallest set of changes that restores compatibility, which is useful when an environment already depends on an installed PyTorch family.",
    ],
    results: [
      {
        value: "92.2%",
        label: "fewer constraint evaluations",
        context: "Compared with exhaustive search on a four-package benchmark, with the same optimal assignment.",
      },
      {
        value: "75%",
        label: "fewer planned package changes",
        context: "Compared with selecting the newest versions for a C++ ABI repair, with the installed PyTorch family preserved.",
      },
    ],
    tech: ["Python", "PyTorch", "CUDA", "pytest", "GitHub Actions"],
    links: [
      { label: "Website", href: "https://rigsolve.vercel.app/" },
      { label: "PyPI", href: "https://pypi.org/project/rigsolve/" },
      { label: "GitHub", href: "https://github.com/satwiksps/rigsolve" },
    ],
  },
  {
    slug: "openorganizations",
    heading: "OpenOrganizations",
    subheading: "Open-source community directory",
    summary: "Made listings 90.9% smaller while preserving program history.",
    image: organizationsCover,
    alt: "OpenOrganizations social card previewing the searchable directory for open-source programs",
    description: "Finding an open-source community often means piecing together old program listings and proposals. OpenOrganizations gives prospective contributors one place to explore communities, compare their participation history and find public proposals across programs such as GSoC, LFX and Outreachy.",
    implementation: [
      "I built the React and Gatsby directory around compact listing records. Search and browsing retain the details people need to shortlist an organization, including project counts and program history, without loading the full record for every listing.",
      "I wrote a Node.js pipeline that reconciles names, aliases and websites across datasets. It joins records that describe the same organization and preserves separate communities whose repositories happen to share a host.",
    ],
    results: [
      {
        value: "90.9%",
        label: "smaller gzipped listing data",
        context: "Compared with delivering full organization records for the listing.",
      },
      {
        value: "67.1%",
        label: "fewer organization rows",
        context: "Measured after reconciling duplicate records across datasets while retaining program history.",
      },
    ],
    tech: ["React", "Gatsby", "Node.js", "JavaScript"],
    links: [
      { label: "Website", href: "https://openorganizations.site/" },
      { label: "GitHub", href: "https://github.com/satwiksps/openorganizations" },
    ],
  },
  {
    slug: "qudet",
    heading: "QuDET",
    subheading: "Quantum data engineering toolkit",
    summary: "Used 98.46% fewer state preparations in a simulator benchmark.",
    image: qudetCover,
    alt: "QuDET social card showing tabular data encoded into quantum circuits",
    description: "QuDET makes it easier to put quantum encoders and models into familiar Python ML workflows. I developed it during the IBM Qiskit Advocate Mentorship Program to bridge tabular data processing, Qiskit execution and scikit-learn-style pipelines.",
    implementation: [
      "I used scikit-learn conventions for fitting and transforming data so quantum steps can sit alongside existing preprocessing and estimators. Reusing simulated states avoids preparing the same states repeatedly in comparisons.",
      "I also streamed circuit batches from pandas into Qiskit. The pipeline processes every row without keeping all of the encoded circuits in memory at once.",
    ],
    results: [
      {
        value: "98.46%",
        label: "fewer simulated state preparations",
        context: "Compared with repeated simulation on a 64-sample benchmark.",
      },
      {
        value: "85.06%",
        label: "lower peak Python-tracked memory",
        context: "Measured on 8,192 rows against retaining every encoded circuit in memory.",
      },
    ],
    tech: ["Python", "Qiskit", "scikit-learn", "pandas", "NumPy", "pytest"],
    links: [
      { label: "PyPI", href: "https://pypi.org/project/qudet/" },
      { label: "GitHub", href: "https://github.com/satwiksps/qudet-dev" },
    ],
  },
];
