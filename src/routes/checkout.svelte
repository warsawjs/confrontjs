<script>
  import ticketStore from '../components/stores/ticket-store';
</script>

<style>
  .checkout-wrapper {
    height: 60vh;
    display: flex;
  }
  .center {
    justify-content: center !important;
  }
  .every-other {
    background-color: #c5e1fc;
  }
  .summary {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 100%;
  }
  .cart-item {
    padding: 20px 10px 20px 10px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ticket {
    position: relative;
    margin-left: 20px;
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
  .ticket-list {
    width: 70%;
  }
  .ticket-list ul {
    padding-inline-start: 0;
  }
  .cart-icon {
    height: 30vh;
    fill: var(--primary-color)
  }
  .button-primary {
    background-color: var(--mix-color);
    position: relative;
    transform: translateX(15px);
    margin-top: 20px
  }
  .count-btn {
    border: 1px solid var(--mix-color);
    border-radius: 50%;
    color: var(--mix-color);
    margin: 0 10px 0 10px;
    width: 20px;
    height: 20px;
  }

  .payment {
    padding-top: 50px;
  }
</style>

<svelte:head>
  <title>Checkout • ConFrontJS 2021 • Front-end Conference in Warsaw</title>
</svelte:head>

<section class="container checkout-wrapper" class:center={!$ticketStore.length}>
  <article class="summary">
    {#if $ticketStore.length}
    
    <div class="ticket-list">
      <h3>Your order:</h3>
      <ul>
        {#each $ticketStore as ticket, i (ticket.title)}
          <li class="cart-item" class:every-other={ i % 2 }>
            <div class="ticket">
              <img src="/ticket.svg" alt="ticket-icon" class="ticket__icon"/>
              <span class="ticket__count">{i+1}</span>
            </div>
            <div class="ticket__description">
              <span class="ticket__title">{ticket.title}</span>  <button class="count-btn">-</button> <span>{ticket.quantity}</span> <button class="count-btn">+</button>
            </div> 
          </li>
        {/each}
      </ul>
    </div>
    {:else}
      <h3>The cart is empty</h3>
      <img class="cart-icon" src="/shopping-cart-svgrepo-com.svg"  alt="empty-cart-icon"/>
      <a
      class="button-primary"
      data-content="Get tickets"
      href="/buy-a-ticket"
      >Get tickets</a>
    {/if}
  </article>
  <article class="payment"><h2>Payment center</h2></article>
 </section>













