<script lang="ts" context="module">
  import { link } from "svelte-routing";
  import IconButton from "@smui/icon-button";
  import Button, { Label, Icon } from "@smui/button";
  import { navigate } from "svelte-routing";
</script>

<script lang="ts">
  import { state } from "../../store/store";
  import { signOut } from "firebase/auth";
  import { auth } from "../../services/firebase";

  const handleAuth = () => {
    if ($state.user) {
      signOut(auth)
        .then(() => {
          console.log("sign out");
          navigate("/login");
          // Sign-out successful.
        })
        .catch((error) => {
          alert(error);
          // An error happened.
        });
    } else {
      console.log("user not found");
      navigate("/login");
    }
  };
</script>

<!-- <nav>
        <Link to="/">Home</Link>
        <Link to="pageNotExist">pageNotExist</Link>
      </nav> -->
<div class="header">
  <!-- <a href="/" use:link> -->
  <img
    class="header_logo"
    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
    alt="Amazon logo"
    srcset=""
    on:click={() => navigate("/")}
  />
  <!-- </a> -->
  <div class="header_search">
    <input
      type="text"
      class="header_searchInput"
      placeholder="Search Echo.in"
    />
    <!-- ICON BUTTON -->
    <!-- <div style="display: flex; align-items: center;"> -->
    <span class="header_searchIcon">
      <Icon class="material-icons">search</Icon>
    </span>
    <!-- </div> -->
    <!-- ICON BUTTON -->

    <!-- LOGO -->
  </div>
  <div class="header_nav">
    <!-- navigation 1  -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="header_option" on:click={handleAuth}>
      {#if $state.user}
        <span class="header_optionLineOne">Hello {$state.user.email}</span>
      {:else}
        <span class="header_optionLineOne">Hello Guest</span>
      {/if}
      <span class="header_optionLineTwo">
        {#if $state.user}
          Sign Out
        {:else}
          Sign In
        {/if}
      </span>
    </div>
    <!-- navigation 2  -->
    <div class="header_option">
      <span class="header_optionLineOne">Return</span>
      <span class="header_optionLineTwo">&Orders </span>
    </div>
    <!-- navigation 3  -->
    <div class="header_option">
      <span class="header_optionLineOne">your</span>
      <span class="header_optionLineTwo">Prime</span>
    </div>

    <div class="header_optionBasket" on:click={() => navigate("/cart")}>
      <!-- <a href="/cart" use:link> -->
      <Icon class="material-icons">add_shopping_cart</Icon>
      <span class="header_optionLineTwo header_basketCount">
        {$state.basket.length}
      </span>
      <!-- </a> -->
    </div>
    <!-- header navigation -->
  </div>
</div>

<style>
  .header {
    height: 60px;
    display: flex;
    /* will-change: filter; */
    /* transition: filter 300ms; */
    align-items: center;
    background-color: #131921;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .header_logo {
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
  }

  .header_search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
  }

  .header_searchInput {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
  }
  .header_searchIcon {
    padding: 5px;
    /* display: inline; */
    background-color: #cd9042;
    height: 22px;
    width: 28px;
  }

  .header_nav {
    display: flex;
    justify-content: space-evenly;
  }

  .header_option {
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
  }

  .header_optionLineOne {
    font-size: 10px;
  }

  .header_optionLineTwo {
    font-size: 13px;
    font-weight: 800;
  }

  .header_optionBasket {
    display: flex;
    align-items: center;
    color: white;
  }

  .header_basketCount {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
