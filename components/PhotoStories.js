import Image from "next/image";
import Link from "next/link";
import Stories from 'react-insta-stories';

export default function PhotoStories({ stories }) {
  console.log("stories at photostories", stories);
  return (
    <>
    <Image src={stories.url} alt={stories.altText} />
    </>
  );
}
