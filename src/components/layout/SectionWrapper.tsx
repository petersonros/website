// src/components/layout/SectionWrapper.tsx

import type { SectionWrapperProps } from "@/types";

export function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
  return (
    <section
      className={`min-h-screen pt-24 md:pt-32 px-4 md:px-6 flex flex-col items-center bg-gray-50 dark:bg-gray-950 ${className}`}
    >
      {children}
    </section>
  );
}
