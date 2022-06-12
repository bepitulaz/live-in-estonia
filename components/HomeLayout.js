import { Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-css";

const BREAKPOINTS_COLUMNS = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function HomeLayout({ children }) {
  const date = new Date();

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
      <footer className="mt-5">
        <Row>
          <Col>
            <div className="pt-3 mt-3 copyright-section">
              <p className="text-center fw-light">
                A project by{" "}
                <a
                  href="https://www.asepbagja.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark fw-bold"
                >
                  Asep Bagja Priandana
                </a>{" "}
                &copy; {date.getFullYear()}
              </p>
            </div>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}
