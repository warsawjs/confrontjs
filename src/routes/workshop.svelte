<script>
    import Banner from '../components/sections/Banner.svelte';
    import SocialMediaIcons from '../components/shared/SocialMediaIcons.svelte';
    import Yonatan from '../data/speakers/yonatan-kra';
    export let segment = '';
</script>

<style>
    .button-mix {
        font-size: 22px;
    }
    .trainer-avatar {
        max-width: 100%;
    }
</style>

<svelte:head>
    <title>Workshop • ConfrontJS 2022 • Front-end Conference in Warsaw</title>
</svelte:head>

<Banner image="/promo/IMG_2723.png">
    <p slot="description">26 March 2022 in Warsaw, Poland</p>
    <h1 slot="header">ConfrontJS 2022 Workshop</h1>
</Banner>

<div class="workshop-page">

    <div class="content">
        <h4 class="primary-color mb-0">Workshop Title</h4>

        <h1 class="mt-0">
            Github Actions Workshop
        </h1>

        <div class="row">
            <div class="col-md-5 col-sm-12">
                <p>
                    Automation is the only way to scale today.
                    In this workshop we will learn how to speed up your development and deployment processes using github actions.
                    We will see how you can make sure code quality is maintained while allowing developers to focus on what they are good at - developing software.
                </p>
                <a
                    class="button-mix my-3 d-inline-block"
                    data-content="Show full agenda"
                    href="https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/confrontjs/ConfrontJS_Yonatan_Kra_Github_Actions_Workshop.pdf"
                >Show full agenda</a>
            </div>

            <div class="offset-md-1 col-md-3 col-sm-12">
                <h2>Place of training</h2>

                <p>
                    HubHub<br/>
                    Al. Jerozolimskie 93<br/>
                    2nd floor<br/>
                    Warsaw, Poland
                </p>
            </div>

            <div class="col-md-2 col-sm-12 text-center">
                <h2>Date</h2>

                <p>
                    25-03-2022<br/>
                    09:00 - 16:00
                </p>

                <a
                    class="button-mix my-3 d-inline-block"
                    data-content="Buy ticket"
                    href="https://app.easycart.pl/checkout/confrontjs/confrontjs"
                >Buy ticket</a>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-sm-12">
                <h2>What are you going to learn:</h2>

                <ul>
                    <li>How to speed up development cycles using github actions</li>
                    <li>How to use github actions in your github repositories</li>
                    <li>How to setup Continuous Integration for your projects</li>
                    <li>How to setup Continuous Deployment for your projects</li>
                    <li>How can managers use github actions to better manage their teams with github actions</li>
                </ul>

                <p>
                    *** Note - this is an advanced JS session.
                    Prior experience with JS is highly recommended ***
                </p>

                <p>
                    *** Note - this is a hands-on session. ***
                </p>
            </div>

            <div class="col-md-5 col-sm-12">
                <h3>Price includes:</h3>

                <ul>
                    <li>One whole day of training</li>
                    <li>Training materials specially prepared for the given training</li>
                    <li>A list of recommended materials for further learning</li>
                    <li>Work on Github repository</li>
                </ul>

                <img
                    class="trainer-avatar my-5"
                    src="/trainers/yonatan-kra.jpg"
                    alt="Yonatan Kra"
                />

                <h4 class="primary-color m-0">Workshop Trainer</h4>

                <h2 class="m-0">Yonatan Kra</h2>

                <p>
                    { Yonatan.bio.en }
                </p>

                <SocialMediaIcons person={Yonatan}/>
            </div>
        </div>

    </div>

</div>
