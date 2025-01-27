import React from 'react'
import { Watch } from 'react-loader-spinner';


export default function Loading() {
  return (
    <div className='absolute  inset-0 flex bg-opacity-50 bg-black justify-center items-center'>
      <Watch
  visible={true}
  height="80"
  width="80"
  radius="48"
  color="#4fa94d"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}
