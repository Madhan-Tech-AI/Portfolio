import { motion } from "framer-motion";
import { cn } from "../lib/utils";

type NavItem = {
    name: string;
    id: string;
};

interface SketchyNavProps {
    items: NavItem[];
    className?: string;
    activeTab: string;
    onNavigate: (id: string) => void;
    isScrolled?: boolean;
}

export const SketchyNav = ({ items, className, activeTab, onNavigate, isScrolled }: SketchyNavProps) => {
    return (
        <nav className={cn("flex gap-1 sm:gap-4 lg:gap-6 p-2", className)}>
            {items.map((item) => {
                const isActive = activeTab === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={cn(
                            "relative px-2 sm:px-3 py-1 font-serif text-sm sm:text-base lg:text-lg transition-colors text-dark/70 hover:text-primary",
                            isActive && "font-bold text-dark"
                        )}
                    >
                        <span className="relative z-10">{item.name}</span>

                        {/* The Scribble Highlight */}
                        {isActive && (
                            <svg
                                className="absolute inset-0 -z-10 w-full h-full overflow-visible"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                <motion.path
                                    d="M-5,50 Q25,40 50,50 T105,50"
                                    fill="none"
                                    stroke="#8B0000"
                                    strokeWidth="25"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    style={{ opacity: 0.15 }}
                                />
                                <motion.path
                                    d="M-5,85 Q25,95 50,85 T105,85"
                                    fill="none"
                                    stroke="#8B0000"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    style={{ opacity: 0.6 }}
                                />
                            </svg>
                        )}
                    </button>
                );
            })}
        </nav>
    );
};
