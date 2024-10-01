import SkillItem from './SkillItem';
import JS from '../img/js.png';
import BOOTSTRAP from '../img/bootstrap.png';
import PYTHON from '../img/python.png';
import HTML from '../img/html.png';
import CSS from '../img/css.png';
import JQUERY from '../img/jquery.gif';
import JAVA from '../img/java.png';
import FIGMA from '../img/figma.png';
import GITHUB from '../img/github.png';

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
          <div className="col-12 m-1 fs-5"># MAIN LANGUAGE</div>
          <SkillItem
            name="JavaScript"
            percentage="70"
            imageSource={JS}
            progressBarStyle="warning"
          />
          <SkillItem
            name="HTML/CSS"
            percentage="95"
            imageSource={HTML}
            progressBarStyle="warning"
          />
          <SkillItem
            name="PYTHON"
            percentage="80"
            imageSource={PYTHON}
            progressBarStyle="warning"
          />
          <SkillItem
            name="JAVA"
            percentage="60"
            imageSource={JAVA}
            progressBarStyle="warning"
          />
        </div>
        {/* sub skills */}
        <div
          className="progressContainer g-5"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="col-12 m-1 fs-5"># AVAILABLE DEVELOPMENT TOOL</div>
          <SkillItem
            name="JQUERY"
            percentage="70"
            imageSource={JQUERY}
          />
          <SkillItem
            name="BOOTSTRAP"
            percentage="80"
            imageSource={BOOTSTRAP}
          />
          <SkillItem
            name="FIGMA"
            percentage="80"
            imageSource={FIGMA}
          />
          <SkillItem
            name="GITHUB"
            percentage="75"
            imageSource={GITHUB}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
