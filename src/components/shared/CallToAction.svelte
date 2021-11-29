<script>
    export let href;
    export let variant; // primary | secondary
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
        class="buy-tickets"
        class:button-primary={variant === 'primary'}
        class:button-mix={variant === 'secondary'}
        href={href}
    >
        <slot />
    </a>

</div>
