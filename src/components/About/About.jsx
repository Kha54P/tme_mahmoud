import React from 'react'
import style from './About.module.css'
import about1 from '../../assets/home1.jpg'
import about2 from '../../assets/about2.jpeg'
import about3 from '../../assets/home3.jpeg'
import about4 from '../../assets/home4.jpg'
export default function About() {
  return<>
    <section className='about1'>
      <div className="layot">
        <h1 className='text-main fw-bolder'>A B O U T U S</h1>
      </div>
    </section>

    <section className='about2'>
      <div className="container-fluid">
        <h1 className='text-main text-center'>PROFILE & HISTORY</h1>
        <div className="row mt-5">
          <div className="col-md-6 ps-5">
            <h2 className='text-main p-0'>NASR CITY</h2>
            <span className='noSpace'>Campus</span>
            <p className=' mt-4 text-muted'>ESTABLISHED <br />1994</p>
            <p className=' mt-4 text-muted'>CAMPUS <br /> 2000 SQUARE METERS</p>
            <p className=' mt-4 text-muted'>CATERS FOR <br /> BABY CLASS THROUGH PRIMARY 6</p>
            <h4 className=' mt-4'>EDUCATIONAL SYSTEM</h4>
            <li className=' mt-5'>
              <span className='text-main foo-end pointer '>National <i class="arrow fa-solid fa-arrow-right"></i></span>
            </li>
          </div>
          <div className="col-md-6">
            <img src={about1} className='w-100' alt="" />
          </div>
        </div>

        <div className="row mt-5">

          <div className="col-md-6">
            <img src={about2} className='w-100' alt="" />
          </div>
          <div className="col-md-6 ps-5">
            <h2 className='text-main p-0'>NEW CAIRO</h2>
            <span className='noSpace'>Campus</span>
            <p className=' mt-4 text-muted'>ESTABLISHED <br />1996</p>
            <p className=' mt-4 text-muted'>CAMPUS <br /> 10 ACRES</p>
            <p className=' mt-4 text-muted'>CATERS FOR <br /> BABY CLASS THROUGH SECONDARY</p>
            <h4 className=' mt-4'>EDUCATIONAL SYSTEM</h4>
            <li className=' mt-5'>
              <span className='text-main foo-end pointer '>National <i class="arrow fa-solid fa-arrow-right"></i></span>
            </li>
            <li className=''>
              <span className='text-main foo-end pointer '>Amiracan <i class="arrow fa-solid fa-arrow-right"></i></span>
            </li>
            <li className=''>
              <span className='text-main foo-end pointer '>Biritsh <i class="arrow fa-solid fa-arrow-right"></i></span>
            </li>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 ps-5">
            <h2 className='text-main p-0'>6TH OCTOBER</h2>
            <span className='noSpace'>Campus</span>
            <p className=' mt-4 text-muted'>ESTABLISHED <br />2016</p>
            <p className=' mt-4 text-muted'>CAMPUS <br /> 10 ACRES</p>
            <p className=' mt-4 text-muted'>CATERS FOR <br /> BABY CLASS THROUGH SECONDARY</p>
            <h4 className=' mt-4'>EDUCATIONAL SYSTEM</h4>
            <li className=' mt-5'>
              <span className='text-main foo-end pointer '>National <i class="arrow fa-solid fa-arrow-right"></i></span>
            </li>
            <li className=''>
              <span className='text-main foo-end pointer '>Amiracan <i class="arrow fa-solid fa-arrow-right"></i></span>
            </li>
            <li className=''>
              <span className='text-main foo-end pointer '>Biritsh <i class="arrow fa-solid fa-arrow-right"></i></span>
            </li>
          </div>
          <div className="col-md-6">
            <img src={about3} className='w-100' alt="" />
          </div>
        </div>

        <div className="row my-5">
        <div className="col-md-6">
            <img src={about4} height={400} className='w-100' alt="" />
          </div>
          <div className="col-md-6 ps-5">
            <h2 className='text-main p-0'>EL SHOROUK</h2>
            <span className='noSpace'>Campus</span>
            <p className=' mt-4 text-muted'>ESTABLISHED </p>
            <p className=' mt-4 text-muted'>CAMPUS </p>
            <p className=' mt-4 text-muted'>CATERS FOR </p>
            <h4 className=' mt-4'>EDUCATIONAL SYSTEM</h4>
  
            <li className='mt-5'>
              <span className='text-main foo-end pointer '>Biritsh <i class="arrow fa-solid fa-arrow-right"></i></span>
            </li>
          </div>

        </div>
      </div>
    </section>
  </>
}
