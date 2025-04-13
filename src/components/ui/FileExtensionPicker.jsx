"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const fileExtensions = [
    {
        name: "PDF Document",
        extension: "pdf",
        icon: "📄",
        color: "#FF3D71",
        description: "Download as PDF file"
    },
    {
        name: "Word Document",
        extension: "docx",
        icon: "📝",
        color: "#1E86FF",
        description: "Download as DOCX file"
    },
    {
        name: "Plain Text",
        extension: "txt",
        icon: "📜",
        color: "#9C27B0",
        description: "Download as TXT file"
    },
    {
        name: "Markdown File",
        extension: "md",
        icon: "✍️",
        color: "#607D8B",
        description: "Download as Markdown file"
    },
    {
        name: "HTML Document",
        extension: "html",
        icon: "🌐",
        color: "#FF5722",
        description: "Download as HTML file"
    },
    {
        name: "OpenDocument Text",
        extension: "odt",
        icon: "📖",
        color: "#FF9900",
        description: "Download as ODT file"
    },
    {
        name: "Rich Text Format",
        extension: "rtf",
        icon: "🖹",
        color: "#4CAF50",
        description: "Download as RTF file"
    },
    {
        name: "EPUB Publication",
        extension: "epub",
        icon: "📚",
        color: "#2196F3",
        description: "Download as EPUB file"
    },
    {
        name: "ZIP Archive",
        extension: "zip",
        icon: "📊",
        color: "#FFC107",
        description: "Download as ZIP file"
    }
];

const ExtensionOption = ({ name, extension, icon, color, description, onClick }) => {
    return (
        <div onClick={onClick} className="cursor-pointer bg-white rounded-full relative p-4 pr-8 hover:bg-gray-100 border border-transparent hover:border-gray-400 flex flex-row items-center gap-3 shadow_r after:transition-all  before:transition-all after:opacity-0 before:opacity-0 hover:after:opacity-100 hover:before:order-100">
            <div
                className="flex size-10 items-center justify-center rounded-full"
                style={{
                    backgroundColor: color,
                }}
            >
                <span className="text-lg">{icon}</span>
            </div>
            <div className="flex flex-col overflow-hidden">
                <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
                    <span className="text-sm sm:text-lg">{name}</span>
                    <span className="mx-1">·</span>
                    <span className="text-xs font-bold">{extension}</span>
                </figcaption>
                <p className="text-sm font-normal">
                    {description}
                </p>
            </div>
        </div>
    );
};

const AnimatedList = React.memo(
    ({ className, children, show }) => {
        const [index, setIndex] = useState(0);
        const childrenArray = useMemo(
            () => React.Children.toArray(children),
            [children],
        );

        useEffect(() => {
            if (show && index < childrenArray.length - 1) {
                const timeout = setTimeout(() => {
                    setIndex((prevIndex) => prevIndex + 1);
                }, 300); // Faster animation

                return () => clearTimeout(timeout);
            }
        }, [index, childrenArray.length, show]);

        const itemsToShow = useMemo(() => {
            if (!show) return [];
            const result = childrenArray.slice(0, index + 1);
            return result;
        }, [index, childrenArray, show]);

        return (
            <div className={`grid grid-cols-3 gap-4 ${className}`}>
                <AnimatePresence>
                    {itemsToShow.map((item, index) => (
                        <AnimatedListItem key={item.key || index}>
                            {item}
                        </AnimatedListItem>
                    ))}
                </AnimatePresence>
            </div>
        );
    },
);

AnimatedList.displayName = "AnimatedList";

function AnimatedListItem({ children }) {
    const animations = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1, originY: 0 },
        exit: { scale: 0, opacity: 0 },
        transition: { type: "spring", stiffness: 350, damping: 40 },
    };

    return (
        <motion.div {...animations} layout className="mx-auto w-full">
            {children}
        </motion.div>
    );
}

export function FileExtensionPicker({
    className,
    onSelect,
    showOptions = false,
}) {
    return (
        <div
            className={cn(
                "flex flex-col items-center w-full ",
                className,
            )}
        >
            <AnimatedList show={showOptions}>
                {fileExtensions.map((item, index) => (
                    <ExtensionOption
                        {...item}
                        key={index}
                        onClick={() => onSelect(item.extension)}
                    />
                ))}
            </AnimatedList>
        </div>
    );
}