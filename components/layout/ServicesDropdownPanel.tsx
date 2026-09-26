import Link from "next/link";
import { DecorativeImage } from "@/components/ui/DecorativeImage";
import { useLayoutData } from "@/components/layout/LayoutDataContext";
import { cn } from "@/lib/cn";
import { serviceHref, serviceVariant } from "@/lib/cms-types";

type ServicesDropdownPanelProps = {
  open: boolean;
  onItemClick: () => void;
};

export function ServicesDropdownPanel({
  open,
  onItemClick,
}: ServicesDropdownPanelProps) {
  const { navigation, services } = useLayoutData();
  const dropdown = navigation.header.dropdown;

  return (
    <div
      className={cn("nav-services-panel", open && "nav-services-panel--open")}
      role="menu"
      aria-hidden={!open}
    >
      <div className="nav-services-panel__glow" aria-hidden="true" />
      <div className="nav-services-panel__shell">
        <DecorativeImage
          src="/assets/sprig-fern.svg"
          width={48}
          height={96}
          className="nav-services-panel__sprig"
        />
        <div className="nav-services-panel__inner">
          <header className="nav-services-panel__head">
            <p className="nav-services-panel__eyebrow">{dropdown.eyebrow}</p>
            <p className="nav-services-panel__script font-script">
              {dropdown.script}
            </p>
            <p className="nav-services-panel__lead">
              {dropdown.lead}
            </p>
          </header>

          <div className="nav-services-panel__grid">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={serviceHref(service.slug)}
                role="menuitem"
                onClick={onItemClick}
                className={cn(
                  "nav-services-item",
                  `nav-services-item--${serviceVariant(service.slug)}`,
                )}
              >
                <span className="nav-services-item__halo" aria-hidden="true">
                  {service.icon?.url ? (
                    <DecorativeImage src={service.icon.url} width={400} height={266} />
                  ) : null}
                </span>
                <span className="nav-services-item__title">{service.title}</span>
                <span className="nav-services-item__short">{service.navShort}</span>
                <span className="nav-services-item__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>

          <footer className="nav-services-panel__foot">
            <Link href={dropdown.cta.href} onClick={onItemClick} className="nav-services-panel__cta text-white">
              {dropdown.cta.label}
            </Link>
            <span className="nav-services-panel__note">
              {dropdown.footnote}{" "}
              <Link href={dropdown.footnoteLink.href} onClick={onItemClick}>
                {dropdown.footnoteLink.label}
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
  const { services } = useLayoutData();

  return (
    <div
      className={cn("mnav-services", open && "mnav-services--open")}
      aria-hidden={!open}
    >
      {services.map((service) => (
        <Link
          key={service.slug}
          href={serviceHref(service.slug)}
          onClick={onItemClick}
          className={cn("mnav-services-item", `mnav-services-item--${serviceVariant(service.slug)}`)}
        >
          <span className="mnav-services-item__icon" aria-hidden="true">
            {service.icon?.url ? (
              <DecorativeImage src={service.icon.url} width={400} height={266} />
            ) : null}
          </span>
          <span className="mnav-services-item__copy">
            <span className="mnav-services-item__title">{service.title}</span>
            <span className="mnav-services-item__short">{service.navShort}</span>
          </span>
          <span className="mnav-services-item__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
