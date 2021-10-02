<script>
  import { onDestroy } from 'svelte';
  import { loadStripe } from '@stripe/stripe-js';
  import * as EmailValidator from 'email-validator';
  import CheckoutListItem from '../components/shared/CheckoutListItem.svelte';
  import ticketStore from '../components/stores/ticket-store';


  let ticketsInStore = []
  let userEmail = '';
  let emailError = '';

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

 function createPaymentData() {
   const details = ticketsInStore.map(({id, quantity}) => ({ price:id, quantity }))
   return details
 }

 async function submit() {
    const stripe = await loadStripe('pk_test_51JfX15EjkyMmX0J5hhdGQbYpaLSXrZ5SvjpGqCvSlGUFbmOy3r82qWd2Eldy6yIqNSpvouXVWmrxcrrwR0Y9xfta00aHj6Djhs');

    const lineItems = createPaymentData()
    if (!userEmail) {
      emailError = 'Please provide valid email address'
    }
    else if (!EmailValidator.validate(userEmail)) {
      emailError = 'Incorrect email'
    } else {
      emailError = ''
      stripe.redirectToCheckout({ 
        lineItems, 
        mode: 'payment', 
        customerEmail: userEmail, 
        successUrl: 'https://confrontjs.netlify.app/order-success', 
        cancelUrl: 'https://confrontjs.netlify.app/order-cancel' 
      }).then(res => console.log(res)).catch(err => console.log(err))
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
    max-height: 370px;
    overflow-y: auto;
  }
  .cart-icon {
    height: 30vh;
    fill: var(--primary-color)
  }
  .button-primary {
    background-color: var(--mix-color);
    border: none;
    position: relative;
    transform: translateX(15px);
  }

  .margin-top {
    margin-top: 20px;
  }

  .details-confirm {
    display: flex;
    align-items: center;
  }

  .email-input {
    height: 35px;
    padding: 7px;
    border-radius: 7px;
    border: 1px solid var(--mix-color);
    transform: translateX(5px);
  }
  .email-error {
    color: red;
    font-size: 10px;
  }

  @media(max-width: 800px) {
    .checkout-wrapper {
      flex-direction: column;
    }

    .details-confirm{
      flex-direction: column;
    }

    .button-primary {
    margin-top: 10px;
    transform: translateX(5px);
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
      <div class="details-confirm">
        <label for="payment-email">Email</label>
        <input type="email" id="payment-email" bind:value="{userEmail}" class="email-input"/>
        <button
        class="button-primary"
        on:click="{submit}"
        >Confirm and pay
      </button>
      </div>
      <div class="email-error">{emailError}</div>
    </div>
    {:else}
      <h3>The cart is empty</h3>
      <img class="cart-icon" src="/shopping-cart-svgrepo-com.svg"  alt="empty-cart-icon"/>
      <a
      class="button-primary"
      class:margin-top={!$ticketStore.length}
      data-content="Get tickets"
      href="/buy-a-ticket"
      >Get tickets</a>
    {/if}
  </article>
 </section>













