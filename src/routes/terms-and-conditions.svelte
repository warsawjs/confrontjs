<script>
  import TermsAndConditions from '../components/sections/TermsAndConditions.svelte';
  export let segment = '';
</script>

<style>
  .terms-and-conditions {
      padding: 20px;
  }
</style>

<svelte:head>
    <title>Terms and Conditons • ConfrontJS 2021 • Front-end Conference in Warsaw</title>
</svelte:head>

<div class="privacy-policy-page">
    <TermsAndConditions/>
</div>