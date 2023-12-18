import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className="bg-blue-500 text-white p-4 flex justify-around items-center text-xl font-bold">
        <h1 className="text-2xl font-bold" >logo</h1>
        <ul className="flex no-underline invisible md:visible" >
            <li className="link ">Home</li>
            <li className="link">About</li>
            <li className="link">Blogs</li>
            <li className="link">Contact</li>
        </ul>
        <button className="bg-slate-950 w-14 h-8 rounded-xl md:invisible">mu</button>
      </div>
    )
  }
}

export default Navbar
