<script>
  import { onDestroy } from 'svelte';
  import TicketCard from "../shared/TicketCard.svelte";
  import CallToAction from '../shared/CallToAction.svelte';
  import ticketStore from '../stores/ticket-store.js'

  let tickets = [
    {
     id:'price_1Kh8QmEMmVuoJdChw59QIz4Y',
     title: 'Last minute',
     price: 900,
     total: 200,
     quantity: 0,
     description: 'Stationary access to the event', 
     validity: 'Last minute ticket!',
     disabled: '',
    },   
    {
     id:'price_1JjTuREMmVuoJdChl1VugtKn',
     title: 'VIP - Premium',
     price: 1500,
     total: 50,
     quantity: 0,
     description: 'Stationary access, Welcome dinner with the speakers on March 25, Gift Pack', 
     validity: 'Ticket sales closed',
     disabled: 'disabled',
    },
    {
     id:'price_1KcWzNEMmVuoJdChHruwHAXZ',
     title: 'Regular ticket + Workshop',
     price: 900,
     total: 20,
     quantity: 0,
     description: 'Regular ticket + Workshop with Yonatan Kra on 25th March', 
     validity: 'Ticket sales closed',
     disabled: 'disabled',
    }, 
    {
     id:'price_1KcX1VEMmVuoJdChjO09lFJN',
     title: 'Ticket for the Workshop',
     price: 500,
     total: 20,
     quantity: 0,
     description: 'Workshop with Yonatan Kra on 25th March', 
     validity: 'Ticket sales closed',
     disabled: 'disabled',
    }, 
    {
     id:'price_1JjTr3EMmVuoJdChUSBDkVZ2',
     title: 'Pre early bird',
     price: 190,
     total: 50,
     quantity: 0,
     description: 'SOLD OUT', 
     validity: '',
     disabled: 'disabled',
    },
    {
     id:'price_1JjTrcEMmVuoJdChRL389PMV',
     title: 'Pre early bird for 2',
     price: 300,
     total: 50,
     quantity: 0,
     description: 'SOLD OUT', 
     validity: '',
     disabled: 'disabled',
    },
    {
     id:'price_1JjTsaEMmVuoJdChmLAOI4eh',
     title: 'Early bird',
     price: 250,
     total: 100,
     quantity: 0,
     description: 'SOLD OUT', 
     validity: '',
     disabled: 'disabled',
    },    
    {
     id:'price_1JjTt3EMmVuoJdChn5xV3mbm',
     title: 'Early bird for 2',
     price: 400,
     total: 100,
     quantity: 0,
     description: 'SOLD OUT', 
     validity: '',
     disabled: 'disabled',
    },    
  ]

  let storeItems = []

  const unsubscribe = ticketStore.subscribe(store => {
    storeItems = store
  })


  function increment(e) {
    const { title } = e.detail;
    const target = tickets.find(t => t.title === title)
    target.quantity = target.quantity < target.total ? target.quantity + 1 : target.quantity
    tickets = [...tickets]
  }

  function decrement(e) {
    const { title } = e.detail;
    const target = tickets.find(t => t.title === title)
    target.quantity = target.quantity > 0 ? target.quantity - 1 : target.quantity;
    tickets = [...tickets]
  }

  function addToCart(e) {
    const { title } = e.detail;
    const selectedItem = tickets.find(t => t.title === title);
    const ticketInStore = storeItems.find(t => t.title === title)

    if (selectedItem.quantity > 0) {
      ticketInStore ? ticketStore.updateTicket(title, selectedItem) : ticketStore.addTicket(selectedItem)
    } else {
      ticketStore.removeTicket(selectedItem.title)
    }
  }

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  })
</script>

<style>
  .ticket-section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 60vh;
    position: relative;
    z-index: 4;
  }
  .card-display {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    align-items: center;
    width: 60%;
    gap: 20px;
    padding: 10px;
  }
</style>

<section class="ticket-section">
  <h1>Tickets</h1>
  <div class="card-display">
    {#each tickets as ticket}
    <TicketCard 
    title={ticket.title} 
    price={ticket.price} 
    quantity={ticket.quantity} 
    total={ticket.total}
    description={ticket.description}
    validity={ticket.validity}
    planId={ticket.id}
    disabled={ticket.disabled}
    on:decrement={decrement}
    on:increment={increment}
    on:add-to-cart={addToCart}
    />
    {/each}
  </div>
  <CallToAction href="/checkout">Checkout</CallToAction>
</section>