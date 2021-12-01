<script>
    import Banner from '../components/sections/Banner.svelte';
    import Sponsor from '../components/shared/Sponsor.svelte';
    import Partner from '../components/shared/Partner.svelte';
    import Message from '../components/shared/Message.svelte';
    import WaveType4 from '../components/waves/WaveType4.svelte';
    import WaveType6 from '../components/waves/WaveType6.svelte';

    import Sponsors from '../data/sponsors';
    import Partners from '../data/partners';
    import Modal from 'svelte-simple-modal';
    import PostponeInfo from "../components/shared/PostponeInfo.svelte";
    import {initialVisit} from '../components/stores/initial-visit-tracker'
    import {onMount} from 'svelte';

    onMount(() => {
        initialVisit.set(false)
    })

    function sponsorType(type) {
        return Sponsors.filter((sponsor) => {
            return (sponsor.type === type);
        });
    }
console.log(Sponsor)
    const GoldSponsors = sponsorType('Gold');
    const VenueSponsors = sponsorType('Venue');
    const SilverSponsors = sponsorType('Silver')
    const RestSponsors = Sponsors.filter((sponsor) => {
        return ![...GoldSponsors, ...SilverSponsors, ...VenueSponsors].includes(sponsor);
    });

    export let segment = '';
</script>

<style>
    .sponsors-container {
        padding: 20px;
        text-align: center;
    }

    .sponsors-container h2.sponsor-type,
    .sponsors-container h3.sponsor-type {
        font-weight: normal;
    }

    .silver-heading{
        font-size: 40px;
        margin-bottom: 75px;
    }

    .sponsors-section {
        margin: 0 0 100px 0;
        display: block;
    }

    .sponsors-section > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .sponsors-section > ul li {
        margin: 0 30px 10px;
    }

    .offer {
        max-width: 500px;
        margin: 0 auto;
    }

    .offer .button-mix {
        margin: 20px 0;
        display: inline-block;
    }

    .partners-section {
        margin: 100px 0 0 0;
    }

    .partners-section > ul li {
        display: inline-block;
        margin: 30px;
        vertical-align: middle;
    }

    @media (max-width: 800px) {
        .silver-heading {
            font-size: 30px;
        }
    }
</style>

<svelte:head>
    <title>Sponsors • ConfrontJS 2022 • Front-end Conference</title>
</svelte:head>

<div class="sponsors-page">
    {#if $initialVisit} 
    <Modal show={PostponeInfo}/>
    {/if}
    <Banner image="/promo/sponsors2600x1300crop.jpg">
        <p slot="description">26 March 2022 in Warsaw, Poland</p>
        <h1 slot="header">ConfrontJS 2022 Sponsors</h1>
    </Banner>

    <WaveType6/>

    <Message>
        <h2 slot="header">Thanks to Our Sponsors</h2>

        <p slot="body">
            These organizations have been instrumental in shaping ConfrontJS so far!<br/>
            Would you like to add your name to the list?<br/>
            Check out our sponsorship opportunities.
        </p>
    </Message>

    <WaveType4/>

    <div class="content">
        <div class="sponsors-container">

            {#if GoldSponsors.length > 0 }

                <div class="gold-sponsors sponsors-section">
                    <ul class="list-unstyled">
                        {#each GoldSponsors as sponsor, i}
                            <li class="sponsor-card">
                                <Sponsor sponsor="{sponsor}"/>
                                <h2 class="sponsor-type">Gold Sponsor</h2>
                            </li>
                        {/each}
                    </ul>
                </div>

            {/if}

            {#if SilverSponsors.length > 0}

                <div class="sponsors-section">
                    <h2 class="silver-heading">Silver Sponsors</h2>
                    <ul class="list-unstyled d-flex align-items-center ">
                        {#each SilverSponsors as sponsor, i}
                            <li class="sponsor-card">
                                <Sponsor sponsor="{sponsor}"/>
                            </li>
                        {/each}
                    </ul>
                </div>

            {/if}

            {#if VenueSponsors.length > 0 }

                <div class="gold-sponsors sponsors-section">
                    <ul class="list-unstyled">
                        {#each VenueSponsors as sponsor, i}
                            <li class="sponsor-card">
                                <Sponsor sponsor="{sponsor}"/>
                            </li>
                        {/each}
                    </ul>
                    <h2 class="sponsor-type">Venue Sponsor</h2>
                </div>

            {/if}

            <div class="offer">
                <h2>What About You?</h2>

                <p>
                    Sponsoring ConfrontJS is a great way to contribute to the healthy growth
                    of TypeScript’s open source community. Please join us in creating
                    an amazing experience for each and every attendee.
                </p>

                <a
                    class="button-mix"
                    data-content="Download offer"
                    href="https://drive.google.com/file/d/1PS2QVehOaypftOjTbACoTNAMx5cxa97V"
                >Download offer</a>
            </div>

            {#if Partners.length > 0 }
                <div class="partners-section">
                    <h2 class="mb-5">Partners and Supporters</h2>

                    <ul class="list-unstyled">
                        {#each Partners as partner, i}
                            <li class="partner-card">
                                <Partner partner="{partner}"/>
                            </li>
                        {/each}
                    </ul>
                </div>

            {/if}
        </div>
    </div>

</div>
