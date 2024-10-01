import BLOOBURN1 from '../img/blooburn01.png';
import BLOOBURN2 from '../img/blooburn02.png';
import BLOOBURN3 from '../img/blooburn03.png';
import BLOOBURN4 from '../img/blooburn04.png';

function Project() {
  return (
    <div
      id="projectContainer"
      className="paddingY"
      style={{ backgroundColor: '#ffd92d', paddingBottom: '10rem' }}
    >
      <div className="container ">
        <h2 className="text-center fw-bolder py-3 ">
          <span className="title pb-3">PROJECT #1</span>
        </h2>

        <div className="contentContainer row">
          <div className="col-12 fs-3 pb-3">TEAM BLOOBURN</div>
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
                'HELMAN'은 건강과 습관 및 일정 관리를 도와주는
                어플리케이션입니다.
              </span>
              자신이 이루고자 하는 목표를 세우고, 다른 사람들과 공유하며 건강한
              삶을 만들어갈 수 있게 도움을 주는 앱을 만들어보고자하여
              진행하였습니다.
            </p>
            <b># 세부</b>
            <br />
            <p>
              ‘HELMAN’ 프로젝트는 제가 처음으로 직접 기획/디자인/제작의 모든
              과정을 거쳐 만든 웹 어플리케이션입니다. Bootstrap과 같은 프레임
              워크를 사용하지 않고, 모든 레이아웃과 컨텐츠를 직접 만들어보며
              <span className="text-primary"> HTML/CSS</span>에 대한 기초적인
              이해를 쌓을 수 있었습니다. 동적 기능에 대한 부분은 부족했지만,
              프로젝트의 전반적인 흐름에 대해 이해할 수 있었던 의미있는
              프로젝트였습니다.
            </p>
            <hr />
            <table className="table align-bottom">
              <tbody style={{ fontSize: '14px' }}>
                <tr>
                  <th>
                    <b>
                      <span className="material-icons">near_me</span> &nbsp;제작
                      기간
                    </b>
                  </th>
                  <td>2021.09 ~ 2021.11</td>
                </tr>
                <tr>
                  <th>
                    <b>
                      <span className="material-icons">near_me</span>{' '}
                      &nbsp;GITHUB
                    </b>
                  </th>
                  <td>
                    <a href="https://github.com/hiwon-lee/Healthmanager-app-">
                      github.com/hiwon-lee/Healthmanager-app-
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
                    <a href="https://ovenapp.io/view/TfzYpxGDo9EfU7ddIHpTVVlGA1VQ5Sit/8uZ8O">
                      ovenapp.io/view/TfzYpxGDo9EfU7ddIHpTVVlGA1VQ5Sit/8uZ8O
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
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        className="container marginY hvr-over-line"
        id="projectContainer2"
      >
        <h2 className="text-center fw-bolder py-3 ">
          <span className="title pb-3">PROJECT #2</span>
        </h2>
        <div className="hvr-border-fade"></div>
        <div className="contentContainer row ">
          <div className="col-12 fs-3 pb-3">TEAM BLOOBURN</div>
          <hr />
          <div className="col-6 p-3">
            <div
              id="carouselControls02"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="img/blooburn01.png"
                    className="d-block w-100"
                    alt="blooburn"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/blooburn02.png"
                    className="d-block w-100"
                    alt="blooburn"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/blooburn03.png"
                    className="d-block w-100"
                    alt="blooburn"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/blooburn04.png"
                    className="d-block w-100"
                    alt="blooburn"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/blooburn05.png"
                    className="d-block w-100"
                    alt="blooburn"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselControls02"
                data-bs-slide="prev"
              >
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselControls02"
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
                'TEAM BLOOBURN' 저희 팀을 소개하는 사이트를 만들어보고자
                제작하였습니다.
              </span>{' '}
              팀의 방향성과 그 간의 과정, 진행하는 프로젝트 소개 등에 대한
              내용을 담았습니다.
            </p>
            <b># 세부</b>
            <br />
            <p>
              BLOOBURN 팀 페이지는 이전의 프로젝트와는 다르게 도메인 주소를
              구매하고 웹 호스팅하여 진행했습니다. 혼자서 작은 프로젝트를 진행할
              때에는 놓치는 부분이 많았지만, 이 팀 페이지를 구성할 당시에는
              디자이너 팀원분과 함께 협업하며, Figma로 좀 더 체계적인 UI/UX를
              그리며 진행할 수 있었습니다. 첫 협업 프로젝트라 부족한 점이
              많았지만, 이 프로젝트를 진행하면서 많은 발전을 할 수 있어 특히 더
              의미있는 프로젝트였습니다.
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
        </div>
      </div>

      <div className="container marginY">
        <h2 className="text-center fw-bolder py-3 ">
          <span className="title pb-3">PROJECT #3</span>
        </h2>

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
                    src="img/owere01.png"
                    className="d-block w-100"
                    alt="owere"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/owere02.png"
                    className="d-block w-100"
                    alt="owere"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/owere03.png"
                    className="d-block w-100"
                    alt="owere"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/owere04.png"
                    className="d-block w-100"
                    alt="owere"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/owere05.png"
                    className="d-block w-100"
                    alt="owere"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/owere06.png"
                    className="d-block w-100"
                    alt="owere"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="img/owere07.png"
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
              기존 이미용 플랫폼은 미용실과 고객을 매칭해주었지만, 'O`were'은
              미용실 업주, 디자이너, 고객이 분리되어 매칭되며, 더욱 철저하고
              수익성있는 시술을 가능케합니다.
            </p>
            <b># 세부</b>
            <br />
            <p>
              'O’were' 프로젝트는 사용자/디자이너를 위한 어플, 미용실 업주를
              위한 웹으로 나뉘어 진행되었습니다. 그리고 저는{' '}
              <span className="text-primary">웹/앱 UIUX 참여</span>와{' '}
              <span className="text-primary">
                미용실 업주를 위한 웹 페이지 개발
              </span>
              을 진행하였습니다. 프로젝트 진행에 있어 디자이너 팀원들과 끊임없는
              소통을 했습니다. 개발이 진행되면서 발견한 놓친 부분에 대한 수정도
              계속해서 진행했습니다. 작업을 진행하면서 UI에 필요한 여러
              레퍼런스들을 참고하며, 최근 트렌드에 맞는 디자인을 만들어나가기
              위해 노력했습니다.
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
