require('dotenv').config()

const Contract = require('web3-eth-contract');
const process = require('process');

const chzAbi = require('./abi/chilizAbi.json');
const shibAbi = require('./abi/chilizAbi.json');

Contract.setProvider(process.env.INFURA_URL);

export class Chiliz {
    chzContract
    shibContract

    constructor(){
        this.chzContract = new Contract(
            chzAbi,
            '0x3506424F91fD33084466F402d5D97f05F8e3b4AF'
        );

        this.shibContract = new Contract(
            shibAbi,
            '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE'
        )
    }

    subscribeWs(){
        console.log("process id is ", process.pid);
        
        this.chzContract.events.allEvents()
        .on('data', async (event) => {
            console.log('maha event restart', event);
        })
        .on('error', console.error);
    }
}

const main = async () => {
    console.log('CHZ');
    
    let chz = new Chiliz()
    chz.subscribeWs()
}

main()