export interface ProductOverview {
  name: string;
  description: string;
  slug: string;
}

export interface Other extends Omit<ProductOverview, "description"> {
  image: ResponsiveImage;
}

export interface Product extends Other, ProductOverview {
  id: number;
  category: string;
  categoryImage: ResponsiveImage;
  new: boolean;
  price: number;
  features: string;
  includes: Item[];
  gallery: Gallery;
  others: Other[];
}

export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Item {
  quantity: number;
  item: string;
}

export interface Gallery {
  first: ResponsiveImage;
  second: ResponsiveImage;
  third: ResponsiveImage;
}
