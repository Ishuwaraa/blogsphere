import mongoose from "mongoose";

const connection = {}

const connectToDb = async () => {
    try {
        if(connection.isConnected) {
            console.log('using an existing connection')
            return 
        } else {
            const db = await mongoose.connect(process.env.MONGODB_URI)
            connection.isConnected = db.connections[0].readyState
        }
    } catch (err) {
        console.log(err.message)
    }
}

export default connectToDb