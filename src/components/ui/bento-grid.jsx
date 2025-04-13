import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className
}) => {
  return (
    (<div
      className={cn("grid w-full auto-rows-[18rem] grid-cols-3 gap-4", className)}>
      {children}
    </div>)
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu ",
      "after:w-full after:absolute after:h-full after:inset-0 after-el",
      className
    )}>
    <div>{background}</div>
    <div
      className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 bg-gradient-to-t from-white to-transparent">
      <Icon
        className="h-8 w-8 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-700">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "z-50 pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4  transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 bg-white"
      )}>
      <Button variant="ghost" asChild size="sm" className="relative pointer-events-auto">
        <a href={href}>
          {cta}
          {/* <ArrowRightIcon className="ml-2 h-4 w-4" /> */}
        </a>
      </Button>
    </div>
    <div
      className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] " />
  </div>
);

export { BentoCard, BentoGrid };
