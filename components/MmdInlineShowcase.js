"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";

export default function MmdInlineShowcase({ videos }) {
  const [active, setActive] = useState(0);
  const videoRef = useRef(null);
  const current = videos[active] ?? videos[0];

  return (
    <div className="bj-gallery-group">
      <div className="bj-gallery-group-head">
        <div>
          <span className="bj-gallery-code">VIDEO</span>
          <h4>{current.title}</h4>
        </div>
        <p>{current.description}</p>
      </div>

      <Reveal>
        <div className="bj-video-player" style={{ maxWidth: "880px", margin: "0 auto" }}>
          <video
            ref={videoRef}
            key={current.src}
            className="bj-video-el"
            src={current.src}
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </Reveal>

      {videos.length > 1 ? (
        <div className="bj-video-list" style={{ maxWidth: "880px", margin: "20px auto 0" }}>
          {videos.map((video, index) => (
            <button
              key={video.src}
              type="button"
              className={`bj-video-item${index === active ? " is-active" : ""}`}
              onClick={() => setActive(index)}
            >
              <span className="bj-video-item-cat">{video.category}</span>
              <strong>{video.title}</strong>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
