export default function signup(){
    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-500">
            <h1 className="p-2 font-semibold">Hey! It is a signup Page.</h1>
            <div className="p-4 min-h-40 bg-amber-100 border-black border-2 flex flex-col m-2 justify-center items-center h-30 ">
                <input className="p-3 border-black" placeholder="Enter the Email"></input>
                <input className="p-3 border-black" placeholder="Enter the password"></input>
                <button className="m-2">sign up</button>
            </div>
        </div>
        
    )
}