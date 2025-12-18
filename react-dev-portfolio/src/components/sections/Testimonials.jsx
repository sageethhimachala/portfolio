import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import FadeIn from "../animations/FadeIn";

const Testimonials = () => {
  const [currentIndex, setCurentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToindex = (index) => {
    setCurentIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behaviour: "smooth",
      });
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToindex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToindex(newIndex);
  };

  const testimonialStats = [
    { value: "3x", label: "Fast Delivery" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "5*", label: "Average Rating" },
  ];

  return <div>Testimonials</div>;
};

export default Testimonials;
