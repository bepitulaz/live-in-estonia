export default function Footer() {
  const date = new Date();

  return (
    <footer className="py-6">
      <div className="pt-3 mt-3 copyright-section">
        <p className="text-center">
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
          <span className="text-sm font-light">
            See the statistic of this site in{" "}
            <a
              href="https://plausible.io/liveinestonia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fw-bold"
            >
              Plausible dashboard.
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
