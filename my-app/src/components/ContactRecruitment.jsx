import GITHUBW from '../img/githubW.jpg';

export default function ContactRecruitment() {
  return (
    <div id="scrollspyHeading4">
      <div className="row mx-auto">
        <div className="col-12 bg-dark px-4 px-md-5 paddingY">
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
                      alt=""
                      src={GITHUBW}
                      className="innerImg"
                    />
                    <span className="text-light">github.com/hiwon-lee</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
