import React from 'react';
import './body.css'

const Body = () => {
  return <div className='b1 container card'>

          <div className='text-center'>
                <button className=' b2 btn btn-sm shadow'>Sign In</button>
                <h6 className='b3'>Or</h6>
                <button className='b4 btn btn-sm shadow'>Sign Up</button>
         </div>

          <div className='text-center'>
            <h5 className='b5'> Continue with <i className='fa fa-hand-o-down'></i></h5>
              <span>
                <i className='b6 fa fa-google'></i>
                <i className='b7 fa fa-facebook-official'></i>
             </span>
         </div>
         </div>
}
export default Body;
