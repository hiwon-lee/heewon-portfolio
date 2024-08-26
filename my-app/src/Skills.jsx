function Skills() {
  return (
    <div
      id="scrollspyHeading2"
      className="fitcontent bg-light paddingY fullHeight"
    >
      <div className="container pt-3 pb-2">
        <h2 className="text-center fw-bolder pt-3">
          <span className="highlight pb-2">SKILLS</span>
        </h2>
        {/* main skills */}
        <div
          className="progressContainer g-5"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="col-12 m-1 fs-5"># MAIN SKILLS</div>
          <div className="progressItem col-6">
            <div className="d-flex">
              <img
                className="skillImg"
                src="img/js.png"
                alt="jqeury"
              />
              <div># JavaScript</div>
              <div className="ms-auto">55%</div>
            </div>

            <div className="progress m-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '55%' }}
              ></div>
            </div>
          </div>
          <div className="progressItem col-6">
            <div className="d-flex">
              <img
                className="skillImg"
                src="img/html.png"
                alt="Html"
              />
              <div># Html</div>
              <div className="ms-auto">80%</div>
            </div>

            <div className="progress m-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '80%' }}
              ></div>
            </div>
          </div>
          <div className="progressItem col-6">
            <div className="d-flex">
              <img
                className="skillImg"
                src="img/css.png"
                alt="css"
              />
              <div># Css</div>
              <div className="ms-auto">70%</div>
            </div>

            <div className="progress m-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '70%' }}
              ></div>
            </div>
          </div>
          <div className="progressItem col-6">
            <div className="d-flex">
              <img
                className="skillImg"
                src="img/jquery.gif"
                alt="jQuery"
              />
              <div># jQuery</div>
              <div className="ms-auto">60%</div>
            </div>

            <div className="progress m-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '60%' }}
              ></div>
            </div>
          </div>
          <div className="progressItem col-6">
            <div className="d-flex">
              <img
                className="skillImg"
                src="img/bootstrap.png"
                alt="bootstrap"
              />
              <div># Bootstrap</div>
              <div className="ms-auto">65%</div>
            </div>

            <div className="progress m-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                role="progressbar"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>
        </div>
        {/* sub skills */}
        <div
          className="progressContainer g-5"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="col-12 m-1 fs-5"># SUB SKILLS</div>

          <div className="progressItem col-6">
            <div className="d-flex">
              <img
                className="skillImg"
                src="img/java.png"
                alt="Java"
              />
              <div># Java</div>
              <div className="ms-auto">40%</div>
            </div>

            <div className="progress m-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '40%' }}
              ></div>
            </div>
          </div>

          <div className="progressItem col-6">
            <div className="d-flex">
              <img
                className="skillImg"
                src="img/python.png"
                alt="Python"
              />
              <div># Python</div>
              <div className="ms-auto">40%</div>
            </div>

            <div className="progress m-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '40%' }}
              ></div>
            </div>
          </div>

          <div className="progressItem col-6">
            <div className="d-flex">
              <img
                className="skillImg"
                src="img/github.png"
                alt="Github"
              />
              <div># Github</div>
              <div className="ms-auto">30%</div>
            </div>

            <div className="progress m-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '30%' }}
              ></div>
            </div>
          </div>

          <div className="progressItem col-6">
            <div className="d-flex">
              <img
                className="skillImg"
                src="img/figma.png"
                alt="Figma"
              />
              <div># Figma</div>
              <div className="ms-auto">35%</div>
            </div>

            <div className="progress m-2">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                aria-valuenow="35"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '35%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
