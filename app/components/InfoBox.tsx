import {
  MapPin,
  Clock,
  Mars,
  Globe,
  FileText,
} from "lucide-react";
import IconBox from "./ui/IconBox";
import CopyButton from "./ui/CopyButton";
import TimeClock from "./ui/Clock";

export default function InfoBox() {
  return (
    <>
      <div className="innerContainer px-5 py-6 sm:px-8 font2 grid grid-cols-1 gap-6 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] text-sm">
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex min-w-0 items-center gap-2 group">
            <a
              href="mailto:sahoospsatwik@gmail.com?subject=Let's connect&body=Hi Satwik,"
              className="min-w-0 break-all hover:underline"
            >
              sahoospsatwik@gmail.com
            </a>
            <CopyButton text="sahoospsatwik@gmail.com" />
          </div>


          <div className="flex items-center gap-2">
            <IconBox>
              <MapPin className="size-3.5" />
            </IconBox>
            <span>
              Bhubaneswar, India
            </span>
          </div>

          <div className="flex items-center gap-2">
            <IconBox>
              <Clock className="size-3.5" />
            </IconBox>
            <div className="hover:underline">
              <TimeClock />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center sm:items-start">
          <div className="flex items-center gap-2 relative">
            <IconBox>
              <FileText className="size-3.5" />
            </IconBox>
            <a href="https://resumelink.co/satwiksps" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Resume
            </a>
          </div>
          <div className="flex items-center gap-2">
            <IconBox>
              <Mars className="size-3.5" />
            </IconBox>
            <h3>He/him</h3>
          </div>

          <div className="flex items-center gap-2">
            <IconBox>
              <Globe className="size-3.5" />
            </IconBox>
            <a href="https://www.satwiksps.site" target="_blank" rel="noopener noreferrer" className="hover:underline">
              satwiksps.site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
