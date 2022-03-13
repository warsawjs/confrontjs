<script>
    import Modal,{getModal} from '../shared/Modal.svelte'
    import SpeakerTitle from '../shared/SpeakerTitle.svelte';
    import AgendaItemModalContent from './AgendaItemModalContent.svelte';

    export let item = {};
    export let index = -1;

    function twoDigits(data) {
        return String(data).padStart(2, '0');
    }

    function getClass() {
        if (item.details.keynote)
            return 'keynote';

        if (item.details.lightningTalk)
            return 'lightning-talk';

        return '';
    }
</script>

<style>
    ::-webkit-scrollbar {
  width: 10px;
}
  ::-webkit-scrollbar-track {
  background: #f1f1f1;
}
  ::-webkit-scrollbar-thumb {
  background: #888;
    border-radius:10px;
}
::-webkit-scrollbar-thumb:hover {

  background: #555;
}
    .agenda-card {
        margin: 80px auto;
        width: 100%;
        text-align: left;
        max-height: 350px;
        max-width: 700px;
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        cursor: pointer;
    }

    .fix-height {
        height: 350px !important;
    }

    .agenda-details h2 {
        padding: 20px 0;
        margin: 0;
    }

    .speaker-avatar {
        max-width: 204px;
    }

    .agenda-content {
        padding-top: 40px;
    }


    @media (min-width: 999px) {
        .agenda-content {
            max-width: 50%;
        }
    }
    @media (min-width: 1200px) {
        .agenda-content {
            max-width: 60%;
        }
    }
    @media (min-width: 1400px) {
        .agenda-content {
            max-width: 65%;
        }
    }

    .agenda-content h4.speaker-type {
        margin: 0;
    }

    .agenda-content h2.speaker-name {
        color: var(--secondary-color);
    }

    .agenda-content h2.non-talk-title {
        margin: 0;
        padding: 0;
    }

    .agenda-content p.speaker-job-position {
        margin: 0;
        font-size: 13px;
        font-weight: lighter;
    }

    .agenda-content h4.talk-title {
        color: var(--secondary-color);
        text-transform: initial;
    }

    .agenda-content p.talk-abstract {
        font-weight: lighter;
        margin-top: 0;
        white-space: pre-line;
    }

    .iterator {
        border-bottom: 2px solid var(--snow-color);
        text-align: left;
        display: block;
        font-size: 13px;
    }

    .tags {
        padding: 20px 0;
        display: block;
    }

    .tag {
        color: var(--snow-color);
        margin: 0 20px 0 0;
        font-weight: bold;
    }

    /* for keynote */

    .keynote .agenda-content h2.speaker-name {
        color: var(--primary-color);
    }

    .keynote .agenda-content h4.talk-title {
        color: var(--primary-color);
    }

    /* for lightning talk */

    .lightning-talk .agenda-content h2.speaker-name {
        color: var(--mix-color);
    }

    .lightning-talk .agenda-content h4.talk-title {
        color: var(--mix-color);
    }

    .scrollbarOff {
        overflow: hidden !important;
    }

    @media (max-width: 960px) {
        .speaker-avatar {
            max-width: 100%;
        }
    }

    @media (max-width: 480px) {
        .tags {
            display: grid;
        }
    }
</style>

<div class="agenda-card { item.type } { getClass() }"
     class:scrollbarOff={!item.type || item.start === "16:00"}
     class:fix-height={item.type === 'talk' && item.details.speaker.name === 'Yonatan Kra'}
     on:click={()=>getModal(`${index}-${item.details.speaker.name}`).open()}>

    <div class="agenda-details mx-2">
        <span class="iterator">{ twoDigits(index) }.</span>

        <h2>{ item.start }</h2>

        {#if item.type === 'talk' }
            <Modal id="{`${index}-${item.details.speaker.name}`}">
                <AgendaItemModalContent item="{item}" index="{index}"></AgendaItemModalContent>
            </Modal>
        
                <img
                    src="{ item.details.speaker.avatar_url }"
                    class="speaker-avatar"
                    alt="{ item.details.speaker.name }"
                />
           
        {/if}
    </div>

    <div class="agenda-content col-lg-9 col-xs-12">
        {#if item.type === 'talk' }
            <h4 class="speaker-type">
                <SpeakerTitle talk={item.details}/>
            </h4>
            <h2 class="speaker-name m-0 p-0">
                { item.details.speaker.name }
            </h2>
            <p class="speaker-job-position">
                { item.details.speaker.position }

                {#if item.details.speaker.company}
                    @ { item.details.speaker.company }
                {/if}
            </p>

            <div class="tags">
                {#each item.details.tech as t}
                    <small class="tag">#{ t }</small>
                {/each}
            </div>

            <h4 class="talk-title m-0 p-0">
                { item.details.title }
            </h4>

            {#if item.details.slides_url}
                <p>
                    <a
                        href="{ item.details.slides_url }"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Slides</a>
                </p>
            {/if}
        {/if}

        {#if item.type === 'talk-not-ready' }
            <h2 class="not-ready-speaker-name">{ item.details }</h2>
        {/if}

        {#if item.type === '' }
            <h2 class="non-talk-title">{ item.details }</h2>
        {/if}
    </div>
</div>
