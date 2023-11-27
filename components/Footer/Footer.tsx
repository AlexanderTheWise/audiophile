import Logo from "../Icons/Logo";
import MainNavigationLinks from "../Navigation/Links/MainNavigationLinks/MainNavigationLinks";
import SocialMediaLinks from "../Navigation/Links/SocialMediaLinks/SocialMediaLinks";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="flex--col footer">
      <div className="footer__h-line"></div>
      <div className="flex flex-wrap flex-content-between footer__logo-mainnav">
        <Logo />
        <MainNavigationLinks />
      </div>
      <div className="footer__site-info">
        <p className="text--n--white">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <small className="text--n--white text--n--bold">
          Copyright 2021. All Rights Reserved
        </small>
        <SocialMediaLinks />
      </div>
    </footer>
  );
};

export default Footer;
