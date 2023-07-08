<script lang="ts">
  import CheckoutProduct from "../components/CheckoutProduct.svelte";
  import SubTotal from "../components/SubTotal.svelte";
  import { state } from "../../store/store";
</script>

<div class="checkout">
  <div class="checkout__left">
    <!-- src="https://images-eu.ssl-images-amazon.com/images/G/31/NAB/Banner_Corporate-bulk.jpg" -->
    <img
      src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PD23/Cat_FT_PC.jpg"
      alt="Amazon advertisement"
      class="checkout__ad"
    />
    <div>
      <h2 class="checkout__title">Your shopping basket</h2>
      {#each $state.basket as item, _}
        <CheckoutProduct {...item} />
      {/each}
    </div>
  </div>
  <div class="checkout__right">
    <SubTotal />
  </div>
</div>

<style>
  .checkout {
    display: flex;
    padding: 20px;
    height: max-content;
    background-color: white;
  }
  .checkout__left {
    margin-right: 20px;
  }
  .checkout__title {
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
  .checkout__ad {
    width: 100%;
    /* margin-bottom: 5px; */
  }
</style>
