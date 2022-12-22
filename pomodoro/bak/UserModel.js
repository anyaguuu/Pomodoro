import { composeWithMongoose } from "graphql-compose-mongoose";

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

require("./db");

var UserSchema = new Schema({
    name: {type: String},
    gender: {type: String},
});

export const User = mongoose.model("names", UserSchema);
export const UserTC = composeWithMongoose(User);