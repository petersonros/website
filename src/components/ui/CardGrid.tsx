// src/components/ui/CardGrid.tsx - Versão Alternativa
"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectCarousel } from "./ProjectCarousel";
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
      const pageWidth = 1280 + 16;
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
    <section className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] py-16 px-4 sm:px-6 md:px-2 lg:px-2" id="projects">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold py-16">Projetos</h2>
        <div className="block md:hidden">
          <ProjectCarousel />
        </div>

        <div className="hidden md:block relative">
          {showLeftButton && (
            <button
              onClick={() => scrollTo("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700"
              aria-label="Ver projetos anteriores"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700"
              aria-label="Ver próximos projetos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-gray-600 dark:text-gray-300"
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
                    className="grid grid-cols-3 grid-rows-2 gap-6 flex-shrink-0"
                    style={{ width: "1160px" }}
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
                  className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-200"
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
