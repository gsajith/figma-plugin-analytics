"use client";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect } from "react";

function SendEventPage() {
  const searchParams = useSearchParams();
  const eventName = searchParams.get("eventName");
  const gtagID = searchParams.get("gtagID");

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
      <Script src="injectGtag.js" />
      Sending event &quot;{eventName}&quot; to GA4
    </div>
  );
}

const SuspenseWrapper = () => (
  <Suspense>
    <SendEventPage />
  </Suspense>
);
export default SuspenseWrapper;
