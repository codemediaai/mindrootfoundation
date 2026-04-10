import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const { resolved, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolved === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 w-10 h-10 flex items-center justify-center border border-border bg-background/80 backdrop-blur-sm hover:bg-accent transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolved === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-4 h-4 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-4 h-4 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
