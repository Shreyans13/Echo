<script lang="ts">
  import SubTotal from "../components/SubTotal.svelte";
</script>

<div class="checkout">
  <div class="checkout__left">
    <img
      src="https://images-eu.ssl-images-amazon.com/images/G/31/NAB/Banner_Corporate-bulk.jpg"
      alt="Amazon advertisement"
      class="checkout__ad"
    />
    <div>
      <h2 class="checkout__title">Your shopping basket</h2>
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
