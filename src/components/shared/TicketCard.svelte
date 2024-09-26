<script>
  import { createEventDispatcher } from 'svelte';

  export let title;
  export let price;
  export let quantity;
  export let total;
  export let disabled;
  export let description;
  export let validity;
  export let planId;

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
    justify-content: space-between;
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

  .description span {
    font-weight: bold;
    margin-bottom: 0;
    flex-grow: 1;
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
    flex-shrink: 1;
  }

  .disabled {
    pointer-events: none;
    opacity: 0.7;
  }
  .fsSmall {
    font-size: small;
  }

  .light-font {
    font-weight: 300;
    font-size: 14px;
  }

  .fat-font {
    font-size: 20px;
    font-weight: bold;
  }

  .valid-until {
    color: red;
    font-size: 12px;
    text-align: center;
    font-weight: bold;
  }

</style>


<article class="ticket-card" class:disabled={disabled}>
  <h4 class="mb-1">{title}</h4>
  <div class="description" class:fsSmall={disabled}>
    {#if disabled}
    <span class="primary-color d-block mt-4 text-center fsSmall">{description}</span>
    {:else}
    <p class="mb-1 light-font">Includes:</p>
    <p class="mt-1 light-font">{description}</p>
    {/if}
    <div class="valid-until">{validity}</div>
    <p>PLN {price}</p>
  </div>
<!--  <div class="quantity-selection">-->
<!--    <button type="button" class="quantity-button" on:click={() => dispatch('increment', {title, quantity})}>-->
<!--     +-->
<!--    </button>-->
<!--    <button type="button" class="quantity-button" on:click={() => dispatch('decrement', {title, quantity})}>-->
<!--      - -->
<!--    </button>-->
<!--    <span class="quantity-display">{quantity} / {total}</span>-->
<!--  </div>-->
  <div class="confirm">
    <a href="https://app.easycart.pl/checkout/confrontjs/confrontjs-2023?plan={planId}&promo=" type="button" class="button-mix">Buy</a>
  </div>
</article>
