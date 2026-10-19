"use client"

import React, { createContext, useContext, useState, useEffect } from "react";

const SidebarContext = createContext<{
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void
} | undefined>(undefined);

export const useSidebar = () => {
	const context = useContext(SidebarContext);
	if (!context) throw new Error("useSidebar must be used within a SidebarProvider");
	return context;
};

export default function SidebarProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(true);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		if (!isMounted) {
			const saved = localStorage.getItem("sidebar_open");
			if (saved !== null) {
				// eslint-disable-next-line react-hooks/set-state-in-effect
				setIsOpen(JSON.parse(saved));
			}
			setIsMounted(true);
			return;
		}

		localStorage.setItem("sidebar_open", JSON.stringify(isOpen));
	}, [isOpen, isMounted]);

	return (
		<SidebarContext.Provider value={{ isOpen, setIsOpen }}>
			<div className="flex h-screen w-screen overflow-hidden">
				{children}
			</div>
		</SidebarContext.Provider>
	);
}
