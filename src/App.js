import './App.css';
import AboutComponent from './components/about/about';
import HeaderComponent from './components/header';
import IntroductionComponent from './components/introduction';

function App() {
  return (
    <div className="App font-sourceSansPro text-[#050A24]">

      <HeaderComponent />
      <IntroductionComponent />
      <AboutComponent />

    </div>
  );
}

export default App;
