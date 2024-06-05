"use client";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <h1>Figma Plugin Analytics Proxy</h1>
      <p>
        Use this tool by making a request to{" "}
        <code style={{ padding: 8, background: "#1f2038", color: "white" }}>
          {window.location.href}sendEvent?eventName=
          <span>NAME</span>&gtagID=
          <span>GTAGID</span>
        </code>
      </p>
      where:
      <ul>
        <li>
          <span>NAME</span> is the name of the event you want to log
        </li>
        <li>
          <span>GTAGID</span> is the GA4 measurement ID associated with your
          plugin
        </li>
      </ul>
    </div>
  );
}
