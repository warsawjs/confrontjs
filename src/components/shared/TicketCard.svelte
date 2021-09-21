<script>
  import { createEventDispatcher } from 'svelte';

  export let title;
  export let price;
  export let quantity;
  export let total;

  const dispatch = createEventDispatcher()
</script>

<style>
  .ticket-card {
    width: 270px;
    height: 100%;
    background-color: var(--dark-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
  }
  h4 {
    color: var(--snow-color);
    text-align: center;
  }
  .description p {
    color: var(--snow-color);
    text-align: center;
  }

  .quantity-selection {
    display: flex;
    justify-content: space-around;
    align-items: end;
    flex-grow: 1;
  }
  .quantity-button {
    width: 20px;
    height: 20px;
    border-radius: 10%;
    border: none;
    padding: 0;
    transition: all 0.3s ease-in-out;
    margin: 0 5px;
  }

  .quantity-display {
    margin-left: 10px;
    color: var(--snow-color);
    height: 20px;
  }

  .quantity-button:hover {
    box-shadow: 0 2px 3px rgba(255, 255, 255, 0.2);
  }
  .quantity-button:active {
    box-shadow: 0 1px 2px rgba(255, 255, 255, 0.2);
  }
  
  .confirm {
    margin: 10px auto;
  }
</style>


<article class="ticket-card">
  <h4>{title}</h4>
  <div class="description">
    <p>PLN {price}</p>
  </div>
  <div class="quantity-selection">
    <button type="button" class="quantity-button" on:click={() => dispatch('increment', {title, quantity})}>
     +
    </button>
    <button type="button" class="quantity-button" on:click={() => dispatch('decrement', {title, quantity})}>
      -
    </button>
    <span class="quantity-display">{quantity} / {total}</span>
  </div>
  <div class="confirm">
    <button type="button" class="button-mix" on:click={() => dispatch('add-to-cart', {title, price, quantity})}>Add to cart</button>
  </div>
</article>