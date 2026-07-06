import { NextResponse,NextRequest } from "next/server";

export async function GET(){
    return Response.json({name:"Chetan Wadhwa",email:"chetanwadhwa@xyz.com"});
}

export async function POST(req : NextRequest){
    const data = await req.json();
   
    return NextResponse.json({message:"You have been signed up !!!!"});
}