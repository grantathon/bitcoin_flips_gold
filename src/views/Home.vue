<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-primary bg-gradient-warning shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-12 text-center">
                <h1 class="text-white display-2 mb-0">
                  The price of Bitcoin is <strong style="color:#004C74;">${{ btcPrice }}</strong>
                  at a market cap of <strong style="color:#004C74;">${{ btcMarketCap }}</strong>
                  compared to the price of gold being <strong style="color:#56423C;">${{ gldPrice }}</strong>
                  at a market cap of <strong style="color:#56423C;">${{ gldMarketCap }}</strong>.
                </h1>
                <p class="lead text-white mt-4 mb-5">
                  What does that mean?
                </p>
                <div class="btn-wrapper">
                  <base-button tag="a"
                               href="#btc-gld-charts"
                               class="mb-3 mb-sm-0"
                               type="white"
                               icon="ni ni-bold-down">
                      Learn More
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section section-lg" id="btc-gld-charts">
      <div class="container">
        <div class="row justify-content-center text-center mb-md">
          <div class="col-lg-10">
            <h2 class="display-3">That means the growth of Bitcoin’s market cap CONTINUES to outperform the growth of gold’s market cap
              by <strong style="color:#FF9900;">{{ btcGldPerfDiff }}%</strong>.</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <line-chart :chart-data="btcGldPerfChartData" :options="btcGldPerfChartOptions"></line-chart>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-md">
          <div class="col-lg-10">
            <h2 class="display-3">That means the sum of all Bitcoin in the world is worth
              <strong style="color:#FF9900;">{{ btcGldFlipProg }}%</strong> of all the gold that’s been mined EVER.</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <line-chart :chart-data="btcGldRatioChartData" :options="btcGldRatioChartOptions"></line-chart>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-md">
          <div class="col-lg-10">
            <h2 class="display-3">That means if Bitcoin were to flip gold completely (i.e., Bitcoin market cap >= gold market cap),
              it would be worth MINIMUM <strong style="color:#FF9900;">${{ btcGldFlipPrice }}</strong> per Bitcoin.</h2>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <bar-chart :chart-data="btcEstimateChartData" :options="btcEstimateChartOptions"></bar-chart>
          </div>
        </div>

        <div class="row justify-content-center text-center mt-lg">
          <div class="col-lg-10">
            <h2 class="display-3">That's huge.</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg pb-200">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-1 text-white">Digital Gold vs Physical Gold</h2>
            <p class="lead text-white">
              Bitcoin is gold’s digital cousin, only stronger, faster, and, eventually, bigger.
              Like gold, Bitcoin is a form of hard money. It’s scarce. It’s divisible. It’s mined. It’s a store of value.
            </p>
            <p class="lead text-white">
              But Bitcoin is more than gold could ever be.
            </p>
            <p class="lead text-white" style="font-weight:600;">
              You can buy, sell, send, and receive any amount of Bitcoin across the world in seconds.
            </p>
            <p class="lead text-white" style="font-weight:600;">
              You can buy goods and services with your Bitcoin quickly.
            </p>
            <p class="lead text-white" style="font-weight:600;">
              You can keep all of your Bitcoin in your pocket.
            </p>
            <p class="lead text-white" style="font-weight:600;">
              You can earn interest on your Bitcoin.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-10">
            <h2 class="display-1">Why Bitcoin Is Real Money</h2>
            <p class="lead">
              Gold has filled the shoes of real money for thousands of years. It was and still is a solid technology, but it lacks some of the core features required for us to function properly in the information age and beyond.
            </p>
            <p class="lead">Enter Bitcoin.</p>
          </div>
        </div>

        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h3 class="display-3">Scarce</h3>
              <p class="lead">Bitcoin is strictly scarce meaning that only 21 million Bitcoin will ever exist with 2140 being the last year Bitcoin will be mined. On top of that, the amount of Bitcoin awarded to miners is cut in half every four years, resulting in an exponential reduction of Bitcoin supply flow over time.</p>
              <p class="lead">This keeps supply capped.</p>
            </div>
          </div>
          <div class="col-md-6 order-md-2">
            <img src="img/bitcoin-vs-gold-scarcity.png" class="img-fluid floating" alt="Bitcoin vs gold scarcity">
          </div>
        </div>

        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="pl-md-5">
              <h3 class="display-3">Divisible</h3>
              <p class="lead">You don’t need to buy one whole Bitcoin to own Bitcoin. Instead, you can buy satoshis, which is 100 millionth of a Bitcoin (i.e., 1 Bitcoin = 100 million satoshis).</p>
              <p class="lead">This allows for convenient and granular divisibility.</p>
            </div>
          </div>
          <div class="col-md-6 order-md-1">
            <img src="img/bitcoin-divisible-by-satoshis.png" class="img-fluid floating" alt="100 million satoshis equals 1 bitcoin">
          </div>
        </div>

        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h3 class="display-3">Exchangable</h3>
              <p class="lead">Sending and receiving Bitcoin can be done in a peer-to-peer manner over the internet. You can even buy and sell Bitcoin in the open market over decentralized exchanges without a centralized order book.</p>
              <p class="lead">This means greater efficiency and zero middlemen.</p>
            </div>
          </div>
          <div class="col-md-6 order-md-2">
            <img src="img/bitcoin-exchangable-peer-to-peer.png" class="img-fluid floating" alt="Bitcoin peer-to-peer exchangable">
          </div>
        </div>

        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="pl-md-5">
              <h3 class="display-3">Portable</h3>
              <p class="lead">Since Bitcoin is software, you can easily store all of it on your computer or mobile. There are also cold wallets that allow you to keep your Bitcoin 100% offline.</p>
              <p class="lead">This saves a near infinite amount of space.</p>
            </div>
          </div>
          <div class="col-md-6 order-md-1">
            <img src="img/store-bitcoin-on-ewallets.png" class="img-fluid floating" alt="Bitcoin wallet">
          </div>
        </div>

        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <h3 class="display-3">Interest-Bearing</h3>
              <p class="lead">Thanks to DeFi (or decentralized finance), you can earn interest on your Bitcoin. Conversely, you can also use it as collateral if you want to take out a loan.</p>
              <p class="lead">This means you can have your money working for you.</p>
            </div>
          </div>
          <div class="col-md-6 order-md-2">
            <img src="img/earn-interest-on-bitcoin.png" class="img-fluid floating" alt="Earn interest on Bitcoin">
          </div>
        </div>

        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="pl-md-5">
              <h3 class="display-3">Uncensorable</h3>
              <p class="lead">Bitcoin is a fully decentralized, open network, so no one can stop you from using your money. Not only that, but no one can confiscate your Bitcoin without knowing your password or your seed phrase.</p>
              <p class="lead">This gives you full control over your money.</p>
            </div>
          </div>
          <div class="col-md-6 order-md-1">
            <img src="img/bitcoin-uncensorable.png" class="img-fluid floating" alt="Bitcoin is uncensorable">
          </div>
        </div>
      </div>
    </section>

    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg">

        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-10">
            <h2 class="text-white display-1">Buy, Store, and Earn Bitcoin</h2>
            <p class="text-white lead">
              With Bitcoin flipping gold and demonstrating its role as real money, why wouldn't you own at least some of it?
            </p>
            <p class="text-white lead">Change that today.</p>
          </div>
        </div>

        <div class="row row-grid align-items-center">
          <div class="col-lg-6 order-lg-1">
            <card shadow hover class="shadow-lg--hover">
              <div class="d-flex px-3">
                <div class="pl-4 pr-4">
                  <p class="text-center">
                    <img src="img/blockfi-logo.png" class="img-fluid" style="max-height:75px;" alt="BlockFi logo">
                  </p>
                  <p>
                    BlockFi lets you earn up to 7.5% interest on your crypto. They also offer
                    the world's first Bitcoin rewards credit card. Sign up today and get up to $250 in free Bitcoin with a deposit of $100 or more.
                    Just click the button below.
                  </p>
                  <div>
                    <badge type="primary" rounded>Buy</badge>
                    <badge type="primary" rounded>Store</badge>
                    <badge type="primary" rounded>Earn</badge>
                    <badge type="primary" rounded>Online</badge>
                  </div>
                  <base-button tag="a" href="https://blockfi.mxuy67.net/RyPZGa" target="_blank" rel="nofollow" type="primary" class="mt-4">
                    Get Free Bitcoin
                  </base-button>
                </div>
              </div>
              <div class="px-3">
              </div>
            </card>
          </div>
          <div class="col-lg-6 order-lg-1">
            <card shadow hover class="shadow-lg--hover">
              <div class="d-flex px-3">
                <div class="pl-4 pr-4">
                  <p class="text-center">
                    <img src="img/trezor-logo.png" class="img-fluid" style="max-height:75px;" alt="Trezor logo">
                  </p>
                  <p>
                    Trezor is one of the first, most trusted crypto wallet providers
                    in the world. Their products let you easily and
                    safely buy and store your Bitcoin and other cryptos.
                    Just click the button below to get your Trezor wallet today.
                  </p>
                  <div>
                    <badge type="warning" rounded>Buy</badge>
                    <badge type="warning" rounded>Store</badge>
                    <badge type="warning" rounded>Offline</badge>
                  </div>
                  <base-button tag="a" href="https://shop.trezor.io/product/trezor-model-t?offer_id=15&aff_id=6445" target="_blank" rel="nofollow" type="warning" class="mt-4">
                    Get a Trezor Wallet
                  </base-button>
                </div>
              </div>
            </card>
          </div>

        </div>
      </div>
    </section>

    <footer class="footer bg-gradient-white">
      <div class="container">
        <div class="row align-items-center justify-content-md-between">
          <div class="col-md-12" style="text-align:center;">
            <div class="copyright">
              Last update {{ lastUpdated }}.
              <br>
              Data from <a href="https://www.coingecko.com/" rel="nofollow" target="_blank">CoinGecko</a> and <a href="https://www.goldapi.io" rel="nofollow" target="_blank">GoldAPI</a>.
              <br>
              Affiliate links are used on this site to earn income to make this site possible.
              <br>
              This is for informational purposes only. This is not financial advice. Read the <a href="./bitcoin.pdf" target="_blank" rel="nofollow">Bitcoin white paper</a>.
              <br>
              Copyright &copy; {{year}} <a href="https://twitter.com/granthbartel" target="_blank" rel="nofollow">Grant Bartel</a>. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import LineChart from "./components/Visualization/LineChart";
import BarChart from "./components/Visualization/BarChart";

export default {
  name: "home",
  components: {
    LineChart,
    BarChart,
  },
  data() {
    return {
      btcPrice: null,
      btcMarketCap: null,
      gldPrice: null,
      gldMarketCap: null,
      btcGldFlipMult: null,
      btcGldFlipPrice: null,
      btcGldFlipProg: null,
      btcGldFlipRatioData: null,
      btcMarketCapPerfSeries: null,
      gldMarketCapPerfSeries: null,
      btcGldPerfDiff: null,
      btcGldRatioChartData: null,
      btcGldRatioChartOptions: null,
      btcGldPerfChartData: null,
      btcGldPerfChartOptions: null,
      btcEstimateChartData: null,
      btcEstimateChartOptions: null,
      lastUpdated: null,
      year: new Date().getFullYear()
    };
  },
  methods: {
    formatBigNumbers(num) {
      num = Math.round(num);
      var numStr = num.toString();
      const numLen = numStr.length;

      if (numLen > 3 && numLen < 7) {
          const position = numLen - 3;
          numStr = numStr.substring(0, position) + ',' + numStr.substring(position);
      } else if (numLen > 6 && numLen < 10) {
          num = (num / 1000000).toPrecision(3);
          numStr = num.toString() + ' million';
      } else if (numLen > 9 && numLen < 13) {
          num = (num / 1000000000).toPrecision(3);
          numStr = num.toString() + ' billion';
      } else if (numLen > 12 && numLen < 16) {
          num = (num / 1000000000000).toPrecision(3);
          numStr = num.toString() + ' trillion';
      } else if (numLen > 15 && numLen < 19) {
          num = (num / 1000000000000000).toPrecision(3);
          numStr = num.toString() + ' quadrillion';
      }

      return numStr;
    },
    formatTimeSeriesData(series, type) {
      var dates = [];
      var values = [];

      for (var key in series) {
        // Format date
        var date = new Date(new Number(key));
        date = new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          }).format(date);
        dates.push(date);

        // Format value
        var value = series[key];
        if (type == 'percent') {
          value = (value * 100).toPrecision(3);
        }
        values.push(value);
      }

      return { dates: dates, values: values };
    }
  },
  async mounted() {
    const data = await API
      .get("cflipapi", "/homedata")
      .catch(error => console.log(error));

    this.btcPrice = this.formatBigNumbers(data['btc_price']);
    this.btcMarketCap = this.formatBigNumbers(data['btc_market_cap']);
    this.gldPrice = this.formatBigNumbers(data['gld_price']);
    this.gldMarketCap = this.formatBigNumbers(data['gld_market_cap']);
    this.btcGldFlipMult = data['btc_gld_flip_multiple'];
    this.btcGldFlipPrice = this.formatBigNumbers(data['btc_gld_flip_price']);
    this.btcGldFlipProg = (data['btc_gld_progress_perc'] * 100).toPrecision(3);
    this.btcGldPerfDiff = Math.round(data['btc_gld_perf_diff'] * 100, 0);
    this.btcGldFlipRatioData = this.formatTimeSeriesData(JSON.parse(JSON.parse(data['btc_gld_flip_ratio_series'])), 'percent');
    this.btcMarketCapPerfSeries = this.formatTimeSeriesData(JSON.parse(JSON.parse(data['btc_market_cap_series'])), '');
    this.gldMarketCapPerfSeries = this.formatTimeSeriesData(JSON.parse(JSON.parse(data['gld_market_cap_series'])), '');

    // Prepare BTC-GLD performance chart
    this.btcGldPerfChartData = {
      labels: this.btcMarketCapPerfSeries.dates,
      datasets: [
        {
          label: 'Bitcoin Market Cap',
          backgroundColor: '#F79400',
          data: this.btcMarketCapPerfSeries.values,
          fill: false,
        },
        {
          label: 'Gold Market Cap',
          backgroundColor: '#1A194D',
          data: this.gldMarketCapPerfSeries.values,
          fill: false,
        },
      ]
    };
    this.btcGldPerfChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        text: "Bitcoin & Gold Market Caps (Logarithmic, Billions)",
        fontSize: 14
      },
      legend: {
        display: false,
      },
      tooltips: {
        intersect: false,
        mode: 'index',
        callbacks: {
          label: function(tooltipItem, myData) {
            return '$' + (tooltipItem.value / 1000000000).toFixed(2);
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            callback: function(value, index, values) {
              return '$' + (value / 1000000000);
            }
          },
          type: 'logarithmic'
        }],
				// xAxes: [{
				// 	gridLines: {
				// 		display: false
				// 	}
				// }]
      }
    };

    // Prepare BTC-GLD flip progress chart
    this.btcGldRatioChartData = {
      labels: this.btcGldFlipRatioData.dates,
      datasets: [
        {
          label: 'Flip Progress',
          backgroundColor: '#F79400',
          data: this.btcGldFlipRatioData.values,
          fill: false,
        }
      ]
    };
    this.btcGldRatioChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        text: "Bitcoin-Gold Market Cap Ratio (aka Flip Progress)",
        fontSize: 14
      },
      legend: {
        display: false,
      },
      tooltips: {
        intersect: false,
        mode: 'index',
        callbacks: {
          label: function(tooltipItem, myData) {
            return tooltipItem.value + '%';
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            callback: function(value, index, values) {
              return value + '%';
            }
          },
          // type: 'logarithmic'
        }],
				// xAxes: [{
				// 	gridLines: {
				// 		display: false
				// 	}
				// }]
      }
    };

    // Prepare BTC price estimate chart
    const tmp = JSON.parse(data['btc_price_estimates']);
    var btcEstimateData = {
      market_cap: [],
      price: [],
    };
    for (var i = 0; i < tmp.length; i++) {
      btcEstimateData.market_cap.push('$' + this.formatBigNumbers(tmp[i][0]));
      btcEstimateData.price.push(tmp[i][1]);
    }
    this.btcEstimateChartData = {
      labels: btcEstimateData.market_cap,
      datasets: [
        {
          backgroundColor: '#F79400',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          data: btcEstimateData.price,
        }
      ]
    };
    this.btcEstimateChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        text: "Bitcoin Price Estimates Based On Future Market Caps",
        fontSize: 14
      },
      legend: {
        display: false,
      },
      tooltips: {
        intersect: false,
        mode: 'index',
        callbacks: {
          label: function(tooltipItem, myData) {
            var num = Math.round(tooltipItem.value);
            var numStr = num.toString();
            const numLen = numStr.length;

            if (numLen > 3 && numLen < 7) {
                const position = numLen - 3;
                numStr = numStr.substring(0, position) + ',' + numStr.substring(position);
            } else if (numLen > 6 && numLen < 10) {
                num = (num / 1000000).toPrecision(3);
                numStr = num.toString() + ' million';
            } else if (numLen > 9 && numLen < 13) {
                num = (num / 1000000000).toPrecision(3);
                numStr = num.toString() + ' billion';
            } else if (numLen > 12 && numLen < 16) {
                num = (num / 1000000000000).toPrecision(3);
                numStr = num.toString() + ' trillion';
            } else if (numLen > 15 && numLen < 19) {
                num = (num / 1000000000000000).toPrecision(3);
                numStr = num.toString() + ' quadrillion';
            }

            return '$' + numStr;
          },
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values) {
              return '$' + value;
            }
          },
        }],
				xAxes: [{
					gridLines: {
						display: false
					}
				}]
      }
    };

    // Format last update datetime
    this.lastUpdated = new Date(data['last_updated']);
    this.lastUpdated = new Date(this.lastUpdated.getTime() + this.lastUpdated.getTimezoneOffset() * 60000)
    this.lastUpdated = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        hour12: false
      }).format(this.lastUpdated) + ':00 UTC';
  }
};
</script>
