export default function manifest() {
  return {
    name: "Banantara Joury",
    short_name: "Banantara",
    description:
      "Layanan produk dan jasa terintegrasi dari Banantara Joury melalui divisi MMD, ISD, dan CAD.",
    start_url: "/",
    display: "standalone",
    background_color: "#feffde",
    theme_color: "#52734d",
    icons: [
      {
        src: "/img/banantara.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
