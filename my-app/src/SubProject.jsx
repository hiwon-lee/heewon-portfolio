function SubProject() {
  return (
    <div
      id="projectContainer"
      className="paddingY"
      style={{ backgroundColor: '#fff1b3', paddingBottom: '10rem' }}
    >
      <div className="container">
        <div className="pb-5">
          <h2 className="fw-bolder py-2 text-center">
            <span className="highlight  py-2"># MINI PROJECT</span>
          </h2>
        </div>

        <div className="container">
          <div className="row "></div>
          <div className="col-4 px-0 hvr-bob">
            <div className=" p-0 contentContainer">
              <div className="card">
                <div
                  id="carouselControls05"
                  className="carousel slide card-img-top shadow-sm"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="img/mottnani01.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="img/mottnani02.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="img/mottnani03.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="img/mottnani04.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="img/mottnani05.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselControls05"
                    data-bs-slide="prev"
                  >
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselControls05"
                    data-bs-slide="next"
                  >
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">MOTTNANI</h5>
                  <p className="card-text">
                    MOTTNANI는 ‘못난이 채소들의 소비를 증대’라는 가치를 두고
                    만든 쇼핑몰 사이트입니다.
                  </p>
                  <hr />
                  {/* skill */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>Period</span>
                      </div>
                      <div className="col-8 text-end">
                        <p>2021.01 ~ 2021.04</p>
                      </div>
                    </div>
                  </div>
                  {/* skill */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>SKILLS</span>
                      </div>
                      <div className="col-8 text-end">
                        <div className="skillPill smlPill ms-2 hvr-grow">
                          HTML
                        </div>
                        <div className="skillPill smlPill hvr-grow">CSS</div>
                        <div className="skillPill smlPill hvr-grow">JS</div>
                        <div className="skillPillV2 smlPill hvr-grow">
                          Bootstrap
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* link */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>LINK</span>
                      </div>
                      <div className="col-8 text-end">
                        <a
                          className="text-dark"
                          href="https://github.com/hiwon-lee/MottnaniWebPage"
                        >
                          <div className="d-inline-block text-center hvr-float linkIconContainer">
                            <img
                              className="cardsvgImg"
                              src="img/github.svg"
                            />
                            <div style={{ fontSize: '6px' }}>github</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* link */}
                </div>
                {/* cardbody */}
              </div>
              {/* card */}
            </div>
          </div>
          <div className="col-4 px-0 hvr-bob">
            <div className=" p-0 contentContainer">
              <div className="card">
                <div
                  id="carouselControls05"
                  className="carousel slide card-img-top shadow-sm"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="img/commoseum01.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="img/commoseum02.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="img/commoseum04.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="img/commoseum03.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselControls05"
                    data-bs-slide="prev"
                  >
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselControls05"
                    data-bs-slide="next"
                  >
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">COMMOSEUM</h5>
                  <p className="card-text">
                    COMMOSEUM은 Common(일반적인)과 Museum(미술관)의 합성어로,
                    아마추어 음악가나 미술가들이 본인의 작품들을 사람들에게 알릴
                    수 있는 플랫폼입니다.
                  </p>
                  <hr />
                  {/* skill */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>SKILLS</span>
                      </div>
                      <div className="col-8 text-end">
                        <div className="skillPill smlPill ms-2 hvr-grow">
                          HTML
                        </div>
                        <div className="skillPill smlPill hvr-grow">CSS</div>
                        <div className="skillPill smlPill hvr-grow">JS</div>
                        <div className="skillPillV2 smlPill hvr-grow">
                          Bootstrap
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* link */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>LINK</span>
                      </div>
                      <div className="col-8 text-end">
                        <a
                          className="text-dark"
                          href="https://github.com/hiwon-lee/commoseum"
                        >
                          <div className="d-inline-block text-center hvr-float linkIconContainer">
                            <img
                              className="cardsvgImg"
                              src="img/github.svg"
                            />
                            <div style={{ fontSize: '6px' }}>github</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* link */}
                </div>
                {/* cardbody */}
              </div>
              {/* card */}
            </div>
          </div>
          {/* col-4 */}
          <div className="col-4 px-0  hvr-bob">
            <div className=" p-0 contentContainer">
              <div className="card">
                <img
                  src="img/kakaotour01.png"
                  className="card-img-top shadow-sm"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">OnepageKakaomapAPI</h5>
                  <p className="card-text">
                    Tour API와 kakaomap API를 활용하여 만든 원페이지
                    프로젝트입니다. 여행할 장소 검색을 할 수 있고 직접 경로를
                    만들어 볼 수 있습니다. 또한 만든 경로의 총 이동 경로도
                    계산할 수 있습니다.
                  </p>
                  {/* skill  */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>SKILLS</span>
                      </div>
                      <div className="col-8 text-end">
                        <div className="skillPill smlPill ms-2 hvr-grow">
                          HTML
                        </div>
                        <div className="skillPill smlPill hvr-grow">CSS</div>
                        <div className="skillPill smlPill hvr-grow">JS</div>
                        <div className="skillPillV2 smlPill hvr-grow">
                          Bootstrap
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* link */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>LINK</span>
                      </div>
                      <div className="col-8 text-end">
                        <a
                          className="text-dark"
                          href="https://github.com/hiwon-lee/OnepageKakaomapAPI"
                        >
                          <div className="d-inline-block text-center hvr-float linkIconContainer">
                            <img
                              className="cardsvgImg"
                              src="img/github.svg"
                            />
                            <div style={{ fontSize: '6px' }}>github</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* link */}
                </div>
                {/* cardbody */}
              </div>
            </div>
          </div>
          <div className="col-4 px-0  hvr-bob">
            <div className=" p-0 contentContainer">
              <div className="card">
                <div
                  id="carouselControls06"
                  className="carousel slide card-img-top shadow-sm"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="img/hwpf01.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="img/hwpf02.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="img/hwpf03.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="img/hwpf04.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselControls06"
                    data-bs-slide="prev"
                  >
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselControls06"
                    data-bs-slide="next"
                  >
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>{' '}
                <div className="card-body">
                  <h5 className="card-title fw-bold">HeewonPortfolio</h5>
                  <p className="card-text">
                    Tour API와 kakaomap API를 활용하여 만든 원페이지
                    프로젝트입니다. 여행할 장소 검색을 할 수 있고 직접 경로를
                    만들어 볼 수 있습니다. 또한 만든 경로의 총 이동 경로도
                    계산할 수 있습니다.
                  </p>
                  {/* skill  */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>SKILLS</span>
                      </div>
                      <div className="col-8 text-end">
                        <div className="skillPill smlPill ms-2 hvr-grow">
                          HTML
                        </div>
                        <div className="skillPill smlPill hvr-grow">CSS</div>
                        <div className="skillPill smlPill hvr-grow">JS</div>
                        <div className="skillPillV2 smlPill hvr-grow">
                          Bootstrap
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* link  */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>LINK</span>
                      </div>
                      <div className="col-8 text-end">
                        <a
                          className="text-dark"
                          href="https://github.com/hiwon-lee/heewon-portfolio"
                        >
                          <div className="d-inline-block text-center hvr-float linkIconContainer">
                            <img
                              className="cardsvgImg"
                              src="img/github.svg"
                            />
                            <div style={{ fontSize: '6px' }}>github</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* link */}
                </div>
                {/* cardbody */}
              </div>
            </div>
          </div>
          <div className="col-4 px-0  hvr-bob">
            <div className=" p-0 contentContainer">
              <div className="card">
                <img
                  src="img/soon.jpg"
                  className="card-img-top shadow-sm"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">COMING SOON</h5>
                  <p className="card-text">
                    앞으로 계속 업데이트 될 예정입니다.
                    <br /> 많은 관심 부탁드립니다 !
                  </p>
                  {/* skill  */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>SKILLS</span>
                      </div>
                      <div className="col-8 text-end">
                        <div className="skillPill smlPill ms-2 hvr-grow">
                          BE UPDATE
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* link  */}
                  <div className="minipjRow">
                    <div className="mb-2 row">
                      <div className="col-4 border-end">
                        <span className="material-icons">tag</span>
                        <span>LINK</span>
                      </div>
                      <div className="col-8 text-end">
                        <a
                          className="text-dark"
                          href="https://github.com/hiwon-lee"
                        >
                          <div className="d-inline-block text-center hvr-float linkIconContainer">
                            <img
                              className="cardsvgImg"
                              src="img/github.svg"
                            />
                            <div style={{ fontSize: '6px' }}>github</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* link */}
                </div>
                {/* cardbody */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubProject;
