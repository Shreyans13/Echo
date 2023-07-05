<script lang="ts" context="module">
  import IconButton from "@smui/icon-button";
  import Button, { Label, Icon } from "@smui/button";
</script>

<div class="header">
  <img
    class="header_logo"
    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
    alt="Amazon logo"
    srcset=""
  />
  <div class="header_search">
    <input type="text" class="header_searchInput" />
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
    <div class="header_option">
      <span class="header_optionLineOne">Hello User</span>
      <span class="header_optionLineTwo">Sign in </span>
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

    <div class="header_optionBasket">
      <Icon class="material-icons">add_shopping_cart</Icon>
      <span class="header_optionLineTwo header_basketCount"> 0 </span>
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
