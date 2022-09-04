require('dotenv').config()

const Web3 = require('web3');
const Bluebird = require('bluebird')
const web3 = new Web3(process.env.ALCHEMY_HTTP)

const ChilizAddress = "0x3506424F91fD33084466F402d5D97f05F8e3b4AF"

export const TransactionDetails = async (transactionHash: string) => {
    try {
        const data = await web3.eth.getTransactionReceipt(transactionHash)
        const logs = data.logs
        
        let levelCheckOne:boolean = false
        let levelCheckTwo:boolean = false

        if (data.contractAddress){
            if((data.contractAddress).toLowerCase() == (ChilizAddress).toLowerCase())
                levelCheckOne = true
        }

        if(logs.length > 0) {
            await Bluebird.mapSeries(data.logs, async (result) => {
                if((result.address).toLowerCase() == (ChilizAddress).toLowerCase())
                    levelCheckTwo = true
            })
        }

        return levelCheckTwo
    } catch(e) {
        if(e){
            return "error"
        }
    }
}

