<script>
    export let item = {};
    export let index = -1;

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
        margin: 20px auto;
        width: 100%;
        text-align: left;
        max-height: 350px;
        max-width: 700px;
        overflow-y: auto;
        display: flex;
    }

    .agenda-content {
        padding-top: 10px;
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
    .agenda-content h4.talk-title {
        color: var(--primary-color);
        text-transform: initial;
        font-size: 21px;
    }

    .agenda-content p.talk-abstract {
        font-weight: lighter;
        margin-top: 0;
        white-space: pre-line;
        color: black;
    }

</style>
<div class="agenda-card { item.type } { getClass() }">
    <div class="agenda-content col-lg-9 col-xs-12">
  
     <h4 class="talk-title mt-0 p-0 mb-3">
        { item.details.title }
     </h4>

     <p class="talk-abstract d-sm-block">{ item.details.abstract.trim() }</p>
   
    </div>
</div>
