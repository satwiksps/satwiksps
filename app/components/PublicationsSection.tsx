import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import lora from "../../public/images/paper-pakdd-lora.png";
import qca from "../../public/images/paper-pakdd-qca.png";
import architecture from "../../public/images/paper-pakdd-architecture.png";
import margin from "../../public/images/paper-margin-abstention.png";

export default function PublicationsSection() {
  return (
    <ul className="content-grid publication-grid">
      <li>
        <a href="https://arxiv.org/abs/2605.16404" target="_blank" rel="noopener noreferrer" className="content-card">
          <div className="publication-figure publication-figure-composite">
            <Image src={lora} alt="Low-rank adaptation diagram showing frozen weights and two trainable matrices" unoptimized />
            <Image src={qca} alt="Quantum channel attention circuit and gating workflow" unoptimized />
            <Image
              src={architecture}
              alt="Hybrid Quantum-MambaVision architecture from wafer map input through four processing stages and the quantum adapter"
              unoptimized
              className="publication-figure-wide"
            />
          </div>
          <div className="content-card-body publication-details">
            <h3 className="item-title">
              Hybrid Quantum-MambaVision: A Quantum-enhanced State Space Model for Calibrated Mixed-type Wafer Defect Detection
            </h3>
            <p className="item-meta">Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD 2026), Hong Kong</p>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </a>
      </li>
      <li>
        <a href="https://arxiv.org/abs/2611.00026" target="_blank" rel="noopener noreferrer" className="content-card">
          <div className="publication-figure">
            <Image
              src={margin}
              alt="Waterbirds examples comparing when margin and maximum-logit scores abstain, with group coverage results"
              unoptimized
            />
          </div>
          <div className="content-card-body publication-details">
            <h3 className="item-title">The Margin Knows the Background: Uneven Abstention in Frozen Vision-Language Models</h3>
            <p className="item-meta">Under Review at a Top Conference, Preprint Uploaded to arXiv</p>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </a>
      </li>
    </ul>
  );
}
