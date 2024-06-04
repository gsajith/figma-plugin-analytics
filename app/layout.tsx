import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Figma Plugin GA Tracker",
  description:
    "Proxy plugin interaction events from Figma plugin sandbox to GA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
