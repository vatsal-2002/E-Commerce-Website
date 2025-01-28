import React, { useState } from 'react'

const Settings = () => {

  return (
    <>
    <div className='relative 2xl:container mx-auto overflow-hidden h-screen bg-gradient-to-br from-cyan-500 to-blue-500'>
        <div className='absolute w-full right-96 h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-300'></div>
        <div className='grid grid-cols-2 py-20 px-32 gap-10'>
            <div className='relative z-10'></div>
            <div className='relative z-10 pt-6 pb-8 px-10 text-white bg-gradient-to-tl from-teal-300 to-cyan-600 rounded-2xl' style={{boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)'}}>
                <p className='text-center text-2xl font-semibold'>Change Password</p>
                <div className='flex flex-col gap-3 pt-4'>
                    <div>
                        <p className='pb-1'>Email</p>
                        <input className='w-full p-2 rounded-md text-black focus:outline-none' placeholder='Enter Your Email' type='email'/>
                    </div>
                    <div>
                        <p className='pb-1'>Password</p>
                        <input className='w-full p-2 rounded-md text-black focus:outline-none' placeholder='Enter New Password' type='password'/>
                    </div>
                    <div>
                        <p className='pb-1'>Confirm Password</p>
                        <input className='w-full p-2 rounded-md text-black focus:outline-none' placeholder='Enter Confirm Password' type='text'/>
                    </div>
                    <div className='pt-7'>
                        <button className='w-full font-medium bg-gradient-to-tl from-cyan-500 to-blue-500 py-2 rounded-lg bg-'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Settings
