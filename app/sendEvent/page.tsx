"use client";
import Script from "next/script";
import { useEffect } from "react";
import "../globals.css";
import Link from "next/link";

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

  useEffect(() => {
    if (!eventName || !gtagID) {
      console.warn(
        "WARNING: Missing params to log Figma Plugin Analytics event, one of — eventName, gtagID"
      );
    }
  }, [eventName, gtagID]);

  return (
    <div>
      {eventName && gtagID ? (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagID}`}
          />
          <Script src="injectGtag.js" />
          Sending event <span>{eventName}</span> to GA4 ID <span>{gtagID}</span>
          .<br />
          <br />
          Source URL is <span>{window.location.href}</span>
        </>
      ) : (
        <>
          <p>You are missing either an eventName or a gtagID.</p>
          <p>
            <Link href="/">See instructions.</Link>
          </p>
        </>
      )}
    </div>
  );
}
