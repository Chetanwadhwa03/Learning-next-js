import { NextResponse,NextRequest } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
    adapter: new PrismaPg({connectionString:process.env.DATABASE_URL})
})


export async function GET(){
    const data = await prisma.users.findFirst({});
    return NextResponse.json({email:data?.email,password:data?.password});
}

export async function POST(req : NextRequest){
    const data = await req.json();
    const res = await prisma.users.create({
        data:{
            email:data.email,
            password:data.password
        }
    })
   console.log(res.id);
   return NextResponse.json({message:'User signed up successfully!!!!'});
    
}