import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Qymo — A solutions studio that ships",
    short_name: "Qymo",
    description:
      "Qymo is a Nigerian product studio that designs, builds and ships real software solutions. Makers of Haja.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdf6ec",
    theme_color: "#fdf6ec",
    icons: [
      {
        src: "/mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
