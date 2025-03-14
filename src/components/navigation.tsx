"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "./ui/cn";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Termcrawl.ai Logo" 
                width={60} 
                height={60} 
                className="mr-3"
                priority
              />
              <span className="text-2xl font-bold">Termcrawl.ai</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm transition-colors hover:text-gray-200",
                  pathname === link.href
                    ? "text-white"
                    : "text-gray-400"
                )}
              >
                {pathname === link.href && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-white mix-blend-difference"
                    style={{ borderRadius: 8 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 