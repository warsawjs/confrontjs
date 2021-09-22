<script>
  import { createEventDispatcher } from 'svelte';

  export let title;
  export let quantity;
  export let index;

  const dispatch = createEventDispatcher()
</script>


<style>
    .every-other {
    background-color: #c5e1fc;
  }
    .cart-item {
    padding: 20px 10px 20px 10px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

    .ticket__icon {
    position: absolute;
    top: -15px;
    left: -20px;
    height: 50px;
    z-index: 3;
    font-weight: 900;
  }
  .ticket__count {
    position: relative;
    z-index: 7;
  }
  .ticket__title {
    margin-right: auto;
  }
  .ticket__description {
    width: 100%;
    margin-left: 40px;
    display: flex;
  }
    .count-btn {
    border: 1px solid var(--mix-color);
    border-radius: 50%;
    color: var(--mix-color);
    margin: 0 10px 0 10px;
    width: 20px;
    height: 20px;
  }
</style>

<li class="cart-item" class:every-other={ index % 2 }>
  <div class="ticket">
    <img src="/ticket.svg" alt="ticket-icon" class="ticket__icon"/>
    <span class="ticket__count">{index + 1}</span>
  </div>
  <div class="ticket__description">
    <span class="ticket__title">{title}</span>
    <button on:click="{() => dispatch('decrement'), {title, quantity}}" class="count-btn">-</button>
    <span>{quantity}</span>
    <button on:click="{() => dispatch('increment'), {title, quantity}}" class="count-btn">+</button>
  </div> 
</li>