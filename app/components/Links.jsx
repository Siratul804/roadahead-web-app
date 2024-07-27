"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link
            className={`link ${pathname === "/" ? "text-blue-500" : ""}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/dashboard" ? "text-blue-500" : ""
            }`}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
