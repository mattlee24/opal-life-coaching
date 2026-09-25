import type { Payload } from "payload";
import { NavIcon } from "./NavIcon";
import { getNavSections } from "./navItems";

/** Friendly dashboard with shortcuts to everything that can be edited. */
export async function Welcome({ payload }: { payload: Payload }) {
  const navSections = await getNavSections(payload);

  return (
    <section className="opal-welcome">
      <div className="opal-welcome__hero">
        <div>
          <p className="opal-welcome__eyebrow">Opal Life Coaching</p>
          <h1 className="opal-welcome__title">
            Hello, <span className="opal-welcome__script">Cara</span>
          </h1>
          <p className="opal-welcome__lead">
            Everything on your website lives here. Open a page to edit it — a live preview sits alongside so you can
            see each change as you type. Press <strong>Save</strong> when you’re happy and it goes live within seconds.
          </p>
        </div>
        <a className="opal-welcome__site" href="/" target="_blank" rel="noopener noreferrer">
          View website ↗
        </a>
      </div>

      {navSections.map((section) => (
        <div key={section.title}>
          <h2 className="opal-welcome__heading">{section.title}</h2>
          <p className="opal-welcome__subheading">{section.description}</p>
          <div className="opal-welcome__grid">
            {section.items.map((item) => (
              <a key={item.href} href={item.href} className="opal-welcome__card">
                <span className="opal-welcome__card-icon">
                  <NavIcon name={item.icon} />
                </span>
                <span className="opal-welcome__card-title">{item.label}</span>
                <span className="opal-welcome__card-text">{item.description}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
