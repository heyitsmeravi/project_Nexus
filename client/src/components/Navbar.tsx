import { NavLink } from "react-router-dom"
export default function Navbar(){
    return (
        <nav className="bg-gray-200 px-6 py-4 flex justify-between items-center">
            <h1 className="text-3xl text-blue-950 font-bold ">Project Nexus</h1>
            <div className="flex gap-10">
                <ul className="flex gap-10 text-blue-950 text-lg font-bold items-center ">
                    <li><NavLink className="cursor-pointer hover:text-blue-400 hover:underline" to="/">Home</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-blue-400 hover:underline" to="/upload">Upload Resume</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-blue-400 hover:underline" to="/dashboard">Dashboard</NavLink></li>
                </ul>
                <button className=" bg-white px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer" type='button'>Logout</button>
             </div>
        </nav>
    )
}