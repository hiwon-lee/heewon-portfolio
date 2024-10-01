import {
  BLOOBURN1,
  BLOOBURN2,
  BLOOBURN3,
  BLOOBURN4,
  BLOOBURN5,
  ECST1,
  ECST2,
  ECST3,
  OWERE1,
  OWERE2,
  OWERE3,
  OWERE4,
  OWERE5,
  OWERE6,
  OWERE7,
} from '../img/images';

function Project() {
  return (
    <div
      id="projectContainer"
      className="paddingY"
      style={{ backgroundColor: '#ffd92d', paddingBottom: '10rem' }}
    >
      <div
        className="container marginY hvr-over-line"
        id="projectContainer1"
      >
        <h2 className="text-center fw-bolder py-3 ">
          <span className="title pb-3">PROJECT #1</span>
        </h2>
        <div className="hvr-border-fade"></div>
        <div className="contentContainer row ">
          <div className="col-12 fs-3 pb-3">BLOOBURN</div>
          <hr />
          <div className="col-6 p-3">
            <div
              id="carouselControls01"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={BLOOBURN1}
                    className="d-block w-100"
                    alt="Slide 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={BLOOBURN2}
                    className="d-block w-100"
                    alt="Slide 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={BLOOBURN3}
                    className="d-block w-100"
                    alt="Slide 3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={BLOOBURN4}
                    className="d-block w-100"
                    alt="Slide 4"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={BLOOBURN5}
                    className="d-block w-100"
                    alt="Slide 5"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselControls01"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselControls01"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            className="col-6 p-3 lh-base"
            style={{ fontSize: '17px' }}
          >
            <p>
              <b># 개요</b>
              <br />
              <span className="fw-bolder">
                'TEAM BLOOBURN'을 소개하는 팀페이지 입니다.
                <br />
              </span>{' '}
              VanillaJS, BootStrap과 여러 PlugIn을 활용해 동적 요소를 추가한
              Dynamic 팀페이지입니다. <br /> 팀의 방향성과 팀원 소개 그 간의
              과정과 성과, 진행하는 프로젝트 소개 등에 대한 내용을 담았습니다.
            </p>
            <b># 세부 내용</b>
            <br />
            <p>
              - 도메인 주소 구매와 웹 Hosting w/Filezilla (현재는 도메인 닫음)
              <br /> - Figma : 디자이너와 함께 제작
            </p>
            <hr />
            <table className="table align-bottom">
              <tbody style={{ fontSize: '14px' }}>
                <tr>
                  <th>
                    <b>
                      <span className="material-icons">near_me</span> &nbsp;진행
                      기간
                    </b>
                  </th>
                  <td>
                    <p>2021.05 ~2022.11</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <b>
                      <span className="material-icons">near_me</span>{' '}
                      &nbsp;GITHUB
                    </b>
                  </th>
                  <td>
                    <a href="https://github.com/hiwon-lee/BlooBurn-team-page">
                      github.com/hiwon-lee/BlooBurn-team-page
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {' '}
                    <b>
                      <span className="material-icons">near_me</span>{' '}
                      &nbsp;UI/UX
                    </b>
                  </th>
                  <td>
                    <a href="https://www.figma.com/file/hDedoT9XzKZES0S17sEbr/W/TEAM-BlooBurn?node-id=0%3A1">
                      figma.com/file/
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {' '}
                    <b>
                      <span className="material-icons">near_me</span> &nbsp;URL
                    </b>
                  </th>
                  <td>
                    <a href="http://blooburn.com/">blooburn.com</a>
                    <p>(현재 운영하지 않는 url입니다.)</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {' '}
                    <b>
                      <span className="material-icons">near_me</span>{' '}
                      &nbsp;SKILLS
                    </b>
                  </th>
                  <td>
                    <span className="skillPill hvr-grow">HTML</span>
                    <span className="skillPill hvr-grow">CSS</span>
                    <span className="skillPill hvr-grow">JS</span>
                    <span className="skillPillV2 hvr-grow">jQuery</span>
                    <span className="skillPillV2 hvr-grow">Bootstrap</span>
                    <span className="skillPillV2 hvr-grow">Figma</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12">
            <div className="contentContainer row">
              <div className="col-12 fs-3 pb-3">O`WERE FOR OWNER</div>
              <hr />
              <div className="col-6 p-3">
                <div
                  id="carouselControls03"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={OWERE1}
                        className="d-block w-100"
                        alt="owere"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={OWERE2}
                        className="d-block w-100"
                        alt="owere"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={OWERE3}
                        className="d-block w-100"
                        alt="owere"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={OWERE4}
                        className="d-block w-100"
                        alt="owere"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={OWERE5}
                        className="d-block w-100"
                        alt="owere"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={OWERE6}
                        className="d-block w-100"
                        alt="owere"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={OWERE7}
                        className="d-block w-100"
                        alt="owere"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselControls03"
                    data-bs-slide="prev"
                  >
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselControls03"
                    data-bs-slide="next"
                  >
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div
                className="col-6 p-3 lh-base"
                style={{ fontSize: '17px' }}
              >
                <p>
                  <b># 개요</b>
                  <br />
                  <span className="fw-bolder">
                    'O’were'은 미용실의 유휴좌석에 프리랜서 디자이너와 고객을
                    매칭해주는 이미용 플랫폼입니다.{' '}
                  </span>
                  'O`were'은 미용실 업주, 디자이너, 고객이 분리되어 매칭되며,
                  더욱 철저하고 수익성있는 시술을 가능케합니다.
                </p>
                <b># 세부 내용</b>

                <p>
                  <br />- 사용자/디자이너를 위한 어플 - Kotlin <br />- 미용실
                  업주를 위한 web - VanillaJS
                  <hr />
                  - 웹/앱 UIUX 디자인 <br />- 디자이너와 Figma 협업
                  <br /> - 웹페이지 개발
                </p>
                <hr />
                <table className="table align-bottom">
                  <tbody style={{ fontSize: '14px' }}>
                    <tr>
                      <th>
                        <b>
                          <span className="material-icons">near_me</span>{' '}
                          &nbsp;진행 기간
                        </b>
                      </th>
                      <td>
                        <p>2021.08 ~2022.11</p>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <b>
                          <span className="material-icons">near_me</span>{' '}
                          &nbsp;GITHUB
                        </b>
                      </th>
                      <td>
                        <a href="https://github.com/hiwon-lee/O-were_ownerWeb">
                          github.com/hiwon-lee/O-were_ownerWeb
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {' '}
                        <b>
                          <span className="material-icons">near_me</span>{' '}
                          &nbsp;UI/UX (M)
                        </b>
                      </th>
                      <td>
                        <a href="https://www.figma.com/file/zkYGCJHxveKR0NDuIbW4Pi/O'were-Mobile">
                          www.figma.com/file/O'were-Mobile
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {' '}
                        <b>
                          <span className="material-icons">near_me</span>{' '}
                          &nbsp;UI/UX (W)
                        </b>
                      </th>
                      <td>
                        <a href="https://www.figma.com/file/VghpzE4wZcdd9STdXdIM8I/%EC%98%A4%EC%9B%94-%EC%A0%90%EC%A3%BC-ui">
                          https://www.figma.com/file/VghpzE4wZcdd9STdXdIM8I/-ui
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        {' '}
                        <b>
                          <span className="material-icons">near_me</span>{' '}
                          &nbsp;SKILLS
                        </b>
                      </th>
                      <td>
                        <span className="skillPill hvr-grow">HTML</span>
                        <span className="skillPill hvr-grow">CSS</span>
                        <span className="skillPill hvr-grow">JS</span>
                        <span className="skillPillV2 hvr-grow">jQuery</span>
                        <span className="skillPillV2 hvr-grow">Bootstrap</span>
                        <span className="skillPillV2 hvr-grow">Figma</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container marginY">
        <h2 className="text-center fw-bolder py-5 ">
          <span className="title pb-3 mb-3">PROJECT #2</span>
        </h2>

        <div className="contentContainer row">
          <div className="col-12 fs-3 pb-3">Concentration-based STOPWATCH</div>
          <hr />
          <div className="col-6 p-3">
            <div
              id="carouselControls03"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={ECST1}
                    className="d-block w-100"
                    alt="owere"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={ECST2}
                    className="d-block w-100"
                    alt="owere"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={ECST3}
                    className="d-block w-100"
                    alt="owere"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselControls03"
                data-bs-slide="prev"
              >
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselControls03"
                data-bs-slide="next"
              >
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            className="col-6 p-3 lh-base"
            style={{ fontSize: '17px' }}
          >
            <p>
              <b># 개요</b>
              <br />
              <span className="fw-bolder">
                집중도 기반 스톱워치?
                <br />
                카메라가 나를 감시하면서 내가 "공부에 집중할 때만" 공부시간을
                집계해준다
                <br />
              </span>
              깜빡하고 스톰워치를 일시정지 못할때, 졸 때, 공부에 집중하지 못할
              때, 핸드폰 할 때 등등 사용자가 공부에 온전히 집중하고 있는 지
              판단하서 실질적인 공부 시간 집계를 돕는 AI-STOPWATCH
            </p>
            <b># 세부 사항</b>
            <br />
            <p>
              <ul>
                <li>회원가입, 로그인</li>
                <li>TODO LIST 생성</li>
                <li>집중도 기반 스톱워치</li>
                <li>공부 History</li>
              </ul>
              <hr />- FE : REACT, REDUX (상태관리가 매우 관건임)
              <br />
              - BE : Django
              <br />- AI : Google Teachable Machine
            </p>
            <hr />
            <table className="table align-bottom">
              <tbody style={{ fontSize: '14px' }}>
                <tr>
                  <th>
                    <b>
                      <span className="material-icons">near_me</span> &nbsp;진행
                      기간
                    </b>
                  </th>
                  <td>
                    <p>2021.08 ~2022.11</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <b>
                      <span className="material-icons">near_me</span>{' '}
                      &nbsp;GITHUB
                    </b>
                  </th>
                  <td>
                    <a href="https://github.com/hiwon-lee/O-were_ownerWeb">
                      github.com/hiwon-lee/O-were_ownerWeb
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {' '}
                    <b>
                      <span className="material-icons">near_me</span>{' '}
                      &nbsp;UI/UX (M)
                    </b>
                  </th>
                  <td>
                    <a href="https://www.figma.com/file/zkYGCJHxveKR0NDuIbW4Pi/O'were-Mobile">
                      www.figma.com/file/O'were-Mobile
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {' '}
                    <b>
                      <span className="material-icons">near_me</span>{' '}
                      &nbsp;UI/UX (W)
                    </b>
                  </th>
                  <td>
                    <a href="https://www.figma.com/file/VghpzE4wZcdd9STdXdIM8I/%EC%98%A4%EC%9B%94-%EC%A0%90%EC%A3%BC-ui">
                      https://www.figma.com/file/VghpzE4wZcdd9STdXdIM8I/-ui
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    {' '}
                    <b>
                      <span className="material-icons">near_me</span>{' '}
                      &nbsp;SKILLS
                    </b>
                  </th>
                  <td>
                    <span className="skillPill hvr-grow">HTML</span>
                    <span className="skillPill hvr-grow">CSS</span>
                    <span className="skillPill hvr-grow">JS</span>
                    <span className="skillPillV2 hvr-grow">jQuery</span>
                    <span className="skillPillV2 hvr-grow">Bootstrap</span>
                    <span className="skillPillV2 hvr-grow">Figma</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
