import { Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";
import Footer from "./Footer";

const BREAKPOINTS_COLUMNS = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function HomeLayout({ children }) {
  return (
    <Container>
      <header>
        <Row className="mt-5 mb-5">
          <Col className="text-center">
            <h1 className="brand-title">Live In Estonia</h1>
            <h3 className="lead">
              Photographing the nature and the daily life of living in Estonia
            </h3>
          </Col>
        </Row>
      </header>
      <main>
        <Row>
          <Col>
            <Masonry
              breakpointCols={BREAKPOINTS_COLUMNS}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {children}
            </Masonry>
          </Col>
        </Row>
      </main>
      <Footer />
    </Container>
  );
}
