import HomeLayout from "../components/HomeLayout";
import PhotoCard from "../components/PhotoCard";
import { getSortedImages } from "../utils/utils";

export async function getStaticProps(context) {
  const data = await getSortedImages();

  return {
    props: {
      posts: data,
    }
  };
}

export default function Home({ posts }) {
  return (
    <HomeLayout>
      {posts.map((post, index) => {
        return <PhotoCard key={`photo-${index}`} post={post} />;
      })}
    </HomeLayout>
  );
}
