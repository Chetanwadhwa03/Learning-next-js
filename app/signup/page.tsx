"use client"

import { useState } from "react"
import axios from "axios";

export default function signup() {
    const [email, setemail] = useState<string>();
    const [password, setpassword] = useState<string>();
    const [success, setsuccess] = useState<boolean>(false);
    const [message, setmessage] = useState<string>("");

    const handlesignup = async () => {
        // @ts-ignore
        const response = await axios.post("http://localhost:3000", { email: email, password: password });
        setmessage(response.data.message);
        setsuccess(true);
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-500">
            <h1 className="p-2 font-semibold">Hey! It is a signup Page.</h1>
            {success ? (
                <div className="text-green-500 p-2 text-center m-2 border-2">
                    {message}
                </div>
            ) : (
                <div className="p-4 min-h-40 bg-amber-100 border-black border-2 flex flex-col m-2 justify-center items-center h-30 ">
                    <input className="p-3 border-black" placeholder="Enter the Email" onChange={(e) => {
                        setemail(e.target.value)
                    }}></input>
                    <input className="p-3 border-black" placeholder="Enter the password" onChange={(e) => {
                        setpassword(e.target.value)
                    }}></input>
                    <button className="m-2 cursor-pointer border-3 rounded-2xl p-2 hover:bg-amber-500" onClick={handlesignup}>sign up</button>
                </div>
            )}
        </div>

    )

}