import { Card } from "react-bootstrap";
import Image from "next/legacy/image";
import Link from "next/link";

export default function PhotoCard({ post }) {
  return (
    <Card className="card-custom">
      <Card.Body className="p-0">
        <Link href={post.detailHref} passHref title="Open the photo detail">

          <Image
            src={post.imageUrl}
            alt={post.altText}
            width={post.width / 2}
            height={post.height / 2}
            layout="responsive"
          />

        </Link>
      </Card.Body>
    </Card>
  );
}
