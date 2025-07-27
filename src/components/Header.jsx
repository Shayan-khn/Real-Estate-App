import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link

 } from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-mid'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className="font-bold text-sm sm: text-xl flex flex-wrap">
                <span className="text-slate-500">Real</span>
                <span className="text-slate-700">Estate</span>
            </h1>
            </Link>
            <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                <input type="text" placeholder='Search...' className="bg-transparent" />
                <FaSearch className="text-slate-600"></FaSearch>
            </form>
            <ul className="flex gap-5">
                <Link to='/'>
                <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
                </Link>
                <Link to='/About'>
                <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
                </Link>
                <Link to='SignIn'>
                <li className="text-slate-700 hover:underline">Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
