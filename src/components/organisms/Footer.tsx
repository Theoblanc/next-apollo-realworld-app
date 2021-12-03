import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link as="/" href="/">
          <a className="logo-font">conduit</a>
        </Link>
        <span className="attribution">
          An interactive learning project from
          <Link as="https://thinkster.io" href="https://thinkster.io">
            <a>Thinkster</a>
          </Link>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
