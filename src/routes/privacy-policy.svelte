<script>
    import PrivacyPolicy from '../components/sections/PrivacyPolicy.svelte';
    export let segment = '';
</script>

<style>
    .privacy-policy-page {
        padding: 20px;
    }
</style>

<svelte:head>
    <title>Privacy Policy • ConfrontJS 2021 • Front-end Conference in Warsaw</title>
</svelte:head>

<div class="privacy-policy-page">
    <PrivacyPolicy/>
</div>
