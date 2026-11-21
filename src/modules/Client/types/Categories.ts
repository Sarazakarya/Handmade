export type Category = {
  id: number;
  slug: string;
  name: string;
  icon: string;
  description: string;
  image: string ; 
  count: number;
};

export type CategoriesResponse = {
  total: number;
  items: Category[];
};
