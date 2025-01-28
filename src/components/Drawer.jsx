'use client';  // This is a client-side component

import React from 'react'
import Link from 'next/link'

const Drawer = () => {
  // Function to close the drawer by unchecking the checkbox
  const closeDrawer = () => {
    const drawerToggle = document.getElementById('my-drawer-2');
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      {/* Mobile Button to open drawer */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Button to toggle the drawer visibility on mobile */}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>

      {/* Drawer sidebar */}
      <div className="drawer-side">
        {/* Overlay for closing the drawer */}
        <label 
          htmlFor="my-drawer-2" 
          aria-label="close drawer" 
          className="drawer-overlay"
          onClick={closeDrawer} // Close drawer when overlay is clicked
        ></label>

        <ul className="menu bg-blue-300 max-sm:w-[100vw] max-sm:fixed max-sm:z-10 border-r-0 border-gray-500 text-center text-white h-full w-[15vw] p-4">
          {/* Sidebar content */}
          <div className='flex flex-col mt-3 h-[90vh] gap-3'>
          <Link 
              href={"/"} 
              className='p-2 rounded-md bg-neutral-content lg:hidden md:hidden hover:text-white hover:bg-neutral' 
              onClick={closeDrawer} // Close drawer when a link is clicked
            >
             Close
            </Link>
            <Link 
              href={"/"} 
              className='p-2 rounded-md bg-neutral-content hover:text-white hover:bg-neutral' 
              onClick={closeDrawer} // Close drawer when a link is clicked
            >
              Sidebar Item 1
            </Link>
            <Link 
              href={"/"} 
              className='p-2 rounded-md bg-neutral-content hover:text-white hover:bg-neutral' 
              onClick={closeDrawer} // Close drawer when a link is clicked
            >
              Sidebar Item 2
            </Link>
            <div className='flex flex-col text-black mt-auto justify-center mb-8'>
              <p className='text-black'>Hello world</p>
              <p className='text-black'>Hello world</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Drawer;
