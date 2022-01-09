import { writable } from "svelte/store";

export const initialVisit = writable(true);

/* 
This is how it was done (for future time save):

    import Modal from 'svelte-simple-modal';
    import PostponeInfo from "../components/shared/PostponeInfo.svelte";
    import {initialVisit} from '../components/stores/initial-visit-tracker'
    import {onMount} from 'svelte';


    onMount(() => {
        initialVisit.set(false)
    })


  {#if $initialVisit} 
    <Modal show={PostponeInfo}/>
  {/if}
*/
