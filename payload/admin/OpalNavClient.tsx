"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavIcon } from "./NavIcon";
import type { NavSection } from "./navItems";

function isActive(pathname: string, href: string) {
  // The Photos link opens the grid, but the list and single photos count as Photos too.
  const base = href.replace(/\/grid$/, "");
  return pathname === base || pathname.startsWith(`${base}/`);
}

export function OpalNavClient({ sections }: { sections: NavSection[] }) {
  const pathname = usePathname() ?? "";

  return (
    <div className="opal-nav">
      <Link href="/admin" className="opal-nav__brand">
        <img src="/assets/logo-mark.png" alt="" width={44} height={44} className="opal-nav__brand-mark" />
        <span className="opal-nav__brand-text">
          <span className="opal-nav__brand-name">Opal Life Coaching</span>
          <span className="opal-nav__brand-script">content studio</span>
        </span>
      </Link>

      <Link href="/admin" className={`opal-nav__dashboard${pathname === "/admin" ? " is-active" : ""}`}>
        Dashboard
      </Link>

      {sections.map((section) => (
        <nav key={section.title} className="opal-nav__section" aria-label={section.title}>
          <p className="opal-nav__heading">{section.title}</p>
          <ul className="opal-nav__list">
            {section.items.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`opal-nav__link${active ? " is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="opal-nav__icon-wrap">
                      <NavIcon name={item.icon} />
                    </span>
                    <span className="opal-nav__label">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ))}

      <a className="opal-nav__site" href="/" target="_blank" rel="noopener noreferrer">
        View website <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
