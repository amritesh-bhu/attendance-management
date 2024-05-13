import { Schema, model } from "mongoose";
import { createHashRouter } from "react-router-dom";

const employeeSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  salt: { type: String, unique: true },
  firstName: { type: String, unique: true },
  lastName: { type: String, unique: true },
  phoneNumber: { type: String, unique: true },
});

const userModel = model("employee", employeeSchema);

const hashPassword = (password, salt) =>
  crypto.createHash("md5").update(Buffer.from(password)).digest("hex") + salt;

//Authenticating user
const authenticateUser = async ({ email, password }) => {
  const employee = await userModel.findOne({ email });
  if (!employee) throw new Error("User does not exist");
  if (userModel.password == hashPassword(password, employee.salt)) {
    return employee;
  }
  throw new Error("Invalid email/password !");
};
