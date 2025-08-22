// app/layout.js
import "./globals.css";
import Link from "next/link";
import { Github } from "lucide-react";

export const metadata = {
  title: "SwarmAid",
  description: "AI-powered Disaster Response Dashboard",
  icons: {
    icon: "SwarmAid_logo.ico", // or /favicon.ico
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-100 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="bg-gray backdrop-blur border-b border-gray-800 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              SwarmAid
            </Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/dashboard" className="hover:text-blue-400">
                Dashboard
              </Link>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-gray-800 text-gray-400 text-sm">
          <p>
            Built with ❤️ & passion during Hackathon 2025 ·{" "}
            <a
              href="https://github.com/Muhammad-Hashir-55/SwarmAid"
              target="_blank"
              className="hover:text-blue-400 inline-flex items-center gap-1"
            >
              <Github className="h-4 w-4" /> GitHub Repo
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
