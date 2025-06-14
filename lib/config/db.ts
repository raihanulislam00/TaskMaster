import mongoose from "mongoose";
export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://mridul80:vlgqNythKHeZj7qI@prismaorm.zwq2j.mongodb.net/task-Next"
  );
  console.log("Database Connected");
};
