import Link from "next/link";
import { GitPullRequest, ArrowUpRight } from "lucide-react";

export default function OpenSourceSection() {
  const prs = [
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
      org: "sbi-dev/sbi",
      pr: "#1912",
      link: "https://github.com/sbi-dev/sbi/pull/1912",
      title: "Add MixedDensityEstimatorBuilder for MNLE and MNPE",
      label: "feature",
      impact: "Enabled hybrid mixed-data neural estimation"
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
      pr: "#1752",
      link: "https://github.com/sbi-dev/sbi/pull/1752",
      title: "Re-enable time-dependent z-scoring for Flow Matching",
      label: "bug",
      impact: "Restored critical time-variant scaling functionality"
    }
  ];

  const getLabelStyle = (label: string) => {
    switch (label) {
      case "bug":
        return "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20";
      case "feature":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20";
      case "refactor":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border border-zinc-500/20";
    }
  };

  return (
    <div className="w-full">
      <div className="innerContainer grid grid-cols-1 md:grid-cols-3">
        {prs.map((pr, idx) => (
          <Link
            href={pr.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className={`group flex flex-col justify-between p-4 sm:p-5 min-h-[6.5rem] hover-bg2 transition ease-in border-b md:border-r [&:nth-child(3n)]:md:border-r-0 [&:nth-last-child(-n+3)]:md:border-b-0 last:border-b-0`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text2 min-w-0">
                  <GitPullRequest size={14} className="shrink-0 text-zinc-400" />
                  <span className="truncate">{pr.org}</span>
                </div>
                <span className="font-semibold text-xs font-mono text1 shrink-0">{pr.pr}</span>
              </div>
              <h3 className="text-sm font-semibold text1 leading-snug group-hover:underline break-words line-clamp-2">
                <span className={`inline-block align-middle mr-2 mb-0.5 text-[9px] px-1.5 py-0.5 rounded-sm font-bold uppercase tracking-wider ${getLabelStyle(pr.label)}`}>
                  {pr.label}
                </span>
                {pr.title}
              </h3>
            </div>
            <div className="flex justify-between items-end mt-1.5 gap-3">
              <p className="text-xs text2 italic leading-relaxed">
                {pr.impact}
              </p>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:rotate-45 transition ease-in-out shrink-0 mb-0.5" />
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full border-t">
        <div className="innerContainer h-5 flex items-center justify-end px-4 py-4 mb-2">
          <h5 className="text-sm font2 tracking-tighter">
            <Link
              href={"https://github.com/search?q=is:pr+author:satwiksps+is:merged+is:public&type=pullrequests"}
              target="_blank"
              rel="noopener noreferrer"
              className="text1 underline flex items-center gap-1 transition-colors duration-200 hover:!text-red-400 dark:hover:!text-zinc-300"
            >
              View all contributions
              <ArrowUpRight size={14} />
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
