import userModel from "@/app/model/user";
import { dbConn } from "@/app/dbConnect/mongoConnection";


export async function POST (req:Request){
       await dbConn()
       const { username, password, confirmPassword } = await req.json();


            try {

                

                
            } catch (error) {
                
            }

}


