import { CommonContainerProps, ResponsiveImage } from "@/app/_components/types";
import Image from "next/image";
import "./containers.scss";

export const MainHome = ({
  children,
  className = "",
}: CommonContainerProps) => (
  <main className={`${className} main--home flex-col`}>{children}</main>
);

export const MainCategory = ({
  children,
  className = "",
}: CommonContainerProps) => (
  <main className={`${className} main--category`}>{children}</main>
);

export const MainProduct = ({
  children,
  className = "",
}: CommonContainerProps) => (
  <main className={`${className} main--product`}>{children}</main>
);

export const ResponsiveCenterToLeft = ({
  className = "",
  children,
}: CommonContainerProps) => (
  <div
    className={`${className} flex-col items-center row-gap-24px center-to-left`}
  >
    {children}
  </div>
);

export const GreyBox = ({ children, className = "" }: CommonContainerProps) => (
  <div className={`${className} greybox`}>{children}</div>
);

export const CategoriesGroupBox = ({
  children,
  className = "",
}: CommonContainerProps) => (
  <ul className={`${className} categories-group-box flex-col row-gap-16px`}>
    {children}
  </ul>
);

export const ResponsiveImageDetail = ({
  children,
  className,
  image: { name, mobile, tablet, desktop },
}: CommonContainerProps & { image: ResponsiveImage }) => (
  <section
    className={`${className} responsive-image-detail flex-col items-center row-gap-32px`}
  >
    <picture>
      <source
        srcSet={desktop}
        media="(min-width: 1440px)"
        width="540"
        height="560"
      />
      <source srcSet={tablet} media="(min-width: 768px)" />
      <Image src={mobile} alt={name} width="654" height="704" />
    </picture>

    {children}
  </section>
);
