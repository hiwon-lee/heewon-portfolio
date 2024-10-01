import React, { useEffect } from 'react';

import Project from './Project';
import SubProject from './SubProject';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
              <span className="text-muted fs-5">My First Project</span>
            </span>
          </h2>
          <div className="d-flex flex-row">
            <div className="col-5">
              <img
                src="img/orrr2.png"
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
                "나의 첫 프로젝트, Health Manager : HELMAN"
              </p>
              <p className="lead keepText">
                우당탕탕!!
                <br />
                기획, 디자인, 제작까지 어떠한 framework도 활용하지 않고, <br />
                모든 코드가 내 손가락 끝에서부터 탄생한 프로젝트
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <a href="#projectContainer">
          <button
            type="button"
            className="btn btn-dark fw-bolder font18 rounded-pill mt-5 py-2 px-5 text-nowrap mx-auto"
          >
            PROJECT #1
          </button>
        </a>

        <hr className="featurette-divider" />

        <div className="text-start">
          <h2 className="fs-2 keepText mb-3">
            <span className="border-bottom">
              <span className="highlight me-2">2ND Challenge</span>
              <span className="text-muted fs-5">
                {' '}
                Pre-Startup Team #Front-End
              </span>
            </span>
          </h2>
          <div className="d-flex flex-row">
            <div
              className="me-auto"
              data-aos="fade-up "
              data-aos-duration="1500"
            >
              <p className="lead fs-4 lh-lg keepText strong fw-bold">
                "TEAM BLOOBURN + O`WERE"
              </p>
              <p className="lead keepText">
                대학생 예비 창업팀 'BLOOBURN'
                <br />
                '창업하고싶다.. 그럼 해야지!' <br />
                <br />
                같은 뜻을 함께 한 팀원들과 치열하게 진행했던 도전
                <br />
                <br />
                (1) [생애최초 청년창업] 지원 프로그램에 선정 <br />
                (2) 경희대학교 캠퍼스타운 입주 선정 <br />
                <br />
              </p>
            </div>
            <div className="col-5 text-end">
              <img
                className="ms-auto"
                src="img/orrr22.jpg"
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
            PROJECT #2
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
