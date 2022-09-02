require('dotenv').config()

import * as mongoose from 'mongoose'
import * as debug from 'debug'
import * as Bluebird from 'bluebird'

// @ts-ignore
mongoose.Promise = Bluebird
// mongoose.set('debug', true)

export const open = (url?: string) => {
  return new Promise((resolve, reject) => {
    // Setup cache for mongoose
    // cachegoose(mongoose)
    console.log('opening mongodb connection')

    const options:any = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false
    }

    mongoose.connect(process.env.DATABASE_URI, (error: any) => {
      if (error) {
        console.log('please make sure mongodb is installed and running!')
        return reject(error)
      } else {
        console.log('mongodb is connected')
      }
    })
  })
}

export const close = () => mongoose.disconnect()
