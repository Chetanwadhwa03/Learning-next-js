import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({connectionString:process.env.DATABASE_URL})
})

const fetchdata = async ()=>{
  const data = await prisma.users.findFirst({})
  return data;

}


interface datatype{
  id:number
  email:string,
  password:string
}

export default async function Home() {
  // @ts-ignore
  const info:datatype = await fetchdata();

  return (
   <div>
    Email:{info.email}
    <div>
      Password:{info.password}
    </div>
   </div>
  )
}
