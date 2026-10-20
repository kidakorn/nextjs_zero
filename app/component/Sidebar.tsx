"use client"

import { LayoutDashboard, Package, Warehouse, Microchip, Boxes, SquareChevronLeft } from "lucide-react";
import NavLink from "./ui/SidebarLink";
import Image from "next/image";
import { useSidebar } from "./SidebarProvider";

const iconClass = "size-5 shrink-0";

function Sidebar() {

	const { isOpen, setIsOpen } = useSidebar();

	return (
		<aside className={`flex shrink-0 flex-col gap-4 bg-sidebar-gradient p-4 text-sm font-medium text-base-100 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>			<div className="flex w-full items-center justify-between px-2 py-3">
			<div className="flex items-center gap-3">

				<Image src="/favicon.ico" alt="Logo" className="size-8 object-contain" width={32} height={32} />

				<div className={isOpen ? "block" : "hidden"}>
					<p className="text-sm font-semibold leading-none">Daily Stock</p>
					<p className="text-xs font-normal text-base-100/60 mt-1">Enterprise Monitoring</p>
				</div>
			</div>

			<button
				type="button"
				className="btn btn-ghost btn-square btn-sm border border-base-100/20 hover:bg-base-100/10"
				onClick={() => setIsOpen(!isOpen)}
			>
				<SquareChevronLeft className={`size-5 text-base-100 transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} aria-hidden="true" />
			</button>
		</div>

			<nav aria-label="Main" className="flex w-full flex-col gap-2">
				<NavLink href="/" icon={<LayoutDashboard className={iconClass} aria-hidden="true" />}>
					Dashboard
				</NavLink>
				<NavLink href="/package-summary" icon={<Package className={iconClass} aria-hidden="true" />}>
					Package Summary
				</NavLink>
				<NavLink href="/daily-stock-balance" icon={<Warehouse className={iconClass} aria-hidden="true" />}>
					Daily Stock balance
				</NavLink>
				<NavLink href="/process-master" icon={<Microchip className={iconClass} aria-hidden="true" />}>
					Process Master
				</NavLink>
				<NavLink href="/group-package-master" icon={<Boxes className={iconClass} aria-hidden="true" />}>
					Group Package Master
				</NavLink>
			</nav>
		</aside>
	)
}

export default Sidebar