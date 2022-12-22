import {User, UserTC} from "./UserModel";

const UserQuery = {
    userOne: UserTC.getResolver("findOne"),
};

const UserMutation = {
    userUpdateOne: UserTC.getResolver("updateOne"),
}
// default resolvers

export { UserQuery, UserMutation };