import './App.css';
import AboutComponent from './components/about/about';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
import IntroductionComponent from './components/introduction';

function App() {
  return (
    <div className="App font-sourceSansPro">

      <HeaderComponent />
      <IntroductionComponent />
      <AboutComponent />
      <FooterComponent />

    </div>
  );
}

export default App;
