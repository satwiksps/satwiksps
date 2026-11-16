import Image from "next/image";
import banner from "../../public/images/profile-banner.png";

export default function HeroBanner() {
  return (
    <div className="profile-banner">
      <Image
        src={banner}
        alt="design() build() automate() · @satwiksps"
        fill
        unoptimized
        preload
        className="object-cover"
      />
    </div>
  );
}
