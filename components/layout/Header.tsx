"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useLayoutData } from "@/components/layout/LayoutDataContext";
import {
  ServicesDropdownPanel,
  ServicesMobilePanel,
} from "@/components/layout/ServicesDropdownPanel";

export function Header() {
  const router = useRouter();
  const { settings, navigation } = useLayoutData();
  const header = navigation.header;
  const linksBefore = header.linksBeforeServices ?? [];
  const linksAfter = header.linksAfterServices ?? [];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  const closeServices = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const resetHeader = () => {
      setMenuOpen(false);
      setMobileServicesOpen(false);
      setServicesOpen(false);
      setScrolled(window.scrollY > 24);
    };

    router.events.on("routeChangeStart", resetHeader);
    return () => router.events.off("routeChangeStart", resetHeader);
  }, [router.events]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header
        id="hd"
        className={cn(
          "fixed inset-x-0 top-0 z-[200] transition-[background,border-color,box-shadow] duration-[350ms] ease-opal",
          scrolled && "scrolled",
          menuOpen && "menu-open",
        )}
      >
        <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "hdr flex min-w-0 items-center gap-3")}>
          <Link className={"logo flex shrink-0 items-center"} href="/" onClick={closeMenu}>
            <img
              src="/assets/logo-mark.png"
              alt={settings.name}
              width={136}
              height={136}
              decoding="async"
            />
          </Link>
          <nav className={"nav ml-auto hidden min-w-0 flex-wrap items-center justify-end gap-[.35rem] md:flex"} aria-label="Primary">
            {linksBefore.map(({ href, label }) => (
              <Link key={href} href={href} className={"px-[1.05rem] py-[.65rem] text-[.98rem] font-semibold leading-[1.3] tracking-[.015em] text-blue transition-opacity hover:opacity-70 max-[1200px]:px-[.8rem] max-[1200px]:py-[.6rem] max-[1200px]:text-[.9rem] max-[1100px]:px-[.65rem] max-[1100px]:py-[.55rem] max-[1100px]:text-[.84rem]"}>
                {label}
              </Link>
            ))}

            <div
              className="nav-dropdown relative"
              ref={dropdownRef}
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((o) => !o)}
              >
                {header.servicesLabel}
                <span className="nav-dropdown-chevron" aria-hidden="true" />
              </button>
              <ServicesDropdownPanel
                open={servicesOpen}
                onItemClick={() => setServicesOpen(false)}
              />
            </div>

            {linksAfter.map(({ href, label }) => (
              <Link key={href} href={href} className={"px-[1.05rem] py-[.65rem] text-[.98rem] font-semibold leading-[1.3] tracking-[.015em] text-blue transition-opacity hover:opacity-70 max-[1200px]:px-[.8rem] max-[1200px]:py-[.6rem] max-[1200px]:text-[.9rem] max-[1100px]:px-[.65rem] max-[1100px]:py-[.55rem] max-[1100px]:text-[.84rem]"}>
                {label}
              </Link>
            ))}

            <Link href={header.bookCta.href} className={"nav-book ml-[.85rem] whitespace-nowrap rounded-[4px] bg-pastel-lilac px-[1.25rem] py-[.65rem] text-[.98rem] font-semibold leading-[1.3] tracking-[.015em] text-white shadow-[0_6px_18px_rgba(179,162,254,.25)] transition-colors hover:bg-[#a894fc] max-[1200px]:px-[1.1rem] max-[1200px]:py-[.6rem] max-[1200px]:text-[.9rem] max-[1100px]:px-[.95rem] max-[1100px]:py-[.55rem] max-[1100px]:text-[.84rem]"}>
              {header.bookCta.label}
            </Link>
          </nav>
          <button
            type="button"
            className={cn("menu-btn relative ml-auto flex md:hidden", menuOpen && "menu-btn--open")}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <button
        type="button"
        className={cn("mnav-backdrop md:hidden", menuOpen && "mnav-backdrop--open")}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <nav
        id="mobile-nav"
        className={cn("mnav md:hidden", menuOpen && "mnav--open")}
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        <div className="mnav-shell">
          <div className="mnav-links">
            {linksBefore.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="mnav-link"
              >
                {label}
              </Link>
            ))}

            <div className="mnav-group">
              <button
                type="button"
                className={cn("mnav-group-trigger", mobileServicesOpen && "mnav-group-trigger--open")}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-panel"
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                <span>{header.servicesLabel}</span>
                <span className="nav-dropdown-chevron" aria-hidden="true" />
              </button>
              <div
                id="mobile-services-panel"
                className={cn("mnav-group-panel", mobileServicesOpen && "mnav-group-panel--open")}
              >
                <ServicesMobilePanel
                  open={mobileServicesOpen}
                  onItemClick={closeMenu}
                />
              </div>
            </div>

            {linksAfter.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="mnav-link"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="mnav-footer">
            <Link href={header.mobileContactCta.href} onClick={closeMenu} className="mnav-footer-link">
              {header.mobileContactCta.label}
            </Link>
            <Link href={header.bookCta.href} onClick={closeMenu} className="mnav-book">
              {header.bookCta.label}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
