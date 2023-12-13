import { CommonContainerProps } from "@/app/_components/types";
import Image from "next/image";
import { ResponsiveImage } from "@/app/models/Product";
import "./containers.scss";

export const WrapperMain = ({
  children,
  className = "",
}: CommonContainerProps) => (
  <div className={`${className} wrapper flex-col`}>{children}</div>
);

export const WrapperHome = ({
  children,
  className = "",
}: CommonContainerProps) => (
  <div className={`${className} wrapper--home flex-col`}>{children}</div>
);

export const WrapperCategory = ({
  children,
  className = "",
}: CommonContainerProps) => (
  <div className={`${className} wrapper--category flex-col`}>{children}</div>
);

export const WrapperProduct = ({
  children,
  className = "",
}: CommonContainerProps) => (
  <main className={`${className} wrapper--product`}>{children}</main>
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
  image: { mobile, tablet, desktop },
  name,
}: CommonContainerProps & { image: ResponsiveImage; name: string }) => (
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

    <div className="responsive-image-detail__content">{children}</div>
  </section>
);
