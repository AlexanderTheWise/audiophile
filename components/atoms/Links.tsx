import Link from "next/link";
import { CommonLinkProps } from "../types";
import { ArrowRight } from ".";

export const LinkPrimary = ({
  className = "",
  href = "#",
}: CommonLinkProps) => (
  <Link href={href} className={`${className} btn--primary`}>
    see product
  </Link>
);

export const LinkSecondary = ({
  className = "",
  href = "#",
}: CommonLinkProps) => (
  <Link href={href} className={`${className} btn--secondary`}>
    see product
  </Link>
);

export const LinkTertiary = ({
  className = "",
  href = "#",
}: CommonLinkProps) => (
  <Link href={href} className={`${className} btn--tertiary`}>
    shop <ArrowRight />
  </Link>
);

export const LinkQuaternary = ({
  className = "",
  href = "#",
  children,
}: CommonLinkProps) => (
  <Link href={href} className={`${className} text--sub text--white to-brand`}>
    {children}
  </Link>
);

export const LinkIcon = ({
  className = "",
  href = "~#",
  children,
  ariaLabel,
}: CommonLinkProps & { ariaLabel: string }) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    className={`${className} text--white to-brand`}
  >
    {children}
  </Link>
);