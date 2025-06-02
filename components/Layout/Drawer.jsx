"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import { menu } from "./constant";
import { MenuIcon } from "lucide-react";

function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="border text-black dark:border-gray-200">
          <MenuIcon className="w-5 h-5 " />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="my-4 flex flex-col gap-3">
            {menu.map((item, index) => (
              <SheetClose asChild key={index}>
                <a href={item.url} className="block text-sm text-foreground hover:underline cursor-pointer">
                  {item.title}
                </a>
              </SheetClose>
            ))}
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button asChild>
              <Link href="/">Install Kobodrop</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Drawer;
