import { socialUrls } from "./NavBar";
import { navIcons } from "./NavBar";

function Footer() {
  return (
    <div className="footer-outer">
      <footer className="footer">
        <div className="social-icon">
          {navIcons.map((icon, index) => {
            return (
              <a key={index} href={socialUrls[index]}>
                <img src={icon} alt="" />
              </a>
            );
          })}
        </div>
        <div className="footer-text">
          <a href="https://github.com/smiracle/steven-miracle-website">Designed & Built by Steven Miracle</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
