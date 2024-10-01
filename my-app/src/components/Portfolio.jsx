import React, { useEffect } from 'react';

import Project from './Project';
import SubProject from './SubProject';
import AOS from 'aos';
import 'aos/dist/aos.css';

import DUCK1 from '../img/orrr2.png';
import DUCK2 from '../img/orrr22.jpg';
function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="scrollspyHeading3"
      className="about"
    >
      <div className="container text-center paddingY px-5">
        <div className="pb-5">
          <h2 className="fw-bolder py-2">
            <span className="highlight py-2">PORTFOLIO</span>
          </h2>
        </div>
        <div className="text-start">
          <h2 className="fs-2 keepText mb-3">
            <span className="border-bottom">
              <span className="highlight me-2">1ST Challenge</span>
              <span className="text-muted fs-5">
                Pre-Startup Team #Front-End
              </span>
            </span>
          </h2>
          <div className="d-flex flex-row">
            <div className="col-5">
              <img
                src={DUCK1}
                style={{ width: '60%' }}
                alt="Image"
              />
            </div>

            <div
              className="text-end col-6"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p className="lead fs-4 lh-lg keepText strong fw-bold">
                "TEAM BLOOBURN + O`WERE"
              </p>
              <p className="lead keepText">
                대학생 예비 창업팀 <span className="fw-bold">'BLOOBURN'</span>
                <br />
                열혈공대의 지성을 보여주자.. (공대가 미래다)
                <br />
                <div className="p-4 my-3 bg-warning-subtle">
                  <div className="fw-bold mb-1">[Reward]</div>
                  (1) [생애최초 청년창업] 지원 프로그램에 선정 (2021.08)
                  <br />
                  (2) 경희대학교 캠퍼스타운 입주 선정 (2021.11)
                </div>
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>

        <a href="#projectContainer">
          <button
            type="button"
            className="btn btn-dark fw-bolder font18 rounded-pill mt-5 py-2 px-5 text-nowrap mx-auto"
          >
            PROJECT #1 - SEE MORE..?
          </button>
        </a>

        <hr className="featurette-divider" />

        <div className="text-start">
          <h2 className="fs-2 keepText mb-3">
            <span className="border-bottom">
              <span className="highlight me-2">2ND Challenge</span>
              <span className="text-muted fs-5">FE+BE Project #Capstone</span>
            </span>
          </h2>
          <div className="d-flex flex-row">
            <div
              className="me-auto"
              data-aos="fade-up "
              data-aos-duration="1500"
            >
              <p className="lead fs-4 lh-lg keepText strong fw-bold">
                "#CAPSTONE : 집중도 기반 STOP-WATCH"
              </p>
              <p className="lead keepText">
                CAPSTON TEAM #8.
                <span className="fw-bold"> ECST</span>
                <br />
                열혈공대는 집에 가고 싶다.. (공..공대가 미래다)
                <br />
                <div className="p-4 my-3 bg-warning-subtle">
                  <div className="fw-bold mb-1">[Stack]</div>
                  (1) FE : REACT
                  <br />
                  (2) BE : DJANGO
                  <br />
                  (3) AI : Google Teachable Machine
                </div>
                <br />
                <br />
              </p>
            </div>
            <div className="col-5 text-end">
              <img
                className="ms-auto"
                src={DUCK2}
                style={{ width: '70%' }}
                alt="Image"
              />
            </div>
          </div>
        </div>

        <a href="#projectContainer2">
          <button
            type="button"
            className="btn btn-dark fw-bolder font18 rounded-pill mt-5 py-2 px-5 text-nowrap mx-auto"
          >
            PROJECT #2 - See More..?
          </button>
        </a>
      </div>
      {/* project */}
      <Project />
      <SubProject />
    </div>
  );
}

export default Portfolio;
