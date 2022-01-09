<script>
    import Banner from '../components/sections/Banner.svelte';
    import Venue from '../components/sections/Venue.svelte';
    import Map from '../components/sections/Map.svelte';
    import Parking from '../components/sections/Parking.svelte';
    import WhereToStay from '../components/sections/WhereToStay.svelte';
    import TouristAttractions from '../components/sections/TouristAttractions.svelte';
    import WaveType4 from '../components/waves/WaveType4.svelte';
    import WaveType7 from '../components/waves/WaveType7.svelte';
    import WaveType8 from '../components/waves/WaveType8.svelte';
    export let segment = '';
</script>

<style>
    .parking-img {
        max-width: 50%;
        height: auto;
    }
    @media (max-width: 800px) {
        .parking-img {
        max-width: 100%;
    }
    }
</style>

<svelte:head>
    <title>Venue • ConfrontJS 2021 • Front-end Conference in Warsaw</title>
</svelte:head>

<Banner image="/venue/kinoteka-banner1.png">
    <p slot="description">26 March 2022 in Warsaw, Poland</p>
    <h1 slot="header">ConfrontJS 2022 Venue</h1>
</Banner>

<div class="venue-page">
    <Venue/>
    <Map/>
    <div class="text-center bg-white py-5 ">
        <img class="parking-img" src="/venue/parking-map.png" alt=""/>
    </div>
    <Parking/>
    <WaveType7/>
    <div class="row no-gutters">
        <img class="col-md-4 col-sm-12" src="/venue/warsaw/lazienki.jpg" alt=""/>
        <img class="col-md-4 col-sm-12" src="/venue/warsaw/business.jpg" alt=""/>
        <img class="col-md-4 col-sm-12" src="/venue/warsaw/oldtown.jpg" alt=""/>
    </div>
    <WaveType8/>
    <WhereToStay/>
    <WaveType4/>
    <TouristAttractions/>
</div>
