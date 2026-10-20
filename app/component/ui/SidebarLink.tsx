"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'
import { useSidebar } from "../SidebarProvider";

const BASE = "flex h-11 items-center gap-3 px-5 text-sm font-medium transition-colors " +
	"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-100";
const ACTIVE = "bg-(image:--gradient-primary) text-base-100";
const IDLE = "text-base-100 hover:bg-transparent hover:bg-(image:--gradient-primary) " +
	"bg-[length:200%_100%] bg-right transition-[background-position] duration-[1500ms] ease-out hover:text-base-100 active:bg-base-100/20";
const ICON_ACTIVE = "text-base-100";
const ICON_IDLE = "text-base-100";

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