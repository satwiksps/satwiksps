import {
  Mail,
  Phone,
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
      <div className="innerContainer min-h-[25vh] p-4 py-6 font1 tracking-tighter grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex items-center gap-2 group">
            <IconBox>
              <Mail className="size-3.5" />
            </IconBox>
            <a
              href="mailto:sahoospsatwik@gmail.com?subject=Let's connect&body=Hi Satwik,"
              className="hover:underline"
            >
              sahoospsatwik@gmail.com
            </a>
            <CopyButton text="sahoospsatwik@gmail.com" />
          </div>


          <div className="flex items-center gap-2">
            <IconBox>
              <MapPin className="size-3.5" />
            </IconBox>
            <a
              href="#"
              className="hover:underline"
            >
              Bhubaneswar, India
            </a>
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

        <div className="flex flex-col gap-2 justify-center md:items-start mt-4 md:mt-0">
          <div className="flex items-center gap-2 relative">
            <IconBox>
              <FileText className="size-3.5" />
            </IconBox>
            <a href="#" className="hover:underline">
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
