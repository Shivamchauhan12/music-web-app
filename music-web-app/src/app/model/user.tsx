
import mongoose, { SchemaType } from "mongoose";
import { Schema } from "mongoose";

 interface UserType {
    name:string,
    email:string,
    password:string,
    playlist:mongoose.Types.ObjectId, 
    created_at:Date,
    updated_at:Date  
}

const userSchema : Schema<UserType> =  new Schema({
    name :{
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    playlist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Playlist",
        required:true
    }
},{
    timestamps:true
})


const userModel = mongoose.models.User as mongoose.Model<UserType> || mongoose.model<UserType>("User",userSchema);

export default userModel


