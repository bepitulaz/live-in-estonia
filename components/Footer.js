import { Row, Col } from "react-bootstrap";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="mt-5">
      <Row>
        <Col>
          <div className="pt-3 mt-3 copyright-section">
            <p className="text-center fw-light">
              A project by{" "}
              <a
                href="https://ko-fi.com/asepbagja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fw-bold"
              >
                Asep Bagja Priandana
              </a>{" "}
              &copy; {date.getFullYear()}.
              <br />
              See the statistic of this site in{" "}
              <a
                href="https://plausible.io/liveinestonia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fw-bold"
              >
                Plausible dashboard.
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
