import { getToken } from "next-auth/jwt";
import { NextResponse,NextRequest } from "next/server";


export  const config = {
    matcher : ["/sign-in","/sign-up"]
}

export async function middleware(request:NextRequest){
    console.log("inside")

    // const token = getToken({req,secret:"secret"})
    const token = await getToken({ req: request });
    console.log(token)
//    //  return NextResponse.redirect(new URL('/sign-in', request.url));
//     if(token){
//          return NextResponse.redirect(new URL('/sign-in', request.url));
//     }
}