import Head from "next/head";
import HomeLayout from "../components/HomeLayout";
import { getSortedImages } from "../utils/utils";
import Image from "next/image";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
// import required modules
import { Lazy, Pagination, Navigation, EffectCards } from "swiper";

export async function getStaticProps(context) {
  const data = await getSortedImages();

  return {
    props: {
      posts: data,
      stories: data.slice(0, 4),
      latestalbum: data.slice(5, 10),
      latestarticle: data.slice(11, 15),
      latestplace: data.slice(16, 22),
    },
  };
}

export default function Home({
  posts,
  stories,
  latestalbum,
  latestarticle,
  latestplace,
}) {
  const storiesData = stories.map(function (data) {
    return { url: data.imageUrl, alt: data.altText };
  });
  const latestalbumData = latestalbum.map(function (data) {
    return { url: data.imageUrl, alt: data.altText };
  });
  const latestarticleData = latestarticle.map(function (data) {
    return { url: data.imageUrl, alt: data.altText };
  });
  const latestplaceData = latestplace.map(function (data) {
    return { url: data.imageUrl, alt: data.altText };
  });
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

      {/* Main Swiper */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Lazy, Pagination, Navigation]}
        className="mainSwiper"
      >
        {storiesData.map((story, index) => {
          return (
            <SwiperSlide
              key={`photo-${index}`}
              className="aspect-h-3 aspect-w-2 relative"
            >
              <div
                style={{
                  backgroundImage: "url(" + `${story.url}` + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="p-4">
                <p
                  className={
                    "absolute left-0 bottom-10 text-white p-4 text-lg font-medium"
                  }
                  style={{
                    textShadow: "2px 2px 6px rgba(0,0,0,0.80)",
                  }}
                >
                  {story.alt}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <p className="text-4xl font-thin mt-16 p-4">
        Enjoy the beautiful of Estonia, in Albums
      </p>
      {/* <h5 className="font-bold text-2xl p-4 mt-4">Latest Album</h5> */}

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={false}
        navigation={true}
        modules={[Navigation]}
        className="albumSwiper aspect-w-2 aspect-h-3 mt-4"
      >
        {latestalbumData.map((album, index) => {
          return (
            <SwiperSlide key={`album-${index}`} className="first:ml-4">
              <div
                className="aspect-h-3 aspect-w-2"
                style={{
                  backgroundImage: "url(" + `${album.url}` + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div>
                <p className=" font-medium text-black z-10 relative mt-2">
                  Album {index}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <h3 className="text-4xl font-thin mt-16 p-4">
        Read the awesome story from the Estonian
      </h3>

      <div className="mx-4 mt-8">
      <div className="aspect-w-16 aspect-h-10">
        <Image
          alt="highlight story image"
          layout="fill"
          src="/img/AIw9sAw9Xrke8EMWDosJDzhX5hifoGDpIhIScu0HuHI7xERn9u9-yGDsmAQATvvrhfzNXZm7kpkZ-30aX8xH3507JpHZJkKvbg.jpg"
        />
      </div>
      <h5 className="text-xl font-medium my-4">Highlight Story, use short and nice title</h5>
      <p>Estonia is one of Europe most spacious countries. With a territory roughly matching that of the Netherlands, it is home to only 1.3 million people.</p>
      <a href="#" className="font-medium underline cursor-pointer mt-4 block">Continue Reading</a>
      </div>

      <div className="p-16 bg-sky-50 mt-8">
        <h5 className="text-center font-light text-sky-800 text-2xl">Selected stories</h5>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="articleSwiper mt-8"
        >
          {latestarticleData.map((article, index) => {
            return (
              <SwiperSlide
                key={`article-${index}`}
                className="aspect-h-3 aspect-w-2"
              >
                <div
                  className="flex flex-col justify-center items-center"
                  style={{
                    backgroundImage: "url(" + `${article.url}` + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <p
                    className="font-light text-white z-10 relative mt-4 text-2xl px-4 text-center"
                    style={{
                      textShadow: "2px 2px 6px rgba(0,0,0,0.80)",
                    }}
                  >
                    Use short and good title for article
                  </p>
                  <a
                    href="#"
                    className="px-3 py-1 bg-black text-white block mt-4"
                  >
                    read story
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <h3 className="text-4xl font-thin mt-8 p-4">
        Explore the best places and landmarks in Estonia
      </h3>
      <p className="font-light p-4">In Estonia you are never more than a 30-minute drive away from a forest or a lake. The living environment is very clean, relaxed and safe.</p>
      <div className="grid grid-cols-6 p-4 gap-4">
        {latestplaceData.map((place, index) => {
          return (
            <div key={index} className="col-span-3">
              <Image
                src={place.url}
                alt={place.alt}
                layout="responsive"
                width="100%"
                height="100%"
              />
            </div>
          );
        })}
      </div>
      <a href="#" className="mx-4 block text-center text-xl px-5 py-3 text-white bg-black">Explore Gallery</a>
    </HomeLayout>
  );
}
