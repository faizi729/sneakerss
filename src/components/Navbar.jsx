import React from 'react'
import img1 from "../../images/icon-cart.svg"
import img3 from "../../images/logo.svg"

import img2 from "../../images/image-avatar.png"
const Navbar = () => {
  return (
    <>
    <nav className="flex flex-row justify-between items-center max-w-7xl mx-auto p-6">
      <div className="flex flex-row items-center gap-10">
        <img src={img3} alt="logo" className="object-contain" />
        <ul className="flex flex-row text-[#9b9da1] gap-8">
          <li><a href="#home" className=' pb-8 hover:border-2 hover:border-b-[#ff7d1a] hover:border-t-0 hover:border-l-0 hover:border-r-0'>Collections</a></li>
          <li><a href="#home" className=' pb-8 hover:border-2 hover:border-b-[#ff7d1a] hover:border-t-0 hover:border-l-0 hover:border-r-0'>Men</a></li>
          <li><a href="#home" className=' pb-8 hover:border-2 hover:border-b-[#ff7d1a] hover:border-t-0 hover:border-l-0 hover:border-r-0'>Women</a></li>
          <li><a href="#home" className=' pb-8 hover:border-2 hover:border-b-[#ff7d1a] hover:border-t-0 hover:border-l-0 hover:border-r-0'>About</a></li>
          <li><a href="#home" className=' pb-8 hover:border-2 hover:border-b-[#ff7d1a] hover:border-t-0 hover:border-l-0 hover:border-r-0'>Contact</a></li>
        </ul>
      </div>

      <div className="flex flex-row items-center gap-7">
        <img src={img1} alt="cart" className="object-contain" />
        <img src={img2} alt="user" className="w-10 h-10 rounded-full cursor-pointer object-cover hover:border-2 hover:border-[#FF7D1A]" />
      </div>
    </nav>
      <hr className='max-w-7xl mx-auto text-[#cdd0d6]  '/>
    </>
  )
}

export default Navbar;
