<script>
    export let href;
</script>

<style>
    .buy-tickets-container {
        width: 100%;
        text-align: center;
        margin: 50px 0;
    }

    .buy-tickets {
        font-size: 24px;
    }
</style>

<div class="buy-tickets-container">

    <a
        class="buy-tickets button-primary"
        href={href}
    >
    <slot />
    </a>

</div>
