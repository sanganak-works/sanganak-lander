"use client";

import Link from "next/link";
import { GlitchWordmark } from "./glitch-wordmark";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Saras", href: "https://sarasgmat.com", external: true },
  { label: "Masala Dew", href: "https://masaladew.com", external: true },
  { label: "Services", href: "/services", external: false },
  { label: "Careers", href: "/careers", external: false },
] as const;

type NavProps = {
  /**
   * Brand lockup only, without the destination links. For standalone landing
   * pages (such as /coaches) that should not point visitors elsewhere.
   */
  minimal?: boolean;
};

export function Nav({ minimal = false }: NavProps = {}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <Link className="brand-lockup" href="/" aria-label="Sanganak home">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/brand/logo-crop.png" alt="Sanganak mascot" width={48} height={48} priority />
            </span>
            <GlitchWordmark />
          </Link>

          {minimal ? null : (
            <>
              <button
                className="menu-trigger"
                type="button"
                aria-controls="primary-menu"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span aria-hidden="true">{menuOpen ? "×" : "≡"}</span>
              </button>

              <div
                id="primary-menu"
                className="nav-links"
                data-open={menuOpen ? "true" : "false"}
              >
                {links.map((link) => {
                  if (link.external) {
                    return (
                      <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                        {link.label}
                      </a>
                    );
                  }

                  const active =
                    pathname === link.href ||
                    (link.href === "/careers" && pathname?.startsWith(`${link.href}/`));

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      data-active={active ? "true" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
