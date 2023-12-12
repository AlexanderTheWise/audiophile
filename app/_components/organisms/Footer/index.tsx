import { CommonProps } from "@/app/_components/types";
import { Audiophile, ParWTrans } from "@/app/_components/atoms";
import { PagesLinks, SocialLinks } from "@/app/_components/molecules";
import "./footer.scss";

const Footer = ({ className = "" }: CommonProps) => {
  return (
    <footer className={`${className} footer flex-col`}>
      <div className="footer__h-line"></div>
      <div className="footer__logo-nav flex flex-wrap items-center content-space-between column-gap-16px row-gap-48px">
        <Audiophile />
        <PagesLinks className="footer__nav" />
      </div>
      <div className="footer__contact row-gap-48px">
        <ParWTrans>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </ParWTrans>

        <small className="text--white-transparent text--bold">
          Copyright 2021. All Rights Reserved
        </small>

        <SocialLinks className="content-center" />
      </div>
    </footer>
  );
};

export default Footer;
