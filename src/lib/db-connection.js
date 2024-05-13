import mongoose from "mongoose";

export const dbConn = (uri) => {
  try {
    mongoose.connect(uri);
    console.log(`Database connected successfully !`);
  } catch (err) {
    console.log("Something went wrong , unabe to connect !");
  }
};
