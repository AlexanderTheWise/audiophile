import { Facebook, Instagram, LinkIcon, Twitter } from "@/_components/atoms";
import { CommonProps } from "@/_components/types";

const SocialLinks = ({ className = "" }: CommonProps) => (
  <ul className={`${className} flex items-center column-gap-24px`}>
    <li>
      <LinkIcon ariaLabel="facebook">
        <Facebook />
      </LinkIcon>
    </li>
    <li>
      <LinkIcon ariaLabel="twitter">
        <Twitter />
      </LinkIcon>
    </li>
    <li>
      <LinkIcon ariaLabel="instagram">
        <Instagram />
      </LinkIcon>
    </li>
  </ul>
);

export default SocialLinks;
