import React, { FC } from "react";

export const LinkButton: FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      </a>
    );
  };