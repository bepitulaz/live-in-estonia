import { promises as fs } from "fs";
import path from "path";
import orderBy from "lodash/orderBy";
import map from "lodash/map";

async function getSortedImages() {
  const contentDir = path.join(process.cwd(), "data");
  const filePath = path.join(contentDir, "posts.json");
  
  try {
    const posts = await fs.readFile(filePath);
    const jsonData = JSON.parse(posts);
    const postsWithHref = map(jsonData.posts, (post) => {
      return {
        ...post,
        detailHref: `/photo/${post.id}`,
      };
    });

    return orderBy(postsWithHref, ["date"], ["desc"]);
  } catch (error) {
    console.error(error.message, error.name);
  }
}

module.exports = {
  getSortedImages,
};
