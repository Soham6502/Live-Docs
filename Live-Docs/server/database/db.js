import mongoose from "mongoose";

const Connection = async (username = "usercode", password = "Soham2002") => {
  const URL = `mongodb://${username}:${password}@ac-7d5eck1-shard-00-00.oqn8epi.mongodb.net:27017,ac-7d5eck1-shard-00-01.oqn8epi.mongodb.net:27017,ac-7d5eck1-shard-00-02.oqn8epi.mongodb.net:27017/?ssl=true&replicaSet=atlas-n1kpty-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with database", error);
  }
};

export default Connection;
