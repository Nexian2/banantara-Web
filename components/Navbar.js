"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Layanan" },
  { href: "#about", label: "Tentang Kami" },
  { href: "#why-us", label: "Keunggulan" },
  { href: "#divisi", label: "Divisi" },
  { href: "#workflow", label: "Alur Kerja" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const bar = document.getElementById("bj-loadbar");
    const onClick = (event) => {
      const anchor = event.target.closest("a[href^='#']");
      setOpen(false);
      if (!anchor || !bar) {
        return;
      }
      setLoading(true);
      bar.classList.add("bj-loading");
      window.setTimeout(() => {
        bar.classList.remove("bj-loading");
        setLoading(false);
      }, 700);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <div id="bj-loadbar" className="bj-loadbar" aria-hidden="true" />
      <nav className="bj-nav" aria-label="Navigasi utama">
        <div className="bj-nav-inner">
          <a className="bj-brand" href="#home">
            <img
              className="bj-brand-mark"
              src="/img/banantara.png"
              alt="Logo Banantara Joury"
              width="42"
              height="42"
            />
            <span>Banantara Joury</span>
          </a>
          <button
            type="button"
            className="bj-toggle"
            aria-expanded={open}
            aria-controls="bj-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {loading ? "Memuat" : open ? "Tutup" : "Menu"}
          </button>
          <ul id="bj-menu" className={`bj-menu${open ? " bj-open" : ""}`}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
