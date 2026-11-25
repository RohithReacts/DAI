"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import Logo from "@/components/assets/brandlogo.png"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Agents", href: "/agents" },
  { name: "Skills", href: "/skills" },
  { name: "Connectors", href: "/connectors" },
  { name: "Playbooks", href: "/playbooks" },
  { name: "Tools", href: "/tools" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                <Image src={Logo} alt="Logo" className="h-10 w-10 object-cover" />
              </motion.div>
              <span className="font-bold text-xl tracking-widest">DAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="font-medium transition-transform hover:-translate-y-0.5"
              render={<Link href="/explore" />}
              nativeButton={false}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="md:hidden" />
                }
              >
                <Menu className="h-9 w-9" />
                <span className="sr-only">Open main menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-border">
                <div className="flex flex-col h-full mt-4 ml-6">
                  {/* Brand */}
                  <Link href="/" className="flex items-center gap-2 mb-8 mt-2">
                    <div className="flex items-center justify-center">
                      <Image src={Logo} alt="Logo" className="h-8 w-8 object-cover" />
                    </div>
                    <span className="font-semibold text-lg tracking-wide">
                      Reacts.ai
                    </span>
                  </Link>

                  {/* Links */}
                  <nav className="flex flex-col space-y-2 flex-1">
                    {navLinks.map((link) => {
                      const isActive =
                        link.href === "/"
                          ? pathname === "/"
                          : pathname === link.href || pathname.startsWith(`${link.href}/`);
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          className={cn(
                            "text-sm transition-colors py-3 border-b border-border/50",
                            isActive
                              ? "font-semibold text-foreground"
                              : "font-medium text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {link.name}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 mt-auto pb-12 pr-6">
                    <Button
                      variant="default"
                      className="w-full justify-center"
                      render={<Link href="/explore" />}
                      nativeButton={false}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
