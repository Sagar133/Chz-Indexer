require('dotenv').config()

import mongoose from 'mongoose'

export const open = (url?: string) => {
  return new Promise((resolve, reject) => {
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
