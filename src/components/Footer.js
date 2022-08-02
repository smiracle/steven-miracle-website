import linkedInIcon from "../assets/img/svg-linkedin.svg";
import bitbucketIcon from "../assets/img/svg-bitbucket-white.svg";
import itchIcon from "../assets/img/svg-itch-white.svg";

function Footer() {
  const navIcons = [linkedInIcon, bitbucketIcon, itchIcon];
  const socialUrls = [
    "https://www.linkedin.com/in/steven-miracle/",
    "https://bitbucket.org/smiracle/",
    "https://stemir.itch.io/",
  ];

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
        <div className="footer-text">Designed & Built by Steven Miracle</div>
      </footer>
    </div>
  );
}

export default Footer;
