import mongoose from 'mongoose';

const Connection = async (username, password) => {
    
    const URL =`mongodb://Harjot_Singh:7913harjot@ac-4mv0x3i-shard-00-00.glgqtld.mongodb.net:27017,ac-4mv0x3i-shard-00-01.glgqtld.mongodb.net:27017,ac-4mv0x3i-shard-00-02.glgqtld.mongodb.net:27017/MERN?ssl=true&replicaSet=atlas-xc02ab-shard-0&authSource=admin&retryWrites=true&w=majority`
    //const URL = `mongodb://Harjot_Singh:7913harjot@ac-4mv0x3i-shard-00-00.glgqtld.mongodb.net:27017,ac-4mv0x3i-shard-00-01.glgqtld.mongodb.net:27017,ac-4mv0x3i-shard-00-02.glgqtld.mongodb.net:27017/MERN?ssl=true&replicaSet=atlas-xc02ab-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;