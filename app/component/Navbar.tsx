import { LayoutDashboard, Package, Warehouse, Microchip, Boxes } from "lucide-react";
import NavLink from "./ui/NavLink";

const iconClass = "size-5 shrink-0";

function Navbar() {
  return (
    <header className="flex min-h-8 shrink-0 items-center gap-4 bg-sidebar-gradient px-4 text-sm font-medium text-background">
      <nav aria-label="Main" className="flex items-center gap-1">
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
    </header>
  )
}

export default Navbar