import React from 'react';
import './body.css'

const Body = () => {
  return <div className='b1 container card'>
          <button className='b2 btn btn-sm btn-info'>Sign In</button>
            <h6 className='b3 text-center'>Or</h6>
         <button className='b4 btn btn-sm btn-info'>Sign Up</button>
            <h5 className='b5 text-center'> Go with <i className='b8 fa fa-hand-o-down'></i></h5>
            <span className='text-center'>
              <i className='b6 fa fa-google'></i>
              <i className='b7 fa fa-facebook-official'></i>
            </span>
         </div>
}
export default Body;
