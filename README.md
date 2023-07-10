# [Bitcoin Flips Gold](https://bitcoinflips.gold/)

![Bitcoin Flips Gold meme](https://bitcoinflips.gold/bitcoin-flips-gold-meme.png)

Bitcoin Flips Gold is a single-page application built with [Vue](https://vuejs.org/) on top of [AWS Amplify](https://aws.amazon.com/amplify/) that presents regularly updated analytics regarding the progress of Bitcoin's market cap overtaking gold's market cap.

## Data

The data used to populate the [Chart.js](https://www.chartjs.org/) visualizations comes from [CoinGecko](https://www.coingecko.com/) and [Gold API](https://www.goldapi.io/). This data is updated every 3 hours via a containerized scheduled task written in [Python](https://www.python.org/) and hosted on [AWS](https://aws.amazon.com/).

Thank you!

-- [Grant](https://www.linkedin.com/in/grantbartel/)
