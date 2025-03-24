import { ObjectId } from "mongodb"

export type UserType = {
    _id: ObjectId;
    username: string;
    userpassword: string;
}

export type KindeUserType = {
    id: string;
    email: string;
    family_name: string;
    given_name: string;
    picture: string;
    username: undefined;
    phone_number: undefined;
}