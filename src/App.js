import './App.css';
import AboutComponent from './components/about/about';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
import IntroductionComponent from './components/introduction';
import SkillsComponent from './components/skills/skills';

function App() {
  return (
    <div className="App font-sourceSansPro">

      <HeaderComponent />
      <IntroductionComponent />
      <AboutComponent />
      <SkillsComponent />
      <FooterComponent />

    </div>
  );
}

export default App;
