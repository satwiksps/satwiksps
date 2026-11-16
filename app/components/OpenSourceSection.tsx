import Link from "next/link";
import { GitPullRequest, ArrowUpRight } from "lucide-react";

const mergedPullRequestsQuery = "is:pr author:satwiksps is:merged is:public";
const contributionsSearch = new URLSearchParams({ q: mergedPullRequestsQuery, type: "pullrequests" });

async function getMergedContributionCount() {
  const params = new URLSearchParams({ q: mergedPullRequestsQuery, per_page: "1" });

  try {
    const response = await fetch(`https://api.github.com/search/issues?${params}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(3500),
    });

    if (!response.ok) return null;

    const { total_count, incomplete_results } = await response.json();
    return incomplete_results === false && Number.isSafeInteger(total_count) && total_count >= 0
      ? total_count as number
      : null;
  } catch {
    return null;
  }
}

export default async function OpenSourceSection() {
  const mergedCount = await getMergedContributionCount();
  const contributionLabel = mergedCount === null
    ? "View all contributions"
    : `View all ${mergedCount.toLocaleString("en")} contributions`;

  // Interleave repositories so matching entries have space between them.
  const prs = [
    {
      org: "UrumiAI/otta.sh",
      pr: "#523",
      link: "https://github.com/UrumiAI/otta.sh/pull/523",
      title: "Guard cron type compatibility",
      label: "Type safety",
      impact: "Exported the host cron type and added compile-time checks for the plugin’s cron interface.",
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
      org: "podman-container-tools/podman",
      pr: "#29290",
      link: "https://github.com/podman-container-tools/podman/pull/29290",
      title: "Restored farm testing in GitHub Actions",
      label: "CI/CD",
      impact: "Re-enabled rootless farm tests after the CI migration, adding workflow filters, API socket setup, and portable home-directory handling.",
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
      org: "flatcar/baselayout",
      pr: "#44",
      link: "https://github.com/flatcar/baselayout/pull/44",
      title: "Fixed Flatcar network-file compatibility",
      label: "Linux",
      impact: "Restored four missing /etc network database paths for static binaries and Kubernetes hostPath consumers, preserving custom files.",
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
      org: "podman-container-tools/podman",
      pr: "#29289",
      link: "https://github.com/podman-container-tools/podman/pull/29289",
      title: "Fixed OpenAPI model collisions",
      label: "API tooling",
      impact: "Replaced deprecated Swagger aliases and disambiguated Go model names, resolving nine OpenAPI generation warnings.",
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
      org: "aeon-toolkit/aeon",
      pr: "#3116",
      link: "https://github.com/aeon-toolkit/aeon/pull/3116",
      title: "Fix zero-distance instability in Hidalgo",
      label: "bug",
      impact: "Resolved division-by-zero numerical instability"
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
      org: "podman-container-tools/podman",
      pr: "#29297",
      link: "https://github.com/podman-container-tools/podman/pull/29297",
      title: "Stabilized cgroup integration tests",
      label: "testing",
      impact: "Fixed intermittent cgroups=split test failures with explicit systemd delegation so child cgroups receive the required controllers.",
    },
    {
      org: "sbi-dev/sbi",
      pr: "#1877",
      link: "https://github.com/sbi-dev/sbi/pull/1877",
      title: "Add DensityEstimatorBuilder with build() dispatch",
      label: "refactor",
      impact: "Standardized API and decoupled initialization logic"
    },
  ];

  return (
    <>
      <ul className="content-grid contribution-grid">
        {prs.map(({ org, pr, link, title, label, impact }) => (
          <li key={link}>
            <Link href={link} target="_blank" rel="noopener noreferrer" className="content-card content-card-body contribution-card">
              <p className="item-meta contribution-repo">
                <GitPullRequest size={14} aria-hidden="true" />
                <span>{org}</span>
                <span className="contribution-number">{pr}</span>
              </p>
              <h3 className="item-title">{title}</h3>
              <p className="contribution-impact">{impact} <span className="item-meta">· {label}</span></p>
            </Link>
          </li>
        ))}
      </ul>
      <a
        href={`https://github.com/search?${contributionsSearch}`}
        target="_blank"
        rel="noopener noreferrer"
        className="section-action"
      >
        {contributionLabel} <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </>
  );
}
