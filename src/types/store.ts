export type Rating = 0 | 1 | 2 | 3 | 4 | 5;
// export interface PropType {
//   title: string;
//   image: string;
//   price: number;
//   rating: Rating;
// }

export type ProductItem = {
  title: string;
  image: string;
  price: number;
  rating: Rating;
};

export type AllActionsTypes = {
  A: { valueA: string };
  ADD_TO_BASKET: ProductItem;
  // A: { valueB: string, otherValue: string } // if you uncomment this line you'll get a warning
};

export type SingleAction = keyof AllActionsTypes;
export type Action = {
  [T in SingleAction]: { type: T } & AllActionsTypes[T];
}[SingleAction];

export type Data = {
  basket: ProductItem[];
};
