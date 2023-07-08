import type { User } from "firebase/auth";

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
  id: number;
};

export type AllActionsTypes = {
  ADD_TO_BASKET: ProductItem;
  REMOVE_FROM_BASKET: { index: number };
  SET_USER: { user: User | null };
  // A: { valueB: string, otherValue: string } // if you uncomment this line you'll get a warning
};

export type SingleAction = keyof AllActionsTypes;

export type Action = {
  [T in SingleAction]: { type: T } & AllActionsTypes[T];
}[SingleAction];

export type Data = {
  basket: ProductItem[];
  user: User | null;
};
