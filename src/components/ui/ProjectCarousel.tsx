// src/components/ui/ProjectCarousel.tsx
"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const ProjectCarousel = () => {
  return (
    <Swiper
      slidesPerView={1.1}
      spaceBetween={16}
      grabCursor={true}
      pagination={false}
      navigation={false}
      breakpoints={{
        640: {
          slidesPerView: 2.2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      className="py-4"
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectCard {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
