import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: projectRoot,
  },
  trailingSlash: true,
};

export default nextConfig;
