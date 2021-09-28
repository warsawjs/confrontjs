<script context="module">
  export function preload(page) {
    return this.fetch('https://secure.snd.payu.com/pl/standard/user/oauth/authorize', {
      method: 'POST',
      headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
      "Cookie": "payu_persistent=mobile_agent-false#;cookieFingerprint=909cfcdd-c87c-40be-8523-c4d63d6a3c30",
    },
      body: "grant_type=client_credentials&client_id=424986&client_secret=4bee845d822913554e5e0f81d7a6ed21",
    }).then(res => {
        if (!res.ok) {
          console.log(res)
          throw new Error("Fetching payU failed, please try again later!");
        }
        return res;
      })
      .then(data => {
       console.log(data)
       return { payUdata: data }
      })
      .catch(err => {
        console.log(err);
      });
  }
</script>

<script>
  import { onDestroy } from 'svelte'
  import CheckoutListItem from '../components/shared/CheckoutListItem.svelte';
  import ticketStore from '../components/stores/ticket-store';

  let ticketsInStore = []

  const unsubscribe = ticketStore.subscribe(store => {
    ticketsInStore = store
  })

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  })

 function increment(e){
  const { title } = e.detail;
  const selectedItem = ticketsInStore.find(t => t.title === title);
  selectedItem.quantity = selectedItem.quantity + 1

  ticketStore.updateTicket(title, selectedItem)
 }
 function decrement(e){
  const { title, quantity } = e.detail;
  const selectedItem = ticketsInStore.find(t => t.title === title);
  selectedItem.quantity = selectedItem.quantity - 1

  if (quantity > 1) {
      ticketStore.updateTicket(title, selectedItem)
    } else {
      ticketStore.removeTicket(selectedItem.title)
    }
 }
</script>

<style>
  .checkout-wrapper {
    height: 60vh;
    display: flex;
  }
  .center {
    justify-content: center !important;
  }

  .summary {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 100%;
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
  .payment {
    padding-top: 50px;
  }

  @media(max-width: 800px) {
    .checkout-wrapper {
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <title>Checkout • ConfrontJS 2021 • Front-end Conference in Warsaw</title>
</svelte:head>

<section class="container checkout-wrapper" class:center={!$ticketStore.length}>
  <article class="summary">
    {#if $ticketStore.length}
    <div class="ticket-list">
      <h3>Your order:</h3>
      <ul>
        {#each $ticketStore as ticket, i (ticket.title)}
          <CheckoutListItem 
          title={ticket.title} 
          quantity={ticket.quantity} 
          index={i}
          on:decrement={decrement}
          on:increment={increment}
          />
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
  {#if $ticketStore.length}
  <article class="payment"><h2>Payment center</h2></article>
  {/if}
 </section>













