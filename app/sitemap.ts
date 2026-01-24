import type { MetadataRoute } from "next";

const BASE_URL = "https://www.stkysites.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/portfolio",
    "/services",
    "/services/custom-coded",
    "/services/seo",
    "/services/shopify",
    "/services/wordpress",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}

