import Link from "next/link";
import { cn } from "@/lib/cn";
import { navServices } from "@/lib/nav-services";

type ServicesDropdownPanelProps = {
  open: boolean;
  onItemClick: () => void;
};

export function ServicesDropdownPanel({
  open,
  onItemClick,
}: ServicesDropdownPanelProps) {
  return (
    <div
      className={cn("nav-services-panel", open && "nav-services-panel--open")}
      role="menu"
      aria-hidden={!open}
    >
      <div className="nav-services-panel__glow" aria-hidden="true" />
      <div className="nav-services-panel__shell">
        <img
          src="/assets/sprig-fern.svg"
          alt=""
          className="nav-services-panel__sprig"
          aria-hidden="true"
        />
        <div className="nav-services-panel__inner">
          <header className="nav-services-panel__head">
            <p className="nav-services-panel__eyebrow">Explore offerings</p>
            <p className="nav-services-panel__script font-script">
              Find your path
            </p>
            <p className="nav-services-panel__lead">
              Three gentle ways to be supported — each one personal, unhurried,
              and entirely yours.
            </p>
          </header>

          <div className="nav-services-panel__grid">
            {navServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                role="menuitem"
                onClick={onItemClick}
                className={cn(
                  "nav-services-item",
                  `nav-services-item--${service.variant}`,
                )}
              >
                <span className="nav-services-item__halo" aria-hidden="true">
                  <img src={service.icon} alt="" />
                </span>
                <span className="nav-services-item__tag">{service.tag}</span>
                <span className="nav-services-item__title">{service.title}</span>
                <span className="nav-services-item__short">{service.short}</span>
                <span className="nav-services-item__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>

          <footer className="nav-services-panel__foot">
            <Link href="/bookings" onClick={onItemClick} className="nav-services-panel__cta text-white">
              Book a session
            </Link>
            <span className="nav-services-panel__note">
              Not sure yet?{" "}
              <Link href="/contact" onClick={onItemClick}>
                Let&apos;s find what fits
              </Link>
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}

type ServicesMobilePanelProps = {
  open: boolean;
  onItemClick: () => void;
};

export function ServicesMobilePanel({
  open,
  onItemClick,
}: ServicesMobilePanelProps) {
  return (
    <div
      className={cn("mnav-services", open && "mnav-services--open")}
      aria-hidden={!open}
    >
      {navServices.map((service) => (
        <Link
          key={service.href}
          href={service.href}
          onClick={onItemClick}
          className={cn("mnav-services-item", `mnav-services-item--${service.variant}`)}
        >
          <span className="mnav-services-item__icon" aria-hidden="true">
            <img src={service.icon} alt="" />
          </span>
          <span className="mnav-services-item__copy">
            <span className="mnav-services-item__tag">{service.tag}</span>
            <span className="mnav-services-item__title">{service.title}</span>
            <span className="mnav-services-item__short">{service.short}</span>
          </span>
          <span className="mnav-services-item__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
