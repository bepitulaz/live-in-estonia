import { getSortedImages } from "../utils/utils";

export async function getServerSideProps(context) {
  const BASE_URL = "https://www.liveinestonia.com";
  const data = await getSortedImages();

  const staticPaths = [{
    url: BASE_URL,
    lastUpdateDate: data[0].lastUpdateDate,
  }];
  const dynamicPaths = data.map((post) => ({
    url: `${BASE_URL}/photo/${post.id}`,
    lastUpdateDate: post.lastUpdateDate
  }));
  const paths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${paths
      .map((item) => {
        return `
          <url>
            <loc>${item.url}</loc>
            <lastmod>${item.lastUpdateDate}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })
      .join("")}
    </urlset>
  `;

  context.res.setHeader("Content-Type", "text/xml");
  context.res.write(sitemap);
  context.res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}