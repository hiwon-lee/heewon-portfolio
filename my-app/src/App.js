import logo from './logo.svg';
import './css/hover.css';
import './css/progressStyle.css';
import './css/style.css';
import Profile from './Profile';
import Skills from './Skills';
import Portfolio from './Portfolio';
function App() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example"
    >
      <div className="myWrapper">
        {/*  nav-bar */}
        <div
          id="navbar-example"
          className="mainGradient"
          style={{ zIndex: '99999' }}
        >
          <nav className="navbar navbar-expand-lg navbar-light pb-0 w-100">
            <button
              style={{ border: 'none' }}
              className="navbar-toggler mb-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse px-1 px-lg-5 w-100"
              id="navbarSupportedContent"
            >
              <ul
                className="nav nav-pills justify-content-end d-flex flex-nowrap w-100 text-center"
                role="tablist"
              >
                <li className="nav-item flex-fill">
                  <a
                    className="nav-link text-light py-2 active"
                    href="#scrollspyHeading1"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item flex-fill">
                  <a
                    className="nav-link text-light py-2 "
                    href="#scrollspyHeading2"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item flex-fill">
                  <a
                    className="nav-link text-light py-2 "
                    href="#scrollspyHeading3"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item flex-fill">
                  <a
                    className="nav-link text-light py-2 "
                    href="#scrollspyHeading4"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <Profile></Profile>
      <Skills />
      <Portfolio />
      {/*  final Goal */}
      <div className="finalBackGround fullHeight">
        <div className=" text-center paddingY h-100">
          <div className="pb-5">
            <h2 className="fw-bolder py-2">MY FINAL GOAL</h2>
            <h6 className="font18">프론트엔드 개발자로서의 최종 목표</h6>
          </div>

          <div
            className="finalComment"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-once="true"
          >
            "COMMUNICATING (소통하는)"
            <br />
            "PROGRESSIVE (진보하는)"
          </div>
        </div>
      </div>
      {/* /* Contact */
      /* Contact-RECRUITMENT */}
      <div id="scrollspyHeading4">
        <div className="row mx-auto">
          <div className="col-12  bg-dark px-4 px-md-5 paddingY">
            <div className=" px-0 py-5 p-lg-5">
              <div className="bordergray text-br/eak position-relative h-100 text-center keepText py-lg-5 py-4  px-2">
                <div className="d-flex flex-column justify-content-between h-100 text-light">
                  <div className=" contactTitle2">
                    <h2 className="text-center py-1 text-nowrap fw-bolder ">
                      CONTACT ME
                    </h2>
                  </div>
                  <div className="keepText ">&nbsp;</div>
                  <div>
                    <p className="mb-2 font16 keepText">
                      지금까지 저의 포트폴리오를 봐주셔서 감사합니다 !
                    </p>
                    <p className="mb-2 font16 keepText">
                      저에 대해 더 궁금한 사항은, 아래의 이메일 주소와
                      깃허브링크를 확인해주세요
                    </p>
                  </div>

                  <div className="d-flex  justify-content-center gap-4">
                    <div className="">
                      <span className="material-icons">email</span>
                      <span>hiiwonii1012@gmail.com</span>
                    </div>
                    <a
                      href="https://github.com/hiwon-lee"
                      style={{ textDecoration: 'none' }}
                    >
                      <img
                        src="img/githubW.jpg"
                        className="innerImg"
                      />
                      <span className="text-light">github.com/hiwon-lee</span>
                    </a>
                  </div>

                  {/* <div className="mx-auto"> 
                          
                      </div>
  
                      <div className="mx-auto"> 
                        
                      </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
