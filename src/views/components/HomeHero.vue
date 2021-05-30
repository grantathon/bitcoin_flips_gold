<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-12 text-center pt-lg">
                        <!-- <img src="img/brand/white.png" style="width: 200px;" class="img-fluid"> -->
                        <h1 class="text-white display-2 mb-0">
                          The price of Bitcoin is <strong style="color:#F79400;">${{ btcPrice }}</strong>
                          at a market cap of <strong style="color:#F79400;">${{ btcMarketCap }}</strong>
                          compared to the price of gold being <strong style="color:#F7D801;">${{ gldPrice }}</strong>
                          at a market cap of <strong style="color:#F7D801;">${{ gldMarketCap }}</strong>.
                          <!-- Watch cryptocurrencies flip the modern financial & economic systems on their heads -->
                        </h1>
                        <p class="lead text-white mt-4 mb-5">
                          What does that mean?
                        </p>
                        <div class="btn-wrapper">
                            <!-- <base-button tag="a"
                                         href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                         class="mb-3 mb-sm-0"
                                         type="info"
                                         icon="fa fa-code">
                                Components
                            </base-button> -->
                            <base-button tag="a"
                                         href="#btc-flips-gold"
                                         class="mb-3 mb-sm-0"
                                         type="white"
                                         icon="ni ni-bold-down">
                                Learn More
                            </base-button>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center justify-content-around stars-and-coded">
                    <!-- <div class="col-sm-4">
                        <span class="text-white alpha-7 ml-3">Star us on</span>
                        <a href="https://github.com/creativetimofficial/argon-design-system" target="_blank" title="Support us on Github">
                            <img src="img/brand/github-white-slim.png" style="height: 22px; margin-top: -3px">
                        </a>
                    </div>
                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        <span class="text-white alpha-7">Coded by</span>
                        <a href="https://www.creative-tim.com" target="_blank" title="Creative Tim - Premium Bootstrap Themes and Templates">
                            <img src="img/brand/creativetim-white-slim.png" class="ml-3" style="height: 30px;">
                        </a>
                    </div> -->
                </div>
            </div>
        </div>
    </section>


</template>
<script>
export default {
  props: {
    btcPrice: String,
    btcMarketCap: String,
    gldPrice: String,
    gldMarketCap: String,
  },
};
</script>
<style>
</style>
