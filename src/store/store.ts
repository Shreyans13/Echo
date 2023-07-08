import { derived, writable, type Readable } from "svelte/store";
import type { Data, Action, ProductItem } from "../types/store";
// import { Data, Action } from "../types/store";

class State {
  public subscribe;
  private _set: Function;
  private _update: Function;
  // basket: string[];
  data: Data = {
    basket: [],
    user: null,
  };

  private genUniqueProductID() {
    let result = "";
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const _length = 35;
    for (let i = _length; i > 0; i -= 1)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  constructor() {
    let { subscribe, set, update } = writable(this.data);
    this.subscribe = subscribe;
    this._set = set;
    this._update = update;
  }

  public evalAction(action: Action): void {
    console.log("evalAction ==> ", action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        this._update((n: Data) => {
          n.basket.push({
            title: action.title,
            image: action.image,
            price: action.price,
            rating: action.rating,
            id: action.id,
          });
          return n;
        });
        break;
      case "REMOVE_FROM_BASKET":
        this._update((n: Data) => {
          console.log("action.index =>>>>", action.index);
          const result = {
            ...n,
            basket: n.basket.filter((_, index) => !(index == action.index)),
          };
          console.log(result);
          return result;
        });
        break;
      case "SET_USER":
        this._update((n: Data) => {
          n.user = action.user;
          return n;
        });
        break;
      // this._set(action.user);
    }
  }

  // public getTotalAmount: number = 0;
  public getTotalAmount = (): Readable<number> => {
    return derived(state, ($data) =>
      $data.basket.reduce((i: number, a: ProductItem): number => i + a.price, 0)
    );
  };
}

export const state: State = new State();
