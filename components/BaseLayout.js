import Link from "next/link";
import { Container, Navbar, Row, Col } from "react-bootstrap";

export default function BaseLayout({ children }) {
  const date = new Date();

  return (
    <>
      <header>
        <Navbar bg="light">
          <Container className="justify-content-center">
            <Link href="/" passHref>
              <Navbar.Brand className="brand-title">
                Live In Estonia
              </Navbar.Brand>
            </Link>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer>
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
    </>
  );
}
