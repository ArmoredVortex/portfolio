"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // Updated gradients with your color scheme
  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #A8DADC 0%, rgba(168, 218, 220, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, #A8DADC 0%, rgba(168, 218, 220, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, #A8DADC 0%, rgba(168, 218, 220, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, #A8DADC 0%, rgba(168, 218, 220, 0) 100%)",
  };

  // Updated highlight with lavender color
  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #B39CD0 0%, rgba(179, 156, 208, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        console.log(event);
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full content-center bg-slate-800/20 hover:bg-slate-700/20 transition duration-500 dark:bg-slate-600/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 px-4 py-2 rounded-[inherit]",
          className
        )}
        style={{
          backgroundColor: "#2C2C2C", // Your background color
          color: "#E4E4E4", // Your primary text color
        }}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div
        className="absolute z-1 flex-none inset-[2px] rounded-[100px]"
        style={{ backgroundColor: "#2C2C2C" }} // Your background color
      />
    </Tag>
  );
}
