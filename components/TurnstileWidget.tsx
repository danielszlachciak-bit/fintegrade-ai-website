"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

type TurnstileOptions = {
  sitekey: string;
  theme?: "light" | "dark" | "auto";
  "response-field"?: boolean;
  callback: (token: string) => void;
  "expired-callback"?: () => void;
  "error-callback"?: () => void;
};

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: TurnstileOptions
  ) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileWidgetProps = {
  onToken: (token: string) => void;
};

export function TurnstileWidget({
  onToken,
}: TurnstileWidgetProps) {
  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);

  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  const renderWidget = useCallback(() => {
    if (
      !siteKey ||
      !containerRef.current ||
      !window.turnstile ||
      widgetIdRef.current
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(
      containerRef.current,
      {
        sitekey: siteKey,
        theme: "light",

        // Token obsługujemy sami przez callback.
        // Cloudflare nie doda pola cf-turnstile-response
        // do formularza.
        "response-field": false,

        callback: (token: string) => {
          onTokenRef.current(token);
        },

        "expired-callback": () => {
          onTokenRef.current("");
        },

        "error-callback": () => {
          onTokenRef.current("");
        },
      }
    );
  }, [siteKey]);

  useEffect(() => {
    renderWidget();

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  if (!siteKey) {
    return (
      <p className="formHint">
        Weryfikacja bezpieczeństwa jest chwilowo niedostępna.
      </p>
    );
  }

  return (
    <>
      <Script
        id="cloudflare-turnstile-script"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />

      <div
        ref={containerRef}
        className="turnstile"
        aria-label="Weryfikacja bezpieczeństwa"
      />
    </>
  );
}
