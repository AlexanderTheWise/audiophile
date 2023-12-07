import { LinkQuaternary } from "@/components/atoms";
import { CommonProps } from "@/components/types";

const PagesLinks = ({ className = "" }: CommonProps) => (
  <nav className={className}>
    <ul className="flex column-gap-34px row-gap-24px">
      <li>
        <LinkQuaternary>home</LinkQuaternary>
      </li>
      <li>
        <LinkQuaternary>headphones</LinkQuaternary>
      </li>
      <li>
        <LinkQuaternary>speakers</LinkQuaternary>
      </li>
      <li>
        <LinkQuaternary>earphones</LinkQuaternary>
      </li>
    </ul>
  </nav>
);

export default PagesLinks;
