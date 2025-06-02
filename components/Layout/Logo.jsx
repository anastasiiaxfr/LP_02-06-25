"use client";
import Link from "next/link";
import Image from "next/image";
import logoDefault from "@/assets/img/logo.svg";
import logoWhite from "@/assets/img/logo-w.svg";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Logo({ type = "default" }) {
  const { theme, setTheme } = useTheme();

  return (
    <Link href="/">
      {type === "white" ? (
        <Image src={logoWhite} alt="Kobodrop" />
      ) : (
        <Image src={logoDefault} alt="Kobodrop" />
      )}
    </Link>
  );
}
