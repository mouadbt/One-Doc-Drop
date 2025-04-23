import React from "react";
import { Share1Icon, Link2Icon, DownloadIcon } from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { File } from "lucide-react";

const features = [
  {
    Icon: File,
    name: "Open Your Google Docs Document",
    description:
      "Access your Google Docs file that you want to convert and download with One Doc Drop's free converter tool.",
    href: "https://docs.google.com",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="/One-Doc-Drop/First-step.png"
        alt="How to open Google Docs for conversion"
        className="absolute -right-0 -top-0 opacity-60 w-full h-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:blur-[1px] "
      />
    ),
  },
  {
    Icon: Share1Icon,
    name: "Enable Document Sharing",
    description:
      "Click the blue 'Share' button in the top-right corner to prepare your Google Doc for conversion to PDF, Word, or other formats.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/One-Doc-Drop/Second-step.png"
        alt="Share button location in Google Docs"
        className="absolute -right-0 -top-0 opacity-60 w-full  group-hover:scale-110 transition-all duration-300 group-hover:blur-[1px] "
      />
    ),
  },
  {
    Icon: Link2Icon,
    name: "Get Shareable Document Link",
    description:
      "Copy the document link from the sharing dialog. One Doc Drop will use this to convert your Google Doc to your desired format.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/One-Doc-Drop/Third-step.png"
        alt="How to copy Google Docs sharing link"
        className="absolute -right-0 -top-16 opacity-60 w-full group-hover:scale-110 transition-all duration-300 group-hover:blur-[1px]"
      />
    ),
  },
  {
    Icon: DownloadIcon,
    name: "Convert and Download",
    description:
      "Use One Doc Drop to instantly convert your Google Doc to PDF, Word, HTML, or other formats - completely free, no sign-in required.",
    href: "#",
    cta: "",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="/One-Doc-Drop/Fourth-step.png"
        alt="Converting Google Docs with One Doc Drop"
        className="absolute inset-0 object-cover opacity-60 w-full h-full group-hover:scale-110 transition-all duration-300 group-hover:blur-[1px] "
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <div className="w-full">
      <BentoGrid
        className="grid grid-cols-3 gap-4"
        aria-label="How to convert Google Docs using One Doc Drop"
      >
        {features.map((feature, idx) => (
          <BentoCard
            key={idx}
            {...feature}
            role="article"
            aria-label={`Step ${idx + 1}: ${feature.name}`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

export default BentoDemo;
