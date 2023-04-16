import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";
import Footer from "./Footer";

export default function BaseLayout({ children }) {
  return <>
    <header>
      <Navbar bg="light">
        <Container className="justify-content-center">
          <Link href="/" passHref legacyBehavior>
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
    <Footer />
  </>;
}
