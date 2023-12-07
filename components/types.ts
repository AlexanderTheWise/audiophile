export interface CommonProps {
  className?: string;
}

export interface CommonContainerProps extends CommonProps {
  children: React.ReactNode;
}

export interface CommonLinkProps extends Partial<CommonContainerProps> {
  href?: string;
  children?: React.ReactNode;
}

export interface CommonButtonProps extends CommonContainerProps {
  onClick: () => void;
}

export interface ProductOverview extends CommonProps {
  title: string;
  headline: string;
}

export interface Category {
  id: number;
  name: string;
  imageUrl: string;
}

export type Categories = Category[];

export interface CategoryLinkProps extends CommonProps {
  category: Omit<Category, "id">;
}
