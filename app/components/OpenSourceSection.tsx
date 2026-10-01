import Link from "next/link";
import { GitPullRequest, ArrowUpRight } from "lucide-react";

export default function OpenSourceSection() {
  const prs = [
    {
      org: "podman-container-tools/podman",
      pr: "#29290",
      link: "https://github.com/podman-container-tools/podman/pull/29290",
      title: "Restored farm testing in GitHub Actions",
      label: "CI/CD",
      impact: "Re-enabled rootless farm tests after the CI migration, adding workflow filters, API socket setup, and portable home-directory handling.",
      featured: true,
    },
    {
      org: "podman-container-tools/podman",
      pr: "#29289",
      link: "https://github.com/podman-container-tools/podman/pull/29289",
      title: "Fixed OpenAPI model collisions",
      label: "API tooling",
      impact: "Replaced deprecated Swagger aliases and disambiguated Go model names, resolving nine OpenAPI generation warnings.",
      featured: true,
    },
    {
      org: "podman-container-tools/podman",
      pr: "#29297",
      link: "https://github.com/podman-container-tools/podman/pull/29297",
      title: "Stabilized cgroup integration tests",
      label: "testing",
      impact: "Fixed intermittent cgroups=split test failures with explicit systemd delegation so child cgroups receive the required controllers.",
      featured: true,
    },
    {
      org: "flatcar/baselayout",
      pr: "#44",
      link: "https://github.com/flatcar/baselayout/pull/44",
      title: "Fixed Flatcar network-file compatibility",
      label: "Linux",
      impact: "Restored four missing /etc network database paths for static binaries and Kubernetes hostPath consumers, preserving custom files.",
      featured: true,
    },
    {
      org: "sbi-dev/sbi",
      pr: "#1749",
      link: "https://github.com/sbi-dev/sbi/pull/1749",
      title: "Fix memory bloat in multi-round inference",
      label: "bug",
      impact: "Resolved OOM issues during long simulations"
    },
    {
      org: "sbi-dev/sbi",
      pr: "#1705",
      link: "https://github.com/sbi-dev/sbi/pull/1705",
      title: "Add max_sampling_time support to rejection samplers",
      label: "feature",
      impact: "Prevented infinite loops during rare event sampling"
    },
    {
      org: "aeon-toolkit/aeon",
      pr: "#3115",
      link: "https://github.com/aeon-toolkit/aeon/pull/3115",
      title: "Add exogenous variable support to ARIMA",
      label: "feature",
      impact: "Enabled multidimensional forecasting models natively"
    },
    {
      org: "sbi-dev/sbi",
      pr: "#1707",
      link: "https://github.com/sbi-dev/sbi/pull/1707",
      title: "Fix device mismatch in NPSE marginal mean/std",
      label: "bug",
      impact: "Fixed critical crash on multi-GPU setups"
    },
    {
      org: "sbi-dev/sbi",
      pr: "#1791",
      link: "https://github.com/sbi-dev/sbi/pull/1791",
      title: "Support shape broadcasting in density estimators",
      label: "feature",
      impact: "Allowed flexible batched tensor processing natively"
    },
    {
      org: "sbi-dev/sbi",
      pr: "#1877",
      link: "https://github.com/sbi-dev/sbi/pull/1877",
      title: "Add DensityEstimatorBuilder with build() dispatch",
      label: "refactor",
      impact: "Standardized API and decoupled initialization logic"
    },
    {
      org: "aeon-toolkit/aeon",
      pr: "#3116",
      link: "https://github.com/aeon-toolkit/aeon/pull/3116",
      title: "Fix zero-distance instability in Hidalgo",
      label: "bug",
      impact: "Resolved division-by-zero numerical instability"
    }
  ];

  const getLabelStyle = (label: string) => {
    switch (label) {
      case "bug":
        return "bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20";
      case "feature":
        return "bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border border-emerald-500/20";
      case "refactor":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/20";
    }
  };

  return (
    <div className="w-full">
      <div className="innerContainer grid grid-cols-1 gap-3 p-4 sm:p-5 md:grid-cols-2">
        {prs.map((pr) => (
          <Link
            href={pr.link}
            target="_blank"
            rel="noopener noreferrer"
            key={pr.link}
            className={`group flex min-w-0 flex-col rounded-xl border p-4 transition-colors duration-200 hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:p-5 ${
              pr.featured
                ? "border-emerald-600/20 bg-[var(--accent-soft)]"
                : "bg1 hover-bg2"
            }`}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-start gap-2 font-mono text-xs leading-5 text2">
                <GitPullRequest size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <span className="[overflow-wrap:anywhere]">{pr.org}</span>
              </div>
              <ArrowUpRight size={18} aria-hidden="true" className="shrink-0 text2 transition-transform duration-200 group-hover:text-[var(--accent)] motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
            </div>
            <h3 className="text-base font-semibold leading-snug text1 [overflow-wrap:anywhere] group-hover:text-[var(--accent)]">
              {pr.title}
            </h3>
            <p className="mt-2 mb-5 text-sm leading-6 text2">
              {pr.impact}
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-2">
              <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${getLabelStyle(pr.label)}`}>
                {pr.label}
              </span>
              {pr.featured && (
                <span className="text-xs font-medium text-[var(--accent)]">Merged</span>
              )}
              <span className="ml-auto font-mono text-xs text2">{pr.pr}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full border-t">
        <div className="innerContainer flex items-center justify-end px-4 py-3 sm:px-5">
          <Link
            href={"https://github.com/search?q=is:pr+author:satwiksps+is:merged+is:public&type=pullrequests"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-medium text1 underline decoration-[var(--accent)] underline-offset-4 transition-colors duration-200 hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            View all contributions
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
