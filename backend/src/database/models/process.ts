import { Schema, model, Document } from 'mongoose';
const timestamps = require('mongoose-timestamp');

export interface IProcess {
    contract: string,
    processId: number,
    status: boolean
}
  
const process = new Schema({
    contract: String,
    processId: Number,
    status: { type: Boolean, default: false }
})
  
process.plugin(timestamps)

export type IProcessModel = IProcess & Document
export const Process = model<IProcessModel>('Process', process)