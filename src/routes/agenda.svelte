<script>
    import Agenda from '../components/sections/Agenda.svelte';
    import Why from '../components/sections/Why.svelte';
    import Modal from 'svelte-simple-modal';
    import PostponeInfo from "../components/shared/PostponeInfo.svelte";
    import {initialVisit} from '../components/stores/initial-visit-tracker'
    import {onMount} from 'svelte';

    onMount(() => {
        initialVisit.set(false)
    })
    export let segment = '';
</script>

<style>
</style>

<svelte:head>
    <title>Agenda • ConfrontJS 2022 • Front-end Conference in Warsaw</title>
</svelte:head>

<div class="agenda-page">
    {#if $initialVisit} 
    <Modal show={PostponeInfo}/>
{   /if}
    <Agenda/>
    <Why/>
</div>
