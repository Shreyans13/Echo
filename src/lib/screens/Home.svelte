<script lang="ts" context="module">
  import type { ProductItem } from "../../types/store";
</script>

<script lang="ts">
  import Product from "../components/Product.svelte";
  let p1: ProductItem = {
    title: "Beez tempered glass compatible with Moto G62 5G",
    price: 149,
    image: "https://m.media-amazon.com/images/I/51OpKaj+jWL._SY879_.jpg",
    rating: 4,
    id: 0,
  };

  let dummyProductItem: ProductItem[] = [
    {
      title:
        "Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)",
      price: 77990,
      image: "https://m.media-amazon.com/images/I/81wxS8abrgL._SX679_.jpg",
      rating: 5,
      id: 1,
    },
    {
      title: "Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)",
      price: 2999,
      image: "https://m.media-amazon.com/images/I/61IfOpQwIEL._SX679_.jpg",
      rating: 3,
      id: 2,
    },
    {
      title:
        "LORENZ Analogue Black Dial Men's Watch & Wayfarer Sunglasses Combo for Men |Gift Combo Set for Men & Boys (CM-103SN)",
      price: 299,
      image: "https://m.media-amazon.com/images/I/81SbqrhpsOL._UX679_.jpg",
      rating: 4,
      id: 3,
    },
    {
      title:
        "Homesake Hanging Light, Home Decor Items Wire Mesh, Ceiling Light (Black) Pack of 1",
      price: 904,
      image: "https://m.media-amazon.com/images/I/91GQZOS0QvL._SX679_.jpg",
      rating: 2,
      id: 4,
    },
  ];
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
      {#each dummyProductItem as productItem, index}
        {#if index < 3}
          <Product {...productItem} />
        {/if}
      {/each}
    </div>
    <div class="home_row">
      {#each dummyProductItem as productItem, index}
        {#if index > 3 && index < 6}
          <Product {...productItem} />
        {/if}
      {/each}
    </div>
    <div class="home_row">
      <!-- product 1 -->
      <Product {...p1} />
    </div>
    <div class="home_row">
      {#each dummyProductItem as productItem, index}
        <Product {...productItem} />
      {/each}
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
