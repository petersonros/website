import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-10 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-sans text-2xl font-semibold text-foreground mt-8 mb-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-sans text-xl font-semibold text-foreground mt-6 mb-2">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-base leading-relaxed text-foreground/90 mb-4">{children}</p>
  ),
  a: ({ children, ...props }) => (
    <a
      {...props}
      className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-1 mb-4 text-foreground/90">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-1 mb-4 text-foreground/90">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-primary pl-4 py-1 my-4 text-muted-foreground italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="font-mono text-sm bg-muted text-foreground rounded px-1.5 py-0.5">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="font-mono text-sm bg-muted text-foreground rounded-lg p-4 overflow-x-auto mb-4 border border-border">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border px-3 py-2 text-left font-semibold text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-3 py-2 text-foreground/90">{children}</td>
  ),
};

export function useMDXComponents(base: MDXComponents): MDXComponents {
  return { ...base, ...components };
}
