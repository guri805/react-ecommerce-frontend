import React from 'react'
import { Button, TextField } from '@mui/material';
import MyAccountLeftSideBar from '../../components/Comman/MyAccountLeftSideBar';

const MyAccount = () => {
  return (
    <section className='py-10'>
      <div className="container flex gap-5 ">
        <div className="colOne w-1/4">
         <MyAccountLeftSideBar/>
        </div>
        <div className="colTwo w-3/4">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className='pb-3'>My Profile</h2>
            <hr />

            <form className='mt-5'>
              <div className="grid grid-cols-2 items-center gap-5">
                <TextField
                  label="Full Name"
                  variant='outlined'
                  size='small'
                  className='w-full'
                  type='text'
                />
                <TextField
                  label="Email"
                  variant='outlined'
                  size='small'
                  type='email'
                  className='w-full'
                />
                <TextField
                  label="Phone Number"
                  variant='outlined'
                  size='small'
                  type='text'
                  className='w-full'
                />
              </div>
              <div className="btn mt-5 flex items-center gap-5">
                <Button className='uppercase !text-white !bg-primary'>Save</Button>
                <Button className='uppercase !text-white !bg-primary'>Cancel</Button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccount
