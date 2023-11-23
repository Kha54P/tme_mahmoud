import React from "react";
import life1 from "../../assets/life1.jpeg";
import life2 from "../../assets/life2.jpeg";
import life3 from "../../assets/life3.jpeg";
export default function Life() {
  return (
    <>
      <section className="life1 ">
        <div className="layot">
          <h1 className="text-main fw-bolder">SCHOOL LIFE</h1>
        </div>
      </section>

      <section className="life2 mt-5">
        <div className="container-fluid">
          <h1 className="text-main text-center">
            SOCIAL & EMOTIONAL DEVELOPMENT
          </h1>
          <div className="row mt-5 align-items-center">
            <div className="col-md-6 ps-5">
              <h2 className="text-main p-0">LEADERSHIP OPPORTUNITIES</h2>
              <p className=" text-muted mt-4">
                Students at The Egyptian Schools are provided opportunities from
                early on to discover and develop their skills as leaders. From
                classroom roles, school charity campaign organization, and
                student council class representatives to more formal positions
                in the Egyptian Schools Model United Nations and the Student
                Council High Board, students receive feedback, guidance and
                training to further enable them to hone this very important
                skill in order to pursue positions of influence beyond
                schooling.
              </p>
            </div>
            <div className="col-md-6">
              <img src={life1} className="w-100" alt="" />
            </div>
          </div>

          <div className="row mt-5 align-items-center">
            <div className="col-md-6">
              <img src={life2} className="w-100" alt="" />
            </div>
            <div className="col-md-6 ps-5">
              <h2 className="text-main p-0">CHARACTER BUILDING</h2>
              <p className=" mt-4 text-muted">
                The process of meaningful character building is experienced by
                students across curriculum at The Egyptian Schools and
                throughout a wide variety of opportunities.
              </p>
              <p className=" mt-4 text-muted">
                It has been integration throughout curriculum and various
                projects as well as specifically designated character building
                classes and sessions. Participation in community events and
                organizations included MUN, MAL, AISEC, etc.Furthermore
                participation in assemblies about core character building
                pillars We The Egyptian Schools, celebrate good character traits
                via special awards and recognition by participation in events,
                displays, and related to life activities to build confidence and
                self esteem .
              </p>
              <p className=" mt-5 text-main pointer">Press Here</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 text-muted ps-5">
              <h2 className="text-main p-0">ATHLETICS</h2>
                <p className="mt-3">“Sports are a microcosm of society.” ~Billie Jean</p>
                <p className="mt-3">Sports build students’ characters and reveal traits of collaboration, determination, guts and power. In teaching beyond academics, at The |Egyptian Schools  offer diverse sports that suit different talents through:</p>
                <ul className="mt-5">
                  <li>Physical education classes</li>
                  <li>Domestic tournaments</li>
                  <li>Schools tournament</li>
                  <li>Sports Day</li>
                  <li>Student achievements in athletics are celebrated across schools</li>
                  <li className="  text-main pointer">Press Here</li>
                </ul>
            </div>
            <div className="col-md-6">
              <img src={life3} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
