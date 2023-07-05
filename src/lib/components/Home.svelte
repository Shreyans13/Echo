<script lang="ts">
  import Product from "./Product.svelte";
  import type { PropType } from "./Product.svelte";
  let p1: PropType = {
    title: "Beez tempered glass compatible with Moto G62 5G",
    price: 149,
    image: "https://m.media-amazon.com/images/I/51OpKaj+jWL._SY879_.jpg",
    rating: 4,
  };
</script>

<div class="home">
  <div class="home_container">
    <!-- <span class="home_image"> -->
    <img
      src="https://m.media-amazon.com/images/I/81mcdI+eBsL._SX3000_.jpg"
      alt="Slider Home Image"
      class="home_image"
    />
    <!-- </span> -->

    <div class="home_row">
      <!-- product 1 -->
      <Product {...p1} />
      <!-- product 2 -->
      <Product {...p1} />
    </div>
    <div class="home_row">
      <!-- product 1 -->
      <Product {...p1} />
      <!-- product 2 -->
      <Product {...p1} />
      <!-- product 3 -->
      <Product {...p1} />
    </div>
    <div class="home_row">
      <!-- product 1 -->
      <Product {...p1} />
    </div>
    <div class="home_row">
      <!-- product 1 -->
      <Product {...p1} />
      <!-- product 2 -->
      <Product {...p1} />
      <!-- product 3 -->
      <Product {...p1} />
      <!-- product 4 -->
      <Product {...p1} />
    </div>
  </div>
</div>

<style>
  .home {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
  }

  .home_row {
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
  }
  .home_image {
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    background-image: linear-gradient(
      to bottom,
      rgb(46, 0, 59),
      rgba(252, 252, 252, 0)
    );
    /* mask-image: linear-gradient(
      "to bottom",
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    ); */
  }
</style>
