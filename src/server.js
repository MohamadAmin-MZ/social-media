const app = require("./app")
const mongoose = require("mongoose")
const dotenv = require("dotenv")


//load env

dotenv.config()

//start srver
const startServer = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongoose connected to: ${mongoose.connection.host}`);

        app.listen(process.env.PORT, () => {
            console.log(`server runing on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

const runServer = async () => {
    await startServer()

}

runServer()
