import { CommonContainerProps } from "../types";

export const H1 = ({ className = "", children }: CommonContainerProps) => (
  <h1 className={`${className} text--white text--h1`}>{children}</h1>
);

export const H2 = ({ className = "", children }: CommonContainerProps) => (
  <h2 className={`${className} text--h2`}>{children}</h2>
);

export const H2White = ({ className = "", children }: CommonContainerProps) => (
  <H2 className={`${className} text--white`}>{children}</H2>
);

export const H3 = ({ className = "", children }: CommonContainerProps) => (
  <h3 className={`${className} text--h3`}>{children}</h3>
);

export const H4 = ({ className = "", children }: CommonContainerProps) => (
  <h4 className={`${className} text--h4`}>{children}</h4>
);

export const H5 = ({ className = "", children }: CommonContainerProps) => (
  <h5 className={`${className} text--h5`}>{children}</h5>
);

export const Over = ({ className = "", children }: CommonContainerProps) => (
  <p className={`${className} text--over`}>{children}</p>
);

export const OverBrand = ({
  className = "",
  children,
}: CommonContainerProps) => (
  <Over className={`${className} text--brand`}>{children}</Over>
);

export const OverWTrans = ({
  className = "",
  children,
}: CommonContainerProps) => (
  <Over className={`${className} text--white-transparent`}>{children}</Over>
);

export const Sub = ({ className = "", children }: CommonContainerProps) => (
  <p className={`${className} text--sub`}>{children}</p>
);

export const ParBTrans = ({
  className = "",
  children,
}: CommonContainerProps) => (
  <p className={`${className} text--black-transparent`}>{children}</p>
);

export const ParWTrans = ({
  className = "",
  children,
}: CommonContainerProps) => (
  <p className={`${className} text--white-transparent`}>{children}</p>
);
