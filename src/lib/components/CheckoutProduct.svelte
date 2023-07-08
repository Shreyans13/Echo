<script lang="ts" context="module">
  import { state } from "../../store/store";
  import type { Rating, ProductItem } from "../../types/store";

  // interface PropType extends ProductItem
  // export PropType
</script>

<script lang="ts">
  import { Icon } from "@smui/button";

  interface $$Props extends ProductItem {
    index: number;
  }

  export let title: string;
  export let image: string;
  export let price: number;
  export let rating: Rating;
  export let id: number;
  export let index: number;
  console.log("index ====> ", index);
  const removeFromBasket = (): void => {
    state.evalAction({
      type: "REMOVE_FROM_BASKET",
      index: index,
    });
  };
</script>

<div class="checkoutProduct">
  <img class="checkoutProduct__image" src={image} alt="" />
  <div class="checkoutProduct__info">
    <p class="checkoutProduct__title">{title}</p>
    <p class="checkoutProduct__price">
      <small>₹</small>
      <strong>{price}</strong>
    </p>
    <!-- <div class="checkoutProduct__rating"></div> -->
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
    <button on:click={removeFromBasket}>Remove from basket</button>
  </div>
</div>

<style>
  .checkoutProduct {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .checkoutProduct__info {
    padding-left: 20px;
  }
  .checkoutProduct__info > button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
  .checkoutProduct__image {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
  .checkoutProduct__title {
    font-size: 17px;
    font-weight: 800;
  }
</style>
