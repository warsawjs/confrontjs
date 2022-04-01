<script>
    export let segment = '';
</script>

<style>
    .intro-container {
        text-align: center;
        color: var(--night-color);
    }

    .logo-confrontjs {
        height: 200px;
    }

    p {
        margin: 0;
        text-transform: uppercase;
        font-weight: bold;
    }

    p.headline {
        font-size: 48px;
    }

    p.subline {
        font-size: 24px;
    }
        .parking-img-homepage {
            width: 100%
        }

     @media(min-width: 768px) and (max-width: 1199px) {
        .parking-img-homepage {
            height: 400px;
            width: auto;
        }
    }
    @media(min-width: 1200px) {
        .parking-img-homepage {
            height: 500px;
            width: auto;
        }
    }
    .text-custom {
        color: var(--mix-color);
        font-size: 27px;
    }
    .cheers {
        font-size: 24px;
    }
</style>

<div class="intro-container">

    <img class="logo-confrontjs" src="/ConfrontJS_logo_512_szara.png" alt="ConfrontJS logo" />

        <div class="text-center mb-5 pb-5">
        <img class="parking-img-homepage" src="/venue/parking-map.png" alt=""/>
        <h3>In case if finding us were troublesome ask for <span class="text-custom">Kinoteka Cinema</span> in Palac Kultury! :)</h3>
        <p class="cheers">✌️ 💜 see you soon! 💜 ✌️</p>
    </div>

</div>
