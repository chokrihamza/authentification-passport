const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get('mongoURI');

//third step 
//@ connect to DB

const connectDB = async () => {
      try {
            await mongoose.connect(mongoURI, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
            })
            console.log(`dbAtlas connect successfully`);
      } catch (e) {
            console.error(e)
      }
}

module.exports = connectDB