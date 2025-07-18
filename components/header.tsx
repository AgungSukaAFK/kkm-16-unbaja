"use client"; // Diperlukan karena kita menggunakan hook dan interaktivitas

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose, // Impor SheetClose untuk menutup sheet saat link diklik
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

// Definisikan item navigasi dalam sebuah array agar mudah dikelola
const navItems = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#anggota", label: "Anggota" },
  { href: "#proker", label: "Proker" },
  { href: "#galeri", label: "Galeri" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between">
        {/* === Tampilan Desktop === */}
        <div className="mr-4 hidden md:flex">
          <Link href="#beranda" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">KKM 16 UNBAJA</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* === Tampilan Mobile (Menu Hamburger) === */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Buka Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="w-full h-14 flex items-center justify-between px-4 border-b-border border-2">
                <Link href="#" className="mr-6 flex items-center space-x-2">
                  <span className="font-bold">KKM 16 UNBAJA</span>
                </Link>
              </div>
              <nav className="grid gap-4 px-4">
                {navItems.map((item) => (
                  // Bungkus Link dengan SheetClose agar menu tertutup saat diklik
                  <SheetClose asChild key={item.href}>
                    <Button
                      variant={"outline"}
                      className="flex justify-start"
                      asChild
                    >
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </Button>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Brand Name di tengah untuk mobile */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
          <Link href="#beranda" className="font-bold">
            KKM 16 UNBAJA
          </Link>
        </div>

        {/* Tombol ganti tema selalu di kanan */}
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
