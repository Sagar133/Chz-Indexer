<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/4066.png" alt="Logo" width="80" height="80">
    <h2 align="center"> Chiliz Indexer </h2>
  </a>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

Chiliz indexer is a web3 project built using Nodejs on the MVC architecture model.

Its use-case:
* Subscribes to a contract address on the blockchain using Web3js
* Stores the contract-related transactions in the NoSql database
* Fetches a transaction detail using web3 through transaction hash and validates if the transaction is related to a given smart contract

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgments section. Here are a few examples.

* Node.js
* Web3.js
* MongoDB
* Express.js
* Postman

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Write an **.env** file with the following details :-
```
PORT=3000
NODE_ENV=production

DATABASE_URI=mongodb://127.0.0.1:27017/chz

ALCHEMY_URL=wss://eth-mainnet.g.alchemy.com/v2/your_key
ALCHEMY_HTTP=https://eth-mainnet.g.alchemy.com/v2/your_key

```

### Prerequisites

This project requires Nodejs installed and MongoDB setup and running locally and the given PORT in the .env to be vacant(No process running on that port).
rimraf installed globally.

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
- [x] Index the Ethereum blockchain in real time for the Chiliz contract address
- [x] Store all transactions of Chiliz-related smart contract from the blockchain
- [x] API route to fetch the amount of Chiliz tokens transferred while listening to transactions from the indexer
- [x] API route to validate if a given transaction hash is related to Chiliz token(Chiliz smart contract)
- [x] Continue to listen from the last captured block incase of any down time
- [x] Tested interoperability by running the program on another machine with different OS
- [ ] Frontend in react for the indexer (https://github.com/Sagar133/Chz-indexer-frontend)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Sagar Behara - sagarbehara13@gmail.com

Project Link: [https://github.com/Sagar133/Chz-Indexer](https://github.com/Sagar133/Chz-Indexer)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
