import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Lester Mayuga | Senior Agile Software Engineer",
  description:
    "Senior Agile Software Engineer and Senior Full Stack Developer with 11+ years building enterprise web applications using React.js, Next.js, Node.js, and REST APIs.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%2305070b'/%3E%3Ctext x='32' y='41' text-anchor='middle' font-size='23' font-family='Arial' font-weight='700' fill='%2367e8f9'%3EJL%3C/text%3E%3C/svg%3E",
  },
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
