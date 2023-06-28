import mongoose from "mongoose";
import colors from "colors";

mongoose.set('strictQuery', false);

const connectDB = async (app) => {
  const connection = mongoose.connect(process.env.MONGO_URL).then(({ connection }) => {
    console.log(`Connected To Mongodb Database ${connection.host} `);
    //*: Run listen
    app.listen(process.env.PORT, () => {
      console.log(`Server Running on port ${process.env.PORT} `);
    });
    return connection;
  }).catch((error) => {
    console.error('Error in Mongodb:', error.message);
  })
};

export default connectDB;
