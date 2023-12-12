import {
  Facebook,
  Instagram,
  LinkIcon,
  Twitter,
} from "@/app/_components/atoms";
import { CommonProps } from "@/app/_components/types";

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
