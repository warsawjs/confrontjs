<script>
    import VenueName from '../shared/VenueName.svelte';
    import FullSizeImage from '../shared/FullSizeImage.svelte';
</script>

<style>
    .venue-insight-section {
        margin: 0;
    }
</style>

<section class="venue-insight-section">
    <div class="content">
        <h1>Venue</h1>

        <div class="row">
            <div class="col-md-4 col-sm-12">
                <VenueName/>
            </div>

            <div class="col-md-6 col-sm-12">
                <p><strong>Palace of Culture and Science</strong></p>

                <p>
                    One of the highest and most recognisable building in Warsaw can be seen from almost every part of the capital. 
                    Where did it come from? It was opened in 1955 on the initiative of Joseph Stalin as a “gift of the Soviet people for the Poles”. 
                    Built by Russian workers, for a long time, it was considered to be a symbol of socialist power and the pride of People’s Poland 
                    – it was where conventions of the Polish United Workers’ Party took place. 
                    Since its very beginning, its monumental interiors have hosted numerous concerts, exhibitions, fairs and shows.
                </p>
            </div>
        </div>
    </div>

</section>

<FullSizeImage image="/venue/kinoteka-banner.png"></FullSizeImage>
