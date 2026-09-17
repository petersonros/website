import React, { FC } from "react";

export const LinkButton: FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="inline-block rounded bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 transition-opacity"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      </a>
    );
  };