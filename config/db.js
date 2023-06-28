import mongoose from "mongoose";
import colors from "colors";
const connectDB = async (app) => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${connection.host}`.bgMagenta.white
    );
    //*: run listen
    app.listen(process.env.PORT, () => {
      console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${process.env.PORT}`.bgCyan
          .white
      );
    });
  } catch (error) {
    console.error(`Error in Mongodb ${error}`.bgRed.white, error.message);
  }
};

export default connectDB;
