import React from 'react'
import { ClipLoader } from 'react-spinners'
const Spinner = () => {
  return (
    <div className='loader-conatiner'>
      <div className="loader">
      <ClipLoader />
      </div>
    </div>
  )
}

export default Spinner
