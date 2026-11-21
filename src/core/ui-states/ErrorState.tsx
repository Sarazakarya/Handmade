"use client";

import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import Text from "@/shared/components/atoms/Text";
import { ButtonsIcon } from "@/shared/components/molecule/ButtonsIcon";

interface ErrorStateProps {
  title?: string;
  message?: string;
  className?: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export default function ErrorState({
  title = "Oops! Something got tangled",
  message = "We couldn't load this right now. Please try again in a moment.",
  className,
  onRetry,
  retryLabel = "Try again",
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-[60vh] flex-col items-center justify-center px-4 text-center",
        className,
      )}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex h-44 w-44 items-center justify-center rounded-full bg-red-100/60 p-8 shadow-inner dark:bg-red-950/30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-full w-full text-red-500 dark:text-red-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.g
            initial={{ opacity: 0.7, scale: 0.96 }}
            animate={{ opacity: [0.75, 1, 0.75], scale: [0.96, 1.02, 0.96] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "center" }}
          >
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </motion.g>
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <h3 className="mt-6 text-lg font-semibold text-red-500">{title}</h3>
        <Text className="mt-1.5 max-w-sm text-bold" variant="black" size="lg">
          {message}
        </Text>

        {onRetry && (
          <>
            <hr className="my-3" />
            <div>
              <ButtonsIcon
                label={retryLabel}
                variant={"default"}
                icon={RotateCcw}
                size={"xlg"}
                className={"font-bold"}
                onClick={onRetry}
              />
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
