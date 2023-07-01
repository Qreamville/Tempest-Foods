export type ItemProps = {
  id: number;
  title: string;
  imageSrc: string;
  created_at: string;
  category: string;
  price: number;
};

export type FoodProps = {
  item: ItemProps;
};

export type CartItemProps = {
  id: number;
  title: string;
  imageSrc: string;
  created_at: string;
  category: string;
  price: number;
  quantity: number;
};

export type CartProps = {
  item: CartItemProps;
};
