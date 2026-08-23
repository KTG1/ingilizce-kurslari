import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  agentRules: false,
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: "/ingilizce-kurslari",
        assetPrefix: "/ingilizce-kurslari/",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
