<script>
    export let sponsor = {};

    function getClass() {
        return `${sponsor.type.toLowerCase()}-sponsor`;
    }
</script>

<style>
    /* .gold-sponsor img {
        width: 500px;
        height: 300px;
    }

 
    @media (max-width: 600px) {
        .gold-sponsor img {
            width: 100%;
        }
    } */
</style>

<a
    class="{ getClass() } p-3"
    href={ sponsor.url }
    title={ sponsor.name }
    rel="noopener"
    target="_blank"
>
    <img
        src={ sponsor.logo_url }
        class="sponsor-avatar"
        alt="Avatar of { sponsor.name }"
    />
</a>
