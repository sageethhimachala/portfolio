import React, { useState, useRef } from "react";
import { projects, categories } from "../../data/projects";
import {
  Briefcase,
  Sparkles,
  Target,
  Globe,
  Palette,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import FadeIn from "../animations/FadeIn";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredprojects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Reset carousel when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behaviour: "smooth" });
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 3;
      container.scrollTo({
        left: cardWidth * index,
        behaviour: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredprojects.length - 3);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = Math.min(currentIndex - 1, 0);
    scrollToIndex(newIndex);
  };

  // Category icons mapping
  const categoryIcons = {
    All: Target,
    "Web Apps": Globe,
    "UI Components": Palette,
    "Full Stack": Zap,
  };

  return <div>Projects</div>;
};

export default Projects;
