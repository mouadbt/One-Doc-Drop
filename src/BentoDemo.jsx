import React from "react";
import {
  Share1Icon,
  Link2Icon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { File } from "lucide-react";

const features = [
  {
    Icon: File,
    name: "Open Google Docs",
    description:
      "Navigate to Google Docs and open the document you want to download.",
    href: "https://docs.google.com",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="/One-Doc-Drop/First-step.png"
        className="absolute -right-0 -top-0 opacity-60 w-full h-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:blur-[1px] "
      />
    ),
  },
  {
    Icon: Share1Icon,
    name: "Click Share Button",
    description:
      "Click the blue 'Share' button in the top-right corner of your Google Doc.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/One-Doc-Drop/Second-step.png"
        className="absolute -right-0 -top-0 opacity-60 w-full  group-hover:scale-110 transition-all duration-300 group-hover:blur-[1px] "
      />
    ),
  },
  {
    Icon: Link2Icon,
    name: "Copy Document Link",
    description:
      "In the sharing dialog, click 'Copy link' to get your document's URL.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/One-Doc-Drop/Third-step.png"
        className="absolute -right-0 -top-16 opacity-60 w-full group-hover:scale-110 transition-all duration-300 group-hover:blur-[1px]"
      />
    ),
  },
  {
    Icon: DownloadIcon,
    name: "Download Your File",
    description:
      "Paste the link above, select your preferred file format, and download.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="/One-Doc-Drop/Fourth-step.png"
        className="absolute inset-0 object-cover opacity-60 w-full h-full group-hover:scale-110 transition-all duration-300 group-hover:blur-[1px] "
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <div className="w-full">
      <BentoGrid className="grid grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default BentoDemo;
