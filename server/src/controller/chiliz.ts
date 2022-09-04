import { Chiliz } from "../libraries/chilis"

const chiliz = new Chiliz()

export const startIndexer = async (req, res) => {
    const indexerStatus = chiliz.startIndexer()

    res.send({ status : 'Started the indexer!!' })
}

export const stopIndexer = async (req, res) => {
    const stopIndexer = chiliz.stopIndexer()

    res.send({ status: 'Stopped the indexer!!' })
}

export const getChilizAmount = async (req, res) => {
    const value = await chiliz.amountOfChilizTransfers()
    
    res.send({ amount: value })
}

export const checkTransactionValidation = async (req, res) => {
    const transactionValidaton = await chiliz.validChilizTransaction(req.body.transactionHash)
    
    res.send({transactionValidaton})
}