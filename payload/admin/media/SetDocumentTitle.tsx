"use client";

import { useEffect } from "react";

/** Payload doesn't yet title custom views ("TODO: handle custom routes"), so set it here. */
export function SetDocumentTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}
