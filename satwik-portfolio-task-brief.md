# Task: Build `satwik-portfolio/` from `portfolio-template/`

## How to work
1. Copy the entire contents of `portfolio-template/` into `satwik-portfolio/` (create the folder if it doesn't exist). Do **not** modify `portfolio-template/` — treat it as read-only reference.
2. Before editing, explore the copied codebase to find the exact component/file responsible for each section below. Where possible I've given a text string to grep for so you can locate the right file quickly.
3. Apply every change listed below inside `satwik-portfolio/` only.
4. After all edits, run the dev server and confirm it builds/starts with no console errors, and that every link opens the correct URL.

---

## 1. Identity & Social Links
Replace all placeholder name/handle/links throughout the site with:

| Field | Value |
|---|---|
| Full name | Satwik Sai Prakash Sahoo |
| LinkedIn | https://www.linkedin.com/in/satwiksps/ |
| GitHub | https://github.com/satwiksps |
| X (Twitter) | https://x.com/satwiksps |
| Codeforces | https://codeforces.com/profile/satwiksps |
| LeetCode | https://leetcode.com/u/satwiksps/ |

## 2. Social Links Grid: 4 boxes → 5 boxes
Find the component rendering the "connect" links as a grid of boxes (currently 4: likely LinkedIn/GitHub/X/LeetCode). Update the grid to 5 columns (e.g. `grid-cols-4` → `grid-cols-5`, adjust responsive breakpoints so it doesn't overflow on mobile — collapse to 2 or 3 columns on small screens) and add a 5th box for **Codeforces**, using the link from section 1.

## 3. Hero Rotating Role Text
Find the typing/rotating-text component in the hero (currently cycles through roles like "Full Stack Engineer" etc.). Replace the role list with exactly these four, in this order, looping:
1. AI/ML Engineer
2. DevOps Engineer
3. Forward Deployed Engineer
4. Data Engineer

## 4. Hero Tagline Text
Grep for the class string `text-3xl text-zinc-50 font-medium`. This element's **text content** (not its classes) should be replaced with:
```
design(); build(); automate();
```
Keep all existing classes/styling untouched — only the displayed text changes.

## 5. Top Navigation
Current: `Home  Projects  Blog`
New: `Home  Experience  Projects  Publications  Blog`

Add matching anchors/routes/sections for **Experience** (section 6) and **Publications** (section 9) if they don't already exist.

## 6. Remove "About" → Add "Experience" Section
Delete the About section entirely. In the same nav position, add an **Experience** section with a company/program logo next to each entry:

**Google Summer of Code — NumFOCUS**
Software Developer · May 2, 2026 – Present
- Designed a zero-downtime migration strategy that intercepts legacy API calls and routes them to a new Builder backend with targeted FutureWarning deprecations, cutting irrelevant parameters by 70%.
- Built a streaming-ready data preprocessing seam by decoupling z-score computation from model instantiation, reducing initialization memory complexity from O(N) to O(1), enabling out-of-core training for massive datasets.
- Overhauled the CI pipeline with 30+ rewritten unit tests featuring rigorous tensor shape assertions and neural network wiring validation, ensuring stability across 60+ test runs per commit.

**IBM — Qiskit Advocate Mentorship Program**
Contributor · October 2, 2025 – January 2026
- Built QuDET 2, a Python framework that consolidates ML pipeline infrastructure into reusable, configurable modules, reducing per-pipeline setup overhead by 89% and standardizing deployment across teams.
- Developed a pluggable data governance layer with AES-128 encryption, role-based access control, automated audit logging, and statistical drift detection, reducing governance-related infrastructure code by 87%.

**Amazon Machine Learning Summer School**
Mentee
- Selected among the top 3,000 candidates out of over 134,000+ applicants to receive a month-long mentorship from Amazon scientists on Machine Learning.
- Gained specialized knowledge in modern AI technologies, including Generative AI, Large Language Models (LLMs), and Deep Neural Networks.

> Note: source appropriate small logos for Google Summer of Code, IBM (Qiskit), and Amazon and place them in the project's logo/icon assets folder, referencing them next to each entry.

> Cleanup applied: the source notes contained stray "2" characters before several dates/titles (e.g. "NumFOCUS 2 May 2026", "Knight 2 title", "Pupil 2 rank") — these look like leftover footnote markers from a resume export and have been removed above/throughout this brief. Double-check against the original resume if you have it.

## 7. Projects — Feature Exactly 2
Replace/curate the projects section to feature only these two, each with its cover image:

**Mobius**
- Cover image: file named `mobius_cover_photo` (locate the actual file/extension in the project assets and wire it in)
- Description: An LLM-powered desktop automation agent featuring a visual node-based builder and a lightweight, localized execution engine — construct, test, and run reliable, steppable automation workflows seamlessly within your development environment.
- Link: https://github.com/satwiksps/mobius

**Tracelet**
- Cover image: file named `tracelet_cover_photo`
- Description: Inspect runtime traces, analyze prompt diffs, and track token heatmaps directly in your local code editor. Supports OpenTelemetry, LangSmith, and Langfuse.
- Link: https://github.com/satwiksps/tracelet

## 8. Tech Stack
Replace the stack/skills list with exactly:

Python, SQL, TypeScript, JavaScript, AWS, Microsoft Azure, Docker, Kubernetes, Git, Terraform, Jenkins, Prometheus, Grafana, Apache Spark, dbt, Apache Airflow, Snowflake, Databricks, Apache Kafka, PyTorch, Scikit-learn, Pandas, NumPy, Hugging Face, MLflow, Node.js, LangChain, TensorFlow, Qiskit, FastAPI

## 9. Education (new)
- **Odisha University of Technology and Research**, Bhubaneswar, Odisha — Bachelor of Technology in Electrical Engineering; CGPA: 8.00; 2023 – 2027
- **DAV Public School**, Pokhariput, Bhubaneswar, Odisha — CBSE Class XII (91.2%), 2021 – 2022; CBSE Class X (92.6%), 2019 – 2020

## 10. Blog Section — Feature Exactly 2 Posts
1. Cover image: `blog_1_how_i_got_selected` → link to https://dev.to/satwiksps/how-i-got-selected-for-gsoc-my-journey-with-sbi-56g5
2. Cover image: `blog_2_gsoc_community_bonding_period` → link to https://dev.to/satwiksps/gsoc-community-bonding-period-getting-ready-to-code-5hl9

Below these two, add a line/button: **"Read more blogs →"** linking to https://dev.to/satwiksps

## 11. Publications Section (new)
Add this as a new section (linked from nav item added in section 5):
- Image: `paper_pakdd_1` (long/full-width image, rendered above the text)
- Title: **Hybrid Quantum-MambaVision: A Quantum-enhanced State Space Model for Calibrated Mixed-type Wafer Defect Detection**
- Venue: Accepted at the Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD 2026), Hong Kong
- Note: To be published in Springer LNCS.

## 12. Accomplishments Section (new)
- Secured 2nd Place at a national-level hackathon organized by IIIT Nagpur in 2025.
- Achieved the LeetCode Knight title with a current rating of 1876, placing in the top 4.99% globally.
- Received the OUTR Merit Scholarship for maintaining a CGPA within the top 10% of college.
- Attained the Codeforces Pupil rank with a maximum rating of 1353.

---

## Image Assets Checklist
Locate these (folders/files provided separately) and wire each into the section noted above — copy them into the project's image/assets directory and update import paths rather than referencing an external folder:
- [ ] `mobius_cover_photo` → Projects → Mobius
- [ ] `tracelet_cover_photo` → Projects → Tracelet
- [ ] `blog_1_how_i_got_selected` → Blog post 1
- [ ] `blog_2_gsoc_community_bonding_period` → Blog post 2
- [ ] `paper_pakdd_1` → Publications
- [ ] Logos for GSoC / NumFOCUS, IBM (Qiskit), Amazon → Experience section

## Definition of Done
- [ ] `satwik-portfolio/` exists as a full copy of `portfolio-template/` with all edits above applied
- [ ] `portfolio-template/` left untouched
- [ ] All 5 social boxes render correctly and link out to the right URLs
- [ ] Nav shows: Home, Experience, Projects, Publications, Blog
- [ ] Hero rotates exactly the 4 new roles; tagline reads `design(); build(); automate();`
- [ ] About section is gone; Experience section shows all 3 entries with logos
- [ ] Only Mobius and Tracelet appear as featured projects, each with cover image + working GitHub link
- [ ] Tech stack list matches section 8 exactly
- [ ] Education section present with both entries
- [ ] Blog section shows exactly the 2 posts + "Read more blogs" link to dev.to profile
- [ ] Publications section shows PAKDD image, title, and venue/note
- [ ] Accomplishments section lists all 4 items
- [ ] No leftover template placeholder text/images anywhere
- [ ] Project builds/runs with no errors
