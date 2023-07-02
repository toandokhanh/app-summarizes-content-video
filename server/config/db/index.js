const mongoose = require('mongoose');
const NoiseReductions = require('../db/seeder/NoiseReductionSeeder')
// const seedersList = {
//     NoiseReductions
//   };
async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            // useCreateIndex: true,
            useNewUrlParser: true,
        });
        console.log('Connect successfully :))');
    } catch (error) {
        console.log('Connect failure :((');
    }
}
module.exports = { connect };