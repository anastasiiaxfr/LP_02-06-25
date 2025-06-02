import Link from "next/link";

import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import Drawer from "./Drawer";
import { ThemeToggle } from "../Providers/ThemeToggle";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <NavMenu />
        <div className="flex gap-2">
          <Button asChild className="btn hidden sm:flex">
            <Link href="/">Install Kobodrop</Link>
          </Button>
          <ThemeToggle />
          <div className="sm:hidden">
            <Drawer />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
