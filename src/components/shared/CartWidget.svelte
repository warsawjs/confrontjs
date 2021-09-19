<script>
  import { onDestroy } from 'svelte';
  import ticketStore from '../stores/ticket-store.js';

  let cartItems = []
  const unsubscribe = ticketStore.subscribe(store => cartItems = store)
  $: total = cartItems.reduce((sum, { price, quantity }) => sum + price * quantity, 0)

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  })
</script>

<style>
  .cart-widget {
    display: flex;
    align-items: center;
    width: 70px;
    height: 100%;
    border: 1px solid var(--primary-color);
    border-radius: 7px;
    padding: 4px;
  }

  .icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: white;
  fill: white;
}
.total {
  color: white;
  margin-left: 10px;
  font-size: 13px;
}
</style>

<div class="cart-widget">
    <img class="icon"  src="/credit-card.png" alt="cart-icon"/>
    <span class="total">{total}</span>
</div>