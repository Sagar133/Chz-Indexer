import { Schema, model, Document } from 'mongoose';
const timestamps = require('mongoose-timestamp');

export interface ITransaction {
    contract: string,
    blockHash: string,
    blockNumber: number,
    transactionHash: string,
    event: string,
    from: string,
    to: string,
    value: number,
    data: object
}
  
const transactions = new Schema({
    contract: String,
    blockHash: String,
    blockNumber: Number,
    transactionHash: String,
    event: String,
    from: String,
    to: String,
    value: Number,
    data: Object
})
  
transactions.plugin(timestamps)

export type ITransactionModel = ITransaction & Document
export const Transaction = model<ITransactionModel>('Transaction', transactions)