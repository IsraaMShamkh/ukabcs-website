"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  onTabChange,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  onTabChange?: (tabValue: string) => void;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

  const handleSelect = (tab: Tab) => {
    setActive(tab);
    if (onTabChange) {
      onTabChange(tab.value);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={cn(
          "flex flex-row items-center justify-center gap-2 p-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 max-w-full overflow-x-auto",
          containerClassName
        )}
      >
        {propTabs.map((tab) => {
          const isActive = active.value === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => handleSelect(tab)}
              className={cn(
                "relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 z-10 whitespace-nowrap",
                isActive
                  ? "text-white"
                  : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-cyan-300",
                tabClassName
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="active-tab-pill"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  className={cn(
                    "absolute inset-0 bg-primary dark:bg-cyan-600 rounded-full shadow-md z-[-1]",
                    activeTabClassName
                  )}
                />
              )}
              {tab.title}
            </button>
          );
        })}
      </div>

      {active.content && (
        <div className={cn("w-full mt-8", contentClassName)}>
          <motion.div
            key={active.value}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {active.content}
          </motion.div>
        </div>
      )}
    </div>
  );
};
