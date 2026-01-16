"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  slug: string;
  bgColor: string;
}

interface FeaturedProjectProps {
  projects: FeaturedProject[];
}

export function FeaturedProject({ projects }: FeaturedProjectProps) {
  const [cards, setCards] = useState(projects);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [animatingCard, setAnimatingCard] = useState<string | null>(null);

  const handleDragStart = (clientX: number) => {
    setDragStart(clientX);
    setIsDragging(true);
    setHasDragged(false);
  };

  const handleDragMove = (clientX: number) => {
    if (dragStart === null) return;
    const offset = clientX - dragStart;
    setDragOffset(offset);

    // Mark as dragged if movement exceeds 10px
    if (Math.abs(offset) > 10) {
      setHasDragged(true);
    }
  };

  const handleDragEnd = () => {
    if (Math.abs(dragOffset) > 100) {
      const direction = dragOffset > 0 ? 1 : -1;
      moveCard(direction);
    }
    setDragStart(null);
    setDragOffset(0);
    setIsDragging(false);

    // Reset hasDragged after a short delay to allow onClick to check it
    setTimeout(() => setHasDragged(false), 50);
  };

  const moveCard = (direction: number) => {
    const currentTopCard = cards[0].id;
    setAnimatingCard(currentTopCard);

    setTimeout(() => {
      setCards((prev) => {
        const newCards = [...prev];
        if (direction > 0) {
          const first = newCards.shift();
          if (first) newCards.push(first);
        } else {
          const last = newCards.pop();
          if (last) newCards.unshift(last);
        }
        return newCards;
      });
      setAnimatingCard(null);
    }, 300);
  };

  const activeProject = cards[0];

  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#d4f542] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl tracking-tight text-black text-center mb-10 font-semibold">
          Where ideas take digital form.
        </h2>

        <div className="relative h-[370px] md:h-[420px]">
          {cards.map((project, index) => {
            const isTop = index === 0;
            const isAnimatingOut = animatingCard === project.id;
            const stackOffset = index * 12;
            const stackScale = 1 - index * 0.04;
            const zIndex = cards.length - index;

            return (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className={`absolute inset-x-0 mx-auto max-w-3xl transition-all ease-out block ${
                  isAnimatingOut
                    ? "duration-300"
                    : isTop && isDragging
                    ? "duration-0"
                    : "duration-300"
                } ${isTop ? "cursor-grab active:cursor-grabbing" : ""}`}
                style={{
                  transform: isAnimatingOut
                    ? `translateX(${
                        dragOffset > 0 ? 400 : -400
                      }px) translateY(${stackOffset}px) scale(${stackScale}) rotate(${
                        dragOffset > 0 ? 15 : -15
                      }deg)`
                    : `translateY(${stackOffset}px) scale(${stackScale}) ${
                        isTop
                          ? `translateX(${dragOffset}px) rotate(${
                              dragOffset * 0.05
                            }deg)`
                          : ""
                      }`,
                  zIndex: isAnimatingOut ? 0 : zIndex,
                  opacity: isAnimatingOut ? 0 : index > 3 ? 0 : 1 - index * 0.2,
                }}
                onMouseDown={
                  isTop && !animatingCard
                    ? (e) => {
                        e.preventDefault();
                        handleDragStart(e.clientX);
                      }
                    : undefined
                }
                onMouseMove={
                  isTop && !animatingCard
                    ? (e) => handleDragMove(e.clientX)
                    : undefined
                }
                onMouseUp={isTop && !animatingCard ? handleDragEnd : undefined}
                onMouseLeave={
                  isTop && !animatingCard ? handleDragEnd : undefined
                }
                onTouchStart={
                  isTop && !animatingCard
                    ? (e) => {
                        e.preventDefault();
                        handleDragStart(e.touches[0].clientX);
                      }
                    : undefined
                }
                onTouchMove={
                  isTop && !animatingCard
                    ? (e) => handleDragMove(e.touches[0].clientX)
                    : undefined
                }
                onTouchEnd={isTop && !animatingCard ? handleDragEnd : undefined}
                onClick={(e) => {
                  // Prevent navigation if user was dragging
                  if (hasDragged) {
                    e.preventDefault();
                  }
                }}
              >
                <div
                  className="p-8 md:p-12 rounded-lg shadow-lg"
                  style={{ backgroundColor: project.bgColor }}
                >
                  <div className="relative aspect-4/3 max-w-md mx-auto">
                    <Image
                      src={project.coverImage || "/placeholder.svg"}
                      alt={`${project.title} project`}
                      fill
                      className="object-contain select-none pointer-events-none"
                      draggable={false}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-8 text-black px-1 max-w-3xl mx-auto pt-3">
          <span className="font-semibold text-lg">{activeProject.title}</span>
          <span className="text-sm text-black">{activeProject.category}</span>
        </div>
      </div>
    </section>
  );
}
