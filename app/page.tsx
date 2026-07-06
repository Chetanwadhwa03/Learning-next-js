import axios from "axios";

const fetchdata = async ()=>{
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data
}


interface datatype{
  name:"string",
  email:"string"
}

export default async function Home() {
  const info:datatype = await fetchdata();

  return (
   <div>
    Name:{info.name}
    <div>
      Email:{info.email}
    </div>
   </div>
  )
}
