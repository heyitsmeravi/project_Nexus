import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import {Menu, X} from "lucide-react";
export default function Navbar(){
    const navLinkClass=({isActive}:{isActive:boolean})=>isActive? "text-blue-600 underline text-2l cursor-default":"text-blue-950 hover:text-blue-400 hover:underline cursor-pointer transition-colors";
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen,setMenuOpen] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return (
        <nav className={`fixed top-0 left-0 w-full z-50 bg-gray-200/40 backdrop-blur-md px-6 flex justify-between items-center ${scrolled ? 'bg-black/40 py-2 backdrop-blur-md shadow-2xl' : 'py-4'}`} >
            <div className="flex align-items">
            <img src="../src/assets/logo.png" alt="nexus-logo" width="40px" ></img>
            <h1 className={`text-black font-bold ${scrolled?'text-7xl':'text-3xl'}`}>Project Nexus</h1>
            </div>
            <div className="hidden md:flex gap-10 items-center">
                <ul className="flex gap-10 text-lg font-bold">
                    <li><NavLink className={navLinkClass} to="/">Home</NavLink></li>
                    <li><NavLink className={navLinkClass} to="/upload">Upload Resume</NavLink></li>
                    <li><NavLink className={navLinkClass} to="/dashboard">Dashboard</NavLink></li>
                </ul>
                <button className=" bg-black text-white px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer" type='button'>Logout</button>
             </div>
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28}></X> : <Menu size={28}/>}
            </button>
            {
              menuOpen&& (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
                  <NavLink className={navLinkClass} to="/" onClick={()=>setMenuOpen(false)}>Home</NavLink>
                  <NavLink className={navLinkClass} to="/upload" onClick={()=>setMenuOpen(false)}>Upload Resume</NavLink>
                  <NavLink className={navLinkClass} to="/dashboard" onClick={()=>setMenuOpen(false)}>Dashboard</NavLink>
                  <button className="bg-blue-800 px-5 py-3  rounded-md" type='button'>Logout</button>
                </div>
              )
            }
        </nav>
    )
}