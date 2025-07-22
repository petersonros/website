import React from "react";

import type { SectionProps } from "@/types";

const Section: React.FC<SectionProps> = ({ id, children, className, ...props }) => (
  <section id={id} className={className} {...props}>
    {children}
  </section>
);
export default Section;