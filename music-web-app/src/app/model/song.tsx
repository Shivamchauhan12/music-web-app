import { Schema } from "mongoose";
import mongoose from "mongoose";

const genre = [
  "Pop",
  "Rock",
  "Indie",
  "Alternative",
  "Hip Hop",
  "Rap",
  "R&B",
  "Soul",
  "Funk",
  "Electronic",
  "House",
  "Techno",
  "Trance",
  "EDM",
  "Dubstep",
  "Drum & Bass",
  "Trap",
  "Country",
  "Folk",
  "Acoustic",
  "Singer-Songwriter",
  "Blues",
  "Jazz",
  "Classical",
  "Orchestral",
  "Opera",
  "Reggae",
  "Ska",
  "Latin",
  "Salsa",
  "Merengue",
  "Bachata",
  "K-Pop",
  "J-Pop",
  "World",
  "Afrobeat",
  "Gospel",
  "Christian",
  "Metal",
  "Hard Rock",
  "Punk",
  "Emo",
  "Ambient",
  "Lo-fi",
  "Chillout",
  "Soundtrack",
  "Instrumental",
  "Cinematic",
  "Experimental",
  "House - Deep",
  "House - Progressive",
  "Synthwave",
  "Vaporwave",
  "New Age",
  "Bluegrass",
  "Electro Swing",
  "Grime",
  "Industrial",
  "World - Middle Eastern",
  "World - Indian",
  "Other"
]


interface SongInterface {
    title : string,
    author : string,
    genre : string,
    songUrl:string,
    user_id:mongoose.Types.ObjectId
}

const songSchema : Schema<SongInterface> = new Schema({
    title : {
        type :String,
        required : true
    },
     author : {
        type :String,
        required : true
    },
     genre : {
        type :String,
        enum : genre,
        required : true
    },
     songUrl : {
        type :String,
        required : true
    },
     user_id : {
        type :mongoose.Schema.Types.ObjectId,
        ref:"User",
        required : true
    },
})

const songModel = mongoose.models.Song as mongoose.Model<SongInterface> || mongoose.model<SongInterface>("Song",songSchema)

export default songModel