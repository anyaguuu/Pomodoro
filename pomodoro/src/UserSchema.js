import {User, UserTC} from "./UserModel";

const UserQuery = {
    userOne: UserTC.getResolver("findOne"),
};

const UserMutation = {
    userUpdateOne: UserTC.getResolver("updateOne"),
}

export { UserQuery, UserMutation };