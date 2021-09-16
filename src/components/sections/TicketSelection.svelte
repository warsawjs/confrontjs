<script>
  import TicketCard from "../shared/TicketCard.svelte";
</script>

<style>
  .ticket-section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 60vh;
    position: relative;
  }

  h1 {
    text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15);
  }
  .card-display {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    align-items: center;
    width: 60%;
    gap: 20px;
    padding: 10px;
    z-index: 10;
  }



</style>

<section class="ticket-section">
  <h1>Ticket Shop</h1>
  <div class="card-display">
    <TicketCard title="basic" description="Ticket includes to to i to a tego nie"/>
    <TicketCard title="premium" description="Ticket includes to to i to"/>
    <TicketCard title="full" description="Ticket includes to to i to plus to"/>
  </div>
</section>