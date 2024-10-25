import "./FooterCss.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex links">
        <li>
          <a href="#hero">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p className="copyright">© 2024 Mohamed Elshaowky.All rights reserved.</p>
    </footer>
  );
};

export default Footer;
