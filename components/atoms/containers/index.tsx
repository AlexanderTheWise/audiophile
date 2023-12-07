import { CommonContainerProps } from "@/components/types";
import "./containers.scss";

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
  <ul className={`${className} categories-group-box`}>{children}</ul>
);
