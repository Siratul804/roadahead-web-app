import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    // const db = await mongoose.connect(
    //   "mongodb+srv://islamsiratul:OsEQ59Zzj9f6EEUt@cluster0.yqygvlq.mongodb.net/RoadAhead?retryWrites=true&w=majority&appName=Cluster0"
    // );
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
