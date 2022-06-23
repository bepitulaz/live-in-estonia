import Head from "next/head";
import HomeLayout from "../components/HomeLayout";
import PhotoCard from "../components/PhotoCard";
import { getSortedImages } from "../utils/utils";

export async function getStaticProps(context) {
  const data = await getSortedImages();

  return {
    props: {
      posts: data,
    },
  };
}

export default function Home({ posts }) {
  return (
    <HomeLayout>
      <Head>
        <title>Home | Live In Estonia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Photographing the nature and the daily life of living in Estonia."
        />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Live In Estonia" />
        <meta
          name="og:description"
          property="og:description"
          content="Photographing the nature and the daily life of living in Estonia."
        />
        <meta property="og:site_name" content="Live In Estonia" />
        <meta property="og:url" content="https://www.liveinestonia.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Live In Estonia" />
        <meta
          name="twitter:description"
          content="Photographing the nature and the daily life of living in Estonia."
        />
        <meta name="twitter:site" content="@liveinestonia" />
        <meta name="twitter:creator" content="@liveinestonia" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content={posts[0].imageMetaUrl} />
        <meta name="twitter:image" content={posts[0].imageMetaUrl} />
        <link rel="canonical" href="https://www.liveinestonia.com" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {posts.map((post, index) => {
        return <PhotoCard key={`photo-${index}`} post={post} />;
      })}
    </HomeLayout>
  );
}
