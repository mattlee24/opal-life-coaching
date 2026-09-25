import { Gutter, SetStepNav } from "@payloadcms/ui";
import type { AdminViewServerProps, Where } from "payload";
import type { Media } from "@/payload-types";
import { MediaViewToggle } from "./MediaViewToggle";
import { SetDocumentTitle } from "./SetDocumentTitle";

const PER_PAGE = 40;
const BASE = "/admin/collections/media";

function formatBytes(bytes?: number | null) {
  if (!bytes) return null;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/** Small optimised thumbnail via Next's image optimiser (SVGs are served as-is). */
function thumbnail(doc: Media) {
  if (!doc.url) return null;
  if (doc.mimeType === "image/svg+xml") return doc.url;
  return `/_next/image?url=${encodeURIComponent(doc.url)}&w=640&q=75`;
}

function pageHref(page: number, search: string) {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return `${BASE}/grid${query ? `?${query}` : ""}`;
}

/** Visual grid of the Media collection (the standard table stays at /admin/collections/media). */
export async function MediaGridView({ initPageResult, searchParams }: AdminViewServerProps) {
  const { req } = initPageResult;
  const search = typeof searchParams?.search === "string" ? searchParams.search.trim() : "";
  const page = Math.max(1, Number(searchParams?.page) || 1);

  const where: Where | undefined = search
    ? { or: [{ alt: { like: search } }, { filename: { like: search } }] }
    : undefined;

  const result = await req.payload.find({
    collection: "media",
    depth: 0,
    limit: PER_PAGE,
    page,
    sort: "-updatedAt",
    where,
    user: req.user,
    overrideAccess: false,
  });

  return (
    <Gutter className="opal-media">
      <SetStepNav nav={[{ label: "Photos" }]} />
      <SetDocumentTitle title="Photos — Opal Life Coaching" />

      <header className="opal-media__header">
        <div>
          <h1 className="opal-media__title">Photos</h1>
          <p className="opal-media__count">
            {result.totalDocs} {result.totalDocs === 1 ? "image" : "images"}
            {search ? ` matching “${search}”` : ""}
          </p>
        </div>
        <div className="opal-media__actions">
          <MediaViewToggle />
          <a className="opal-media__upload" href={`${BASE}/create`}>
            <span aria-hidden="true">＋</span> Upload photo
          </a>
        </div>
      </header>

      <form className="opal-media__search" action={`${BASE}/grid`} method="get" role="search">
        <input type="search" name="search" defaultValue={search} placeholder="Search by description or file name…" aria-label="Search photos" />
        {search ? (
          <a className="opal-media__clear" href={`${BASE}/grid`}>
            Clear
          </a>
        ) : null}
      </form>

      {result.docs.length === 0 ? (
        <div className="opal-media__empty">
          <p>{search ? "No photos match that search." : "No photos yet — upload your first one."}</p>
        </div>
      ) : (
        <ul className="opal-media__grid">
          {result.docs.map((doc) => {
            const src = thumbnail(doc);
            const details = [
              doc.width && doc.height ? `${doc.width}×${doc.height}` : null,
              formatBytes(doc.filesize),
            ].filter(Boolean);
            return (
              <li key={doc.id}>
                <a className="opal-media-card" href={`${BASE}/${doc.id}`}>
                  <span className="opal-media-card__thumb">
                    {src ? <img src={src} alt="" loading="lazy" decoding="async" /> : null}
                  </span>
                  <span className="opal-media-card__body">
                    <span className="opal-media-card__title">{doc.alt || doc.filename}</span>
                    <span className="opal-media-card__meta">
                      <span className="opal-media-card__file">{doc.filename}</span>
                      {details.length ? <span>{details.join(" · ")}</span> : null}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      )}

      {result.totalPages > 1 ? (
        <nav className="opal-media__pages" aria-label="Pages">
          {result.hasPrevPage ? <a href={pageHref(page - 1, search)}>← Previous</a> : <span />}
          <span>
            Page {result.page} of {result.totalPages}
          </span>
          {result.hasNextPage ? <a href={pageHref(page + 1, search)}>Next →</a> : <span />}
        </nav>
      ) : null}
    </Gutter>
  );
}
