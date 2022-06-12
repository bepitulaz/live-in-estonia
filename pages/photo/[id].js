import _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Row, Col, Button } from "react-bootstrap";
import BaseLayout from "../../components/BaseLayout";
import { getSortedImages } from "../../utils/utils";

export async function getStaticPaths() {
  const data = await getSortedImages();
  return {
    paths: _.map(data, (post) => post.detailHref),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const data = await getSortedImages();
  const currentIndex = _.findIndex(data, { id: parseInt(id) });

  const getPrevHref = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      return null;
    }

    return data[prevIndex].detailHref;
  };

  const getNextHref = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= data.length) {
      return null;
    }

    return data[nextIndex].detailHref;
  };

  return {
    props: {
      post: _.find(data, { id: parseInt(id) }),
      nextHref: getNextHref(),
      prevHref: getPrevHref(),
    },
  };
}

export default function Photo({ post, nextHref, prevHref }) {
  return (
    <BaseLayout>
      <Head>
        <title>Home | Live In Estonia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={post?.altText} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Live In Estonia" />
        <meta
          name="og:description"
          property="og:description"
          content={post?.altText}
        />
        <meta property="og:site_name" content="Live In Estonia" />
        <meta
          property="og:url"
          content={`https://www.liveinestonia.com${post?.detailHref}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Live In Estonia" />
        <meta name="twitter:description" content={post?.altText} />
        <meta name="twitter:site" content="@liveinestonia" />
        <meta name="twitter:creator" content="@liveinestonia" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content={post?.imageUrl} />
        <meta name="twitter:image" content={post?.imageUrl} />
        <link
          rel="canonical"
          href={`https://www.liveinestonia.com${post?.detailHref}`}
        />

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
      <Row className="mt-5">
        <Col lg={{ span: 6, offset: 3 }}>
          <article>
            <Image
              src={post?.imageUrl}
              alt={post?.altText}
              width={post?.width}
              height={post?.height}
            />
            {!_.isEmpty(post?.altText) && (
              <section className="mt-3 description">
                <p>{post?.altText}</p>
              </section>
            )}

            <section className="d-flex justify-content-between mt-5">
              <div>
                {_.isEmpty(prevHref) ? (
                  <Button disabled variant="outline-dark">
                    No previous post
                  </Button>
                ) : (
                  <Link href={prevHref} passHref>
                    <Button variant="outline-dark">Previous post</Button>
                  </Link>
                )}
              </div>
              <div>
                {_.isEmpty(nextHref) ? (
                  <Button disabled variant="outline-dark">
                    No following post
                  </Button>
                ) : (
                  <Link href={nextHref} passHref>
                    <Button variant="outline-dark">Next post</Button>
                  </Link>
                )}
              </div>
            </section>
          </article>
        </Col>
      </Row>
    </BaseLayout>
  );
}
