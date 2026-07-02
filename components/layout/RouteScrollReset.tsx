"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

function scrollToTopInstant() {
  const html = document.documentElement;
  const previousBehavior = html.style.scrollBehavior;

  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);

  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previousBehavior;
  });
}

export function RouteScrollReset() {
  const router = useRouter();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => scrollToTopInstant();

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
}
