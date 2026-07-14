const app = require("./app")
const mongoose = require("mongoose")
require("dotenv").config();

// (async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL)
//     console.log("mongoose connected.");
//     } catch (error) {
//         console.log(error);
        
//     }
// })()


app.listen(process.env.PORT, () => {
    console.log(`server runing on port ${process.env.PORT}`);
})