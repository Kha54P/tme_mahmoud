import React from 'react'
import style from './Footer.module.css'
import logo from '../../assets/branch-1.svg'
export default function Footer() {
  return<>
  <footer>
    <div className=" container p-5 ">
      <div className="row align-items-center">
        <div className="col-md-4">
            <img src={logo} className='w-25' alt="logo" />
        </div>
        <div className="col-md-8">
          <h1 className=' fw-bolder'>EGYPTIAN LANGUAGE SCHOOL</h1>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-3">
          <div className="fot">
          <h2 className='pb-0'>NASR CITY</h2>
          <p className='p-0'>Campus</p>
          </div>
          <p className='foo-end mt-5 pointer'>National <i class="arrow fa-solid fa-arrow-right "></i></p>
        </div>
  
        <div className="col-md-3">
          <div className="fot">
          <h2 className='pb-0'>NEW CAIRO</h2>
          <p className='p-0'>Campus</p>
          </div>
          <p className='foo-end mt-5 pointer'>National <i class="arrow fa-solid fa-arrow-right "></i></p>
          <p className='foo-end  pointer'>American <i class="arrow fa-solid fa-arrow-right "></i></p>
          <p className='foo-end  pointer'>Britsh <i class="arrow fa-solid fa-arrow-right "></i></p>
        </div>
        <div className="col-md-3">
          <div className="fot">
          <h2 className='pb-0'>6TH OCTOBER</h2>
          <p className='p-0'>Campus</p>
          </div>
          <p className='foo-end mt-5 pointer'>National <i class="arrow fa-solid fa-arrow-right "></i></p>
          <p className='foo-end  pointer'>American <i class="arrow fa-solid fa-arrow-right "></i></p>
          <p className='foo-end  pointer'>Britsh <i class="arrow fa-solid fa-arrow-right "></i></p>
        </div>
  
        <div className="col-md-3">
          <div className="fot">
          <h2 className='pb-0'>EL SHOROUK</h2>
          <p className='p-0'>Campus</p>
          </div>
          <p className='foo-end mt-5  pointer'>American <i class="arrow fa-solid fa-arrow-right "></i></p>
          <p className='foo-end  pointer'>Britsh <i class="arrow fa-solid fa-arrow-right "></i></p>
        </div>
  
      </div>
    </div>
  </footer>
  </>
}
