import mongoose from 'mongoose'
import config from '../../config/config.js'

export const connectDB = () => {

    mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('Successfully connected to DB')
    })
    .catch(err => console.log(err))

}
