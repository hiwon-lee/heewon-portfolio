import mainCoverImg from '../img/mainCoverImg.jpg';
import styled from 'styled-components';

const MainStyled = styled.div`
  display: relative;
  height: 100vh;
  background-image: url('../img/mainCoverImg.jpg');
`;

function Profile() {
  return (
    <div id="scrollspyHeading1">
      <div
        className="mainBackGround position-relative fullHeight"
        style={{ backgroundImage: `url(${mainCoverImg})` }}
      >
        <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
          <div className="mainText fst-italic">HEEWON-LEE</div>
          <div
            className="bg-warning mx-auto"
            style={{ width: '160px', height: '2px' }}
          ></div>
          <div
            id="typed-strings"
            className="text-light"
          >
            <p>#Front-End Developer</p>
            <p>#EWHA WOMANS University</p>
            <p>#hiiwonii1012@gmail.com</p>
          </div>
          <span id="typed"></span>
        </div>
      </div>
      {/* about me */}
      <div
        className="container text-center paddingY px-5"
        style={{ paddingBottom: '100px' }}
      >
        <div className="pb-5">
          <h2 className="fw-bolder py-2">
            <span className="highlight py-2">ABOUT ME</span>
          </h2>
        </div>

        <div className="row g-5 justify-content-center pb-5">
          <div className="col-4 profileCard hvr-grow">
            <div className="p-0 bg-white shadow">
              <div className="text-center p-3">
                <span className="material-icons">face</span>
                <p style={{ fontSize: '28px' }}>이름</p>
                <p className="text-muted font18">이희원</p>
              </div>
            </div>
          </div>
          <div className="col-4 profileCard hvr-grow">
            <div className="p-0 bg-white shadow">
              <div className="text-center p-3">
                <span className="material-icons">calendar_today</span>
                <p style={{ fontSize: '28px' }}>생년월일</p>
                <p className="text-muted font18">00.10.12</p>
              </div>
            </div>
          </div>
          <div className="col-4 profileCard hvr-grow">
            <div className="p-0 bg-white shadow">
              <div className="text-center p-3">
                <span className="material-icons">location_on</span>
                <p style={{ fontSize: '28px' }}>주소</p>
                <p className="text-muted font18">서울특별시 동대문구</p>
              </div>
            </div>
          </div>
          <div className="col-4 profileCard hvr-grow">
            <div className="p-0 bg-white shadow">
              <div className="text-center p-3">
                <span className="material-icons">edit</span>
                <p style={{ fontSize: '28px' }}>블로그</p>
                <p className="text-muted font18">
                  <a href="https://2hiidevdang.tistory.com">
                    2hiidevdang.tistory.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 profileCard hvr-grow">
            <div className="p-0 bg-white shadow">
              <div className="text-center p-3">
                <span className="material-icons">email</span>
                <p style={{ fontSize: '28px' }}>이메일</p>
                <p className="text-muted font18">
                  <a
                    target="_blank"
                    href="mailto:hiiwonii1012@gmail.com"
                  >
                    hiiwonii1012@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 profileCard hvr-grow">
            <div className="p-0 bg-white shadow">
              <div className="text-center p-3">
                <span className="material-icons">school</span>
                <p style={{ fontSize: '28px' }}>학력</p>
                <p className="text-muted font18">
                  이화여자대학교 / 컴퓨터공학과
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row featurette py-5"></div>
        <div className="text-center hvr-wobble-vertical">
          <a href="#scrollspyHeading2">
            <span
              className="material-icons font64 text-dark"
              style={{ cursor: 'pointer' }}
            >
              arrow_downward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
