<script>
    import Contact from '../components/sections/Contact.svelte';
    export let segment = '';
</script>

<style>
    .contact-page {
        padding: 20px;
    }
</style>

<svelte:head>
    <title>Contact • ConfrontJS 2022 • Front-end Conference in Warsaw</title>
</svelte:head>

<div class="contact-page">
    <Contact/>
</div>
