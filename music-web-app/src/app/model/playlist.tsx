import { Schema, model, models, Document } from "mongoose";
import mongoose from "mongoose";

interface Playlist extends Document {
  user_id: mongoose.Types.ObjectId;
  songs: mongoose.Types.ObjectId[];
  playlistTitle: string;
}

const playlistSchema = new Schema<Playlist>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    songs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
        required: true,
      },
    ],
    playlistTitle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PlaylistModel =
  models.Playlist || model<Playlist>("Playlist", playlistSchema);

export default PlaylistModel;
