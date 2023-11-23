import React from 'react'
import slog from '../../assets/slogan.png'
import school1 from '../../assets/branch-1.svg'
import school2 from '../../assets/branch-2.svg'
import school3 from '../../assets/branch-3.svg'
import home1 from '../../assets/home1.jpg'
import home2 from '../../assets/home2.jpeg'
import home3 from '../../assets/home3.jpeg'
import home4 from '../../assets/home4.jpg'
import news1 from '../../assets/news1.jpeg'
import news2 from '../../assets/news2.jpg'
import news3 from '../../assets/news3.jpg'
import Slider from 'react-slick'
export default function Home() {
  const settings = {
    autoplaySpeed:3000,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return<>
    <section className='sc1'>
      <div className="layout">
        <div className="chiled text-white text-center">
          <h1 className=' fw-bold '>THE EGYPTIAN SCHOOLS</h1>
          <p className='fw-bold line mb-5'>SINCE 1994</p>
          <img src={slog} className='' alt="slog" />
          <div className="container p-3">
            <div className="row">
              <div className="col-md-4">
                <div className="">
                  <img src={school2} className='first'  alt="" />
                  <p className=' mt-3 fw-bold w-50 mx-auto '>EGYPTIAN AMERICAN INTERNATIONAL SCHOOL</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="">
                <img src={school1}  alt="" />
                <p className=' mt-3 fw-bold w-50 mx-auto '>EGYPTIAN LANGUAGE SCHOOL</p>

                </div>
              </div>
              <div className="col-md-4">
              <img src={school3}  alt="" />
              <p className=' mt-3 fw-bold w-50 mx-auto '>EGYPTIAN AMERICAN INTERNATIONAL SCHOOL</p>

              </div>
            </div>
          </div>
          <p className='end'>ADMISSION IS NOW OPEN 2024/2025 ! . <span>READ MORE</span></p>
        </div>
      </div>
    </section>
  <section className='sc2'>
      <div className="container  p-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-end">
          <Slider className='p-0' {...settings}>
          <div>
          <img src={home1} className=' w-100' height={300} alt="" />
          </div>
          <div>
          <img src={home2} className=' w-100' height={300} alt="" />
          </div>
          <div>
          <img src={home3} className=' w-100' height={300} alt="" />
          </div>
          <div>
          <img src={home4} className=' w-100' height={300} alt="" />
          </div>
        </Slider>
          </div>
          <div className="col-md-6 text-start">
            <h1>OUR</h1>
            <h1 className='text-main'>CAMPUSES</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <h1 className=' text-main'>NASR CITY</h1>
              <p className=' text-muted'>The Egyptian Language School serves the educational needs of Nasr City, Heliopolis areas and a limited area within the 5th settlement and El-Rehab.</p>
              <p className=' text-muted'>Our target is reaching perfection through following school rules and regulations and fulfilling the vision and mission of our school.</p>
              <p className=' text-muted'>We expect full commitment and dedication from both students and ELS staff and a high sense of responsibility which will pour into the welfare of all.</p>
              <p className=' text-muted'>We prepare our students to be Egypt’s future leaders by facilitating the usage of new technicalities, developing their different abilities by taking part in the process of learning and encouraging them to participate in social work.</p>
                <p className=' text-muted'>Last but not leas’t we arm them with morals and good education to always develop.</p>
                <p className=' loc'><i class="fa-solid fa-location-dot"></i> Nasr City, Cairo</p>
          </div>
          <div className="col-md-7 text-end">
          <Slider className='p-0' {...settings}>
          <div>
          <img src={home1} className=' w-100' height={500} alt="" />
          </div>
          <div>
          <img src={home2} className=' w-100' height={500} alt="" />
          </div>
          <div>
          <img src={home3} className=' w-100' height={500} alt="" />
          </div>
          <div>
          <img src={home4} className=' w-100' height={500} alt="" />
          </div>
        </Slider>
         
          </div>
        </div>
      </div>
  </section>
    
    <section className='sc3'>
      <div className="container p-5">
        <div className="row">
          <h1>LATEST <br />
           <span className=' text-main'>NEWS</span></h1>
          <div className="col-md-4 mt-3">
            <div className="new ">
              <img src={news1} className='w-100' height={300} alt="" />
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="new ">
              <img src={news2} className='w-100' height={300} alt="" />
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="new ">
              <img src={news3} className='w-100' height={300} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
