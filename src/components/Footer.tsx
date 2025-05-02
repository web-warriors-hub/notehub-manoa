/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="py-5 custom-footer text-center">
    Department of Information and Computer Sciences
    <br />
    University of Hawaii at Manoa
    <br />
    Honolulu, HI 96822
    <br />
    <br />
    Organization:{' '}
    <a
      href="https://web-warriors-hub.github.io"
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-underline text-primary"
    >
      https://web-warriors-hub.github.io
    </a>
    <br />
    <i>Developers: Andrea Murillo, Catalina Barnes, Landon Kihe, Milan Bukovics, Nalani</i>
  </footer>
);

export default Footer;
