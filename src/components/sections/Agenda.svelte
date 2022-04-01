<script>
    import AgendaItem from '../shared/AgendaItem.svelte';
    import {opnening, trackOne, trackTwo, dinner, closing} from '../../data/agenda';
    export let segment = '';

    const morningOne = [...trackOne.slice(0,3)];
    const afternoonOne = [...trackOne.slice(3)];

    const morningTwo = [...trackTwo.slice(0,3)];
    const afternoonTwo = [...trackTwo.slice(3)]
</script>

<style>
    .agenda-section {
        color: var(--snow-color);
        background: var(--night-color);
        padding: 60px 0 30px 0;
    }
    .agenda-columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 999px) {
        .agenda-columns {
            grid-template-columns: 1fr;
        }
    }
</style>