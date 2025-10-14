import mongoose from "mongoose";

type connectionObject = {
    isConnected: number
}


export async function dbConn() : Promise<void> {
    const connection: connectionObject = {
        isConnected: 0
    }
    if (connection.isConnected) {
        console.log("database already connected");
        return;
    }

    try {
        const conn = await mongoose.connect("uir", {})
        connection.isConnected = conn.connections[0].readyState
        console.log("Db connected sucessfuly");
    } catch (error) {
        console.log(error);
        process.exit();
    }
}