"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function SendEventPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const eventName = searchParams["eventName"];
  const gtagID = searchParams["gtagID"];

  useEffect(() => {
    if (typeof window !== "undefined" && gtagID) {
      localStorage.setItem("gtagID", gtagID);
    }
  }, [gtagID]);

  useEffect(() => {
    if (typeof window !== "undefined" && eventName) {
      localStorage.setItem("eventName", eventName);
    }
  }, [eventName]);

  return (
    <div>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagID}`}
      />
      <Script src="injectGtag.js" />
      Sending event &quot;{eventName}&quot; to GA4
    </div>
  );
}
