require('dotenv').config()
// package imports
const Contract = require('web3-eth-contract');
const process = require('process');
const Bluebird = require('bluebird')
// file imports
const { Process, IProcess } = require('../database/models/process')
const { Transaction } = require('../database/models/transaction')
const { TransactionDetails } = require('./web3Transaction')

const chzAbi = require('../abi/chilizAbi.json');
const shibAbi = require('../abi/shiba.json');

Contract.setProvider(process.env.ALCHEMY_URL);

export class Chiliz {
    chzContract: any
    shibContract: any
    blockNumber: number
    
    chilizAddress: string = '0x3506424F91fD33084466F402d5D97f05F8e3b4AF';
    shibaAddress: string = '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE';

    constructor(){
        this.chzContract = new Contract(
            chzAbi,
            this.chilizAddress
        );

        this.shibContract = new Contract(
            shibAbi,
            this.shibaAddress
        );
    }

    async startIndexer(){
        const findProcess = await Process.findOne({
            contract: this.chilizAddress
        })

        if (findProcess) {
            findProcess.set('processId', process.pid)
            findProcess.set('status', true)

            await findProcess.save()
        } else {
            const newProcess = new Process({
                contract: this.chilizAddress,
                processId: process.pid,
                status: true
            })

            await newProcess.save()
        }

        this.blockNumber = await this.getLastBlock()
        
        if(this.blockNumber != 0) {

            this.chzContract.events.allEvents({
                fromBlock: this.blockNumber
            })
            .on('data', async (event) => {    
                await this.writeTransactions(event)
            })
            .on('error', console.error);
        } else {

            this.chzContract.events.allEvents()
            .on('data', async (event) => {    
                await this.writeTransactions(event)
            })
            .on('error', console.error);
        }
    }

    async stopIndexer(){
        const findProcess = await Process.findOne({
            contract: this.chilizAddress,
            status: true
        })

        if (findProcess) {
            findProcess.set('status', false)

            await findProcess.save()

            process.kill(findProcess.processId)
        } 
    }

    async writeTransactions(data) {
        const checkTransactionExistense = await Transaction.findOne({
            transactionHash: data.transactionHash
        })

        if(!checkTransactionExistense) {
            const newTransaction = new Transaction({
                contract: this.chilizAddress,
                blockHash: data.blockHash,
                blockNumber: data.blockNumber,
                transactionHash: data.transactionHash,
                event: data.event,
                from: data.returnValues.from,
                to: data.returnValues.to,
                value: (Number(data.returnValues.value) / 1e18 ),
                data: data
            })

            await newTransaction.save()
        }
    }

    async getLastBlock() {
        const checkTransaction = await Transaction.find().sort({'blockNumber': -1 })

        if (checkTransaction.length > 0) {
            return checkTransaction[0].blockNumber
        }

        return 0
    }

    async amountOfChilizTransfers() {
        const checkTransaction = await Transaction.find({
            event: "Transfer"
        })

        let chilizAmount:number = 0
        await Bluebird.mapSeries(checkTransaction, (data) => {    
            chilizAmount += data.value
        })

        return chilizAmount
    }

    async validChilizTransaction(transactionHash: string) {
        const checkTransaction = await Transaction.findOne({
            transactionHash: transactionHash
        })

        if(checkTransaction){
            return {
                success: true,
                msg: "Valid Chiliz Program Transaction"
            }
        } else {
            let transactionValidation = await TransactionDetails(transactionHash)

            if (transactionValidation == "error") {
                return { msg: "Invalid Ethereum Transaction Hash"}
            }

            if (transactionValidation) {
                return {
                    success: transactionValidation,
                    msg: "Valid Chiliz Transaction"
                }
            } else {
                return {
                    success: transactionValidation,
                    msg: "Not A Valid Chiliz Transaction"
                }
            }
        }
    }
}

// const main = async () => {
//     console.log('CHZ');
    
//     let chz = new Chiliz()
//     chz.getLastBlock()
// }

//  main()