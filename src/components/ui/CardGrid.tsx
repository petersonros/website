// src/components/ui/CardGrid.tsx - Versão Alternativa
"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectCarousel } from "./ProjectCarousel";
import { ShufflingTitle } from "@/components/ShufflingTitle";
import { useState, useRef, useEffect } from "react";

export const CardGrid = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 10);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const pageWidth = scrollContainerRef.current.clientWidth;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - pageWidth
          : scrollContainerRef.current.scrollLeft + pageWidth;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 md:px-2 lg:px-2">
      <div className="mx-auto max-w-6xl">
        <ShufflingTitle
          text="Portfólio"
          className="text-3xl font-bold tracking-tight text-primary mb-10"
        />
        <div className="block md:hidden">
          <ProjectCarousel />
        </div>

        <div className="hidden md:block relative">
          {showLeftButton && (
            <button
              onClick={() => scrollTo("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 border border-border"
              aria-label="Ver projetos anteriores"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-muted-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}
          {showRightButton && (
            <button
              onClick={() => scrollTo("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 border border-border"
              aria-label="Ver próximos projetos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-muted-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollButtons}
            className="overflow-x-auto overflow-y-visible px-12 py-4 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex gap-8">
              {Array.from({ length: Math.ceil(projects.length / 6) }).map(
                (_, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="grid w-full grid-cols-3 grid-rows-2 gap-6 flex-shrink-0"
                  >
                    {projects
                      .slice(pageIndex * 6, pageIndex * 6 + 6)
                      .map((project, cardIndex) => (
                        <div
                          key={project.id}
                          className="transform hover:scale-105 transition-transform duration-200"
                          style={{
                            animationDelay: `${cardIndex * 100}ms`,
                          }}
                        >
                          <ProjectCard {...project} />
                        </div>
                      ))}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(projects.length / 6) }).map(
              (_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-border transition-colors duration-200"
                />
              )
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
