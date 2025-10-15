
import mongoose, { Schema,Document } from "mongoose";

 interface UserType extends Document {
    name:string,
    email:string,
    password:string,
    playlist:mongoose.Types.ObjectId[], 
    isVerified : boolean,
    verificationToken : string,
    verificationTokenExpires : Date,
    verifiedAt:Date,
    created_at:Date,
    updated_at:Date  
}

const userSchema  = new Schema<UserType>({
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
    playlist:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Playlist",
        required:true
        }
    ],
     isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: String,
    verificationTokenExpires: Date,
    verifiedAt: Date,
},
{
    timestamps:true
})



userSchema.post('save', function(doc, next) {
  console.log('A new user document was saved:', doc);
  
 
  next(); // Call next to continue the middleware chain
});



const userModel = mongoose.models.User as mongoose.Model<UserType> || mongoose.model<UserType>("User",userSchema);

export default userModel


