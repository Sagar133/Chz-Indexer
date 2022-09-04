
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/4066.png" alt="Logo" width="80" height="80">
  </a>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

Chiliz indexer is a web3 project built using Nodejs on MVC architecture model.

It's usecase:
* Subscribes to a contract address on blockchain using Web3js
* Stores the contract related transactions in NoSql database
* Fetches an transaction details using web3 through transaction hash and validaties if the transaction is related to a given smart contract

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* Node.js
* Web3.js
* MongoDB
* Express.js
* Postman

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Write an **.env** file with following details :-
```
PORT=3000
NODE_ENV=production

DATABASE_URI=mongodb://127.0.0.1:27017/chz

ALCHEMY_URL=wss://eth-mainnet.g.alchemy.com/v2/your_key
ALCHEMY_HTTP=https://eth-mainnet.g.alchemy.com/v2/your_key

```

### Prerequisites

This project requires Nodejs installed and MongoDB setuped and running locally and the given PORT in the .env to be vacant(No process running on that port).

### Installation

1. Get a free RPC and WSS URL at [https://www.alchemy.com/]
2. Clone the repo
   ```sh
   git clone https://github.com/Sagar133/Chz-Indexer.git
   ```
3. Install NPM packages
   ```sh
   yarn / npm install
   ```
4. Build the project
   ```sh
   yarn build
   ```
5. Start the project
   ```sh
   yarn start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

The following curl commands written in **Postman-Curls.txt(https://github.com/Sagar133/Chz-Indexer/blob/main/Postman-Curls.txt)** can be tested through terminal or postman.

<!-- ROADMAP -->
## Roadmap

- [x] Implement Indexer Backend
- [x] Index the Ethereum blockchain in real time for Chiliz contract address
- [x] Store all transactions of Chiliz related transactions in blockchain
- [x] Api route to fetch the amount of Chiliz tokens transferred while listening to transactions from indexer
- [x] Api route to validate if a given transaction hash is related to Chiliz token(Chiliz smart contract)
- [ ] Frontend in react for the indexer (https://github.com/Sagar133/Chz-indexer-frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Sagar Behara - sagarbehara13@gmail.com

Project Link: [https://github.com/Sagar133/Chz-Indexer](https://github.com/Sagar133/Chz-Indexer)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

