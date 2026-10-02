"use client";

import { useState, useEffect } from "react";

export default function IntroOverlay() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem("bj_intro_seen");
    if (seen) {
      setPhase("completed");
    }
  }, []);

  const handleTrigger = () => {
    if (phase !== "idle") return;
    setPhase("loading");

    setTimeout(() => {
      setPhase("expanding");
    }, 1200);

    setTimeout(() => {
      setPhase("revealing");
    }, 2000);

    setTimeout(() => {
      setPhase("completed");
      sessionStorage.setItem("bj_intro_seen", "1");
    }, 2800);
  };

  if (!mounted || phase === "completed") return null;

  return (
    <div
      className={`bj-intro-overlay phase-${phase}`}
      aria-live="polite"
      role="dialog"
      aria-label="PT Banantara Joury Selamat Datang"
    >
      <div className="bj-intro-curtain" />

      <div className="bj-intro-center">
        {phase === "idle" && (
          <button
            type="button"
            className="bj-intro-trigger"
            onClick={handleTrigger}
            aria-label="Klik untuk masuk ke website PT Banantara Joury"
          >
            <div className="bj-intro-logo-wrap">
              <img
                src="/img/banantara.png"
                alt="Logo PT Banantara Joury"
                className="bj-intro-logo-bounce"
                width="240"
                height="184"
              />
            </div>
            <div className="bj-intro-prompt">
              <span className="bj-intro-prompt-text">Klik Logo untuk Masuk</span>
              <span className="bj-intro-prompt-sub">PT Banantara Joury</span>
            </div>
          </button>
        )}

        {phase === "loading" && (
          <div className="bj-intro-loading-box">
            <div className="bj-intro-logo-wrap pulse">
              <img
                src="/img/banantara.png"
                alt="Logo PT Banantara Joury"
                className="bj-intro-logo-loading"
                width="240"
                height="184"
              />
            </div>
            <div className="bj-intro-progress-bar">
              <div className="bj-intro-progress-fill" />
            </div>
            <span className="bj-intro-loading-text">Menghubungkan Ekosistem...</span>
          </div>
        )}

        {(phase === "expanding" || phase === "revealing") && (
          <div className="bj-intro-swallow-container">
            <img
              src="/img/banantara.png"
              alt="Logo PT Banantara Joury"
              className="bj-intro-swallow-logo"
              width="240"
              height="184"
            />
          </div>
        )}
      </div>
    </div>
  );
}
