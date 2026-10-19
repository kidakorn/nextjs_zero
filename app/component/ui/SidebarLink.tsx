"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'
import { useSidebar } from "../SidebarProvider";

const BASE = "flex h-11 items-center gap-3 px-5 text-sm font-medium transition-colors " +
	"focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-background";
const ACTIVE = "bg-(image:--gradient-primary) text-background";
const IDLE = "text-background hover:bg-transparent hover:bg-(image:--gradient-primary) " +
	"bg-[length:200%_100%] bg-right transition-[background-position] duration-[1500ms] ease-out hover:text-background active:bg-background/20";
const ICON_ACTIVE = "text-background";
const ICON_IDLE = "text-background";

type SidebarLinkProps = {
	href: string;
	icon: ReactNode;
	children: ReactNode;
}

function isCurrentPath(pathname: string, href: string) {
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SidebarLink({ href, icon, children }: SidebarLinkProps) {
	const pathname = usePathname();
	const current = isCurrentPath(pathname, href);
	const { isOpen } = useSidebar();

	return (
		<Link
			href={href}
			aria-current={current ? "page" : undefined}
			className={`${BASE} ${current ? ACTIVE : IDLE} ${isOpen ? '' : 'justify-center'}`}
		>
			<span className={current ? ICON_ACTIVE : ICON_IDLE}>{icon}</span>
			<span className={isOpen ? "truncate" : "hidden"}>{children}</span>
		</Link>
	);
}