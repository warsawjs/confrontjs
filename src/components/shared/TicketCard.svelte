<script>
  export let title;
  export let description;
  export let quantity = 1;
  export let price;
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
  h3 {
    color: var(--snow-color)
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
  <h3>{title}</h3>
  <div class="description">
    <p>{description}</p>
  </div>
  <div class="quantity-selection">
    <button type="button" class="quantity-button">
     +
    </button>
    <button type="button" class="quantity-button">
      -
    </button>
    <span class="quantity-display">{quantity}</span>
  </div>
  <div class="confirm">
    <button type="button" class="button-mix">Add to cart</button>
  </div>
</article>