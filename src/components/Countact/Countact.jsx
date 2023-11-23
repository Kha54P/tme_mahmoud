import React from "react";
import style from "./Countact.module.css";
export default function Countact() {
  return (
    <>
      <section className="countact1 ">
        <div className="layot">
          <h1 className="text-main fw-bolder">CONTACT US</h1>
        </div>
      </section>

      <section className="countact2">
        <h1 className=" p-5 text-main text-center">CONTACT INFO</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27637.957108936378!2d31.211519999999997!3d30.015487999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1700739578554!5m2!1sar!2seg"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="countact3 p-5">
        <div className="container">
        <h1 className=" text-center text-main">SEND US A MESSAGE</h1>
        <div className="row w-75 mx-auto mt-4">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
              <label htmlFor="name" className="text-muted">Name*</label>
              <input type="text" className=" form-control  mt-2" id="name" />
              </div>
              <div className="col-md-12 my-2">
              <label htmlFor="tel" className="text-muted">Phone*</label>
              <input type="tel" className=" form-control  mt-2" id="tel" />
              </div>
              <div className="col-md-12">
              <label htmlFor="email" className="text-muted">Email*</label>
              <input type="email" className=" form-control  mt-2" id="email" />
              </div>
              <div className="col-md-12 mt-3">
              <button className="btn fw-bold fs-4 btn-outline-primary w-100"> Send Message</button>
              </div>
            </div>
          </div>
          <div  className="col-md-6">
          <label htmlFor="name" className="text-muted">Message*</label>
            <textarea  className="form-control" ></textarea>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
