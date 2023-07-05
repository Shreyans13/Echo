<script lang="ts">
</script>

<div class="subtotal">
  <p>
    Subtotal (0 items): <strong>0</strong>
    <small class="subtotal__gift">
      <input type="checkbox" name="" id="" />This order contains a gift
    </small>
  </p>
  <button>Proceed to checkout</button>
</div>

<style>
  .subtotal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 120px; 
    /* height: 100px;  */
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #dddddd;
    border-radius: 3px;
  }
  .subtotal__gift {
    display: flex;
    align-items: center;
  }
  .subtotal__gift > input {
    margin-right: 5px;
  }
  .subtotal > button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c73e1 #846a29;
    color: #111;
  }
</style>
