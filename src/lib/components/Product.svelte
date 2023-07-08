<script lang="ts" context="module">
  import type { Rating, ProductItem } from "../../types/store";

  // interface PropType extends ProductItem
  // export PropType
</script>

<script lang="ts">
  import { Icon } from "@smui/button";
  import { state } from "../../store/store";

  interface $$Props extends ProductItem {}

  export let title: string;
  export let image: string;
  export let price: number;
  export let id: number;
  export let rating: Rating;

  const addToCart = (): void => {
    state.evalAction({
      type: "ADD_TO_BASKET",
      title: title,
      image: image,
      price: price,
      rating: rating,
      id: id,
    });
  };

  //   export let props: ProductProps;
  //   export let props: ProductProps;
</script>

<div class="product">
  <div class="product__info">
    <p>{title}</p>
    <p class="product__price">
      <small>₹</small>
      <strong>{price}</strong>
    </p>
    <p class="product__rating">
      {#each Array(5) as _, index (index)}
        {#if index < rating}
          <Icon class="material-icons" on>star</Icon>
        {:else}
          <Icon class="material-icons">star_border</Icon>
        {/if}
      {/each}
      <!-- <Icon class="material-icons" on>star</Icon>
      <Icon class="material-icons">star_border</Icon> -->
    </p>
  </div>
  <img src={image} alt="Product Image" srcset="" />
  <button on:click={addToCart}>Add to Basket</button>
</div>

<style>
  .product {
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 1;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 500px;
    min-width: 100px;
  }
  .product__info {
    height: 150px;
    margin-bottom: 15px;
  }
  .product__price {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .product > img {
    max-height: 250px;
    width: 100%;
    object-fit: contain;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .product__rating {
    color: rgb(255, 183, 0);
    /* margin-bottom: 5px; */
  }
  .product > button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c73e1 #846a29;
    color: #111;
  }
</style>
