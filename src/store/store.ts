import { writable } from "svelte/store";
import type { Data, Action } from "../types/store";
// import { Data, Action } from "../types/store";

export default class State {
  public subscribe: Function;
  private _set: Function;
  private _update: Function;
  // basket: string[];
  data: Data = {
    basket: [],
  };

  constructor() {
    let { subscribe, set, update } = writable(this.data);
    this.subscribe = subscribe;
    this._set = set;
    this._update = update;
  }

  public evalAction(action: Action): void {
    console.log("evalAction ==> ", action);
    switch (action.type) {
      case "A":
        console.log("a");
        break;
      case "ADD_TO_BASKET":
        this._update((n) => {
          const result = {
            basket: [
              ...n.basket,
              {
                title: action.title,
                image: action.image,
                price: action.price,
                rating: action.rating,
              },
            ],
          };
          console.log(result)
          return result
        });
        break;
    }
  }
}

export const state = new State();
