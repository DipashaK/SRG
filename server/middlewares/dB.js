const mongoose = require('mongoose')
const username = 'dipasha';
const password = 'dipasha0505';

const url = `mongodb+srv://${username}:${password}@cluster0.n7uyeu6.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0`

const connectDb = async () => {
    try{
        const data = await mongoose.connect(url)
        console.log(data);
    } catch(err) {
        console.log(err)
    }
}

module.exports = connectDb