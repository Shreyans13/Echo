<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Header from "./lib/components/Header.svelte";
  import Checkout from "./lib/screens/Checkout.svelte";
  import Home from "./lib/screens/Home.svelte";
  import PageNotExists from "./lib/screens/PageNotExists.svelte";
  import Login from "./lib/screens/Login.svelte";

  // import router from "./routes/Router";
  export let url = "";
  // import svelteLogo from "./assets/svelte.svg";
  // import Counter from "./lib/Counter.svelte";
</script>

<svelte:head>
  <!-- Fonts $ Icons -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />

  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
  />

  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>

<main>
  <div class="app">
    <Router {url}>
      <div>
        <Route path="/"><Header /><Home /></Route>
        <Route path="/cart"><Header /><Checkout /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/*"><PageNotExists /></Route>
      </div>
    </Router>
  </div>
</main>

<style>
</style>
