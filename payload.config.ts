import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Faqs } from "./payload/collections/Faqs";
import { Media } from "./payload/collections/Media";
import { Services } from "./payload/collections/Services";
import { Testimonials } from "./payload/collections/Testimonials";
import { Users } from "./payload/collections/Users";
import { AboutPage } from "./payload/globals/AboutPage";
import { ClosingCta } from "./payload/globals/ClosingCta";
import { ContactPage } from "./payload/globals/ContactPage";
import { HomePage } from "./payload/globals/HomePage";
import { Footer } from "./payload/globals/Footer";
import { Header } from "./payload/globals/Header";
import { ServicePageSections } from "./payload/globals/ServicePageSections";
import { SiteSettings } from "./payload/globals/SiteSettings";
import { livePreview } from "./payload/livePreview";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    theme: "light",
    livePreview,
    meta: {
      titleSuffix: " — Opal Life Coaching",
      icons: [{ rel: "icon", type: "image/png", url: "/favicon-32x32.png" }],
    },
    components: {
      graphics: {
        Logo: "/payload/admin/Logo#Logo",
        Icon: "/payload/admin/Icon#Icon",
      },
      beforeNavLinks: ["/payload/admin/OpalNav#OpalNav"],
      providers: ["/payload/admin/PreviewSectionSync#PreviewSectionSync"],
      beforeLogin: ["/payload/admin/LoginIntro#LoginIntro"],
      beforeDashboard: ["/payload/admin/Welcome#Welcome"],
    },
    // The welcome dashboard (payload/admin/Welcome.tsx) replaces Payload's collection cards.
    dashboard: { widgets: [], defaultLayout: [] },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Services, Testimonials, Faqs, Media, Users],
  globals: [HomePage, AboutPage, ContactPage, Header, Footer, ClosingCta, ServicePageSections, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
    migrationDir: path.resolve(dirname, "migrations"),
    // Schema changes only via migrations (`yarn payload migrate:create`), so local
    // dev never pushes ad-hoc changes into the shared Neon database.
    push: false,
  }),
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: {
        media: {
          // Serve files straight from Blob so next/image can optimise them.
          disablePayloadAccessControl: true,
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      clientUploads: true,
    }),
  ],
  sharp,
});
