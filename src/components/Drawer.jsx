import React from 'react'
import Link from 'next/link'

const Drawer = () => {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
 
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-center text-white min-h-full w-[15vw] p-4">
      {/* Sidebar content here */}
      <div className='flex flex-col mt-3 h-[90vh]  gap-3'>
      <Link href={"/"}  className=' p-2 rounded-md bg-neutral-content hover:text-white hover:bg-neutral' >Sidebar Item 1</Link>
      <Link href={"/"} className=' p-2 rounded-md bg-neutral-content hover:text-white hover:bg-neutral'>Sidebar Item 2</Link>
      <div className='flex flex-col   text-black mt-auto justify-center mb-8'>
        <p className='text-black'>Hello world</p>
        <p className='text-black'>Hello world</p>
      </div>
      </div>
    </ul>
  </div>
</div>
  )
}

export default Drawer
