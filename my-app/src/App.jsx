import './css/hover.css';
import './css/progressStyle.css';
import './css/style.css';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import FinalGoal from './components/FinalGoal';
import ContactRecruitment from './components/ContactRecruitment';
import Nav from './components/Nav';
function App() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example"
    >
      <div className="myWrapper">
        {/*  nav-bar */}
        <Nav />
      </div>

      <Profile></Profile>

      <Skills />
      <Portfolio />
      {/*  final Goal */}
      <FinalGoal />
      {/* /* Contact */
      /* Contact-RECRUITMENT */}
      <ContactRecruitment />
    </div>
  );
}

export default App;
