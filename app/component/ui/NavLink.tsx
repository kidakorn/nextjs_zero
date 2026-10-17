"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

const BASE = "flex h-9 items-center border-x border-background/40 gap-2 px-3 transition-colors " +
	"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background";
const ACTIVE = "bg-background border-t-4 border-primary text-primary";
const IDLE = "text-background hover:bg-transparent hover:bg-(image:--gradient-primary) " +
	"bg-[length:200%_100%] bg-right transition-[background-position] duration-300 ease-out hover:text-background active:bg-background/20";
const ICON_ACTIVE = "text-primary";
const ICON_IDLE = "text-background";

type NavLinkProps = {
	href: string;
	icon: ReactNode;
	children: ReactNode;
}

function isCurrentPath(pathname: string, href: string) {
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavLink({ href, icon, children }: NavLinkProps) {
	const pathname = usePathname();
	const current = isCurrentPath(pathname, href);

	return (
		<Link
			href={href}
			aria-current={current ? "page" : undefined}
			className={`${BASE} ${current ? ACTIVE : IDLE}`}
		>
			<span className={current ? ICON_ACTIVE : ICON_IDLE}>{icon}</span>
			{children}
		</Link>
	);
}