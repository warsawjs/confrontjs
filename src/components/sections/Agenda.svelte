<script>
    import AgendaItem from '../shared/AgendaItem.svelte';
    import {opnening, trackOne, trackTwo, dinner, closing} from '../../data/agenda';
    export let segment = '';

    const morningOne = [...trackOne.slice(0,5)];
    const afternoonOne = [...trackOne.slice(5)];

    const morningTwo = [...trackTwo.slice(0,5)];
    const afternoonTwo = [...trackTwo.slice(5)]
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

<section class="agenda-section">
    <div class="content d-flex flex-column align-items-center justify-content-center">
        <h1>Agenda</h1>
        <ul class="list-unstyled">
            {#each opnening as item, i}
                <li>
                    <AgendaItem item={item} index={i + 1}/>
                </li>
            {/each}
        </ul>
        <div class="agenda-columns">
            <ul class="list-unstyled">
                {#each morningOne as item, i}    
                    <li>
                        <AgendaItem item={item} index={2 + i + 1}/>
                    </li>
                {/each}
            </ul>
            <ul class="list-unstyled">
                {#each morningTwo as item, i}
                    <li>
                        <AgendaItem item={item} index={2 + i + 1}/>
                    </li>
                {/each}
            </ul>
        </div>
        <ul class="list-unstyled">
            {#each dinner as item, i}
                <li>
                    <AgendaItem item={item} index={8}/>
                </li>
            {/each}
        </ul>
        <div class="agenda-columns">
            <ul class="list-unstyled">
                {#each afternoonOne as item, i}    
                    <li>
                        <AgendaItem item={item} index={8 + i + 1}/>
                    </li>
                {/each}
            </ul>
            <ul class="list-unstyled">
                {#each afternoonTwo as item, i}
                    <li>
                        <AgendaItem item={item} index={8 + i + 1}/>
                    </li>
                {/each}
            </ul>
        </div>
        <ul class="list-unstyled">
            {#each closing as item, i}
                <li>
                    <AgendaItem item={item} index={14}/>
                </li>
            {/each}
        </ul>
    </div>
</section>
