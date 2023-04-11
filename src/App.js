import './App.css';
import AboutComponent from './components/about';
import HeaderComponent from './components/header';
import IntroductionComponent from './components/introduction';

function App() {
  return (
    <div className="App">

      <HeaderComponent />
      <IntroductionComponent />
      <AboutComponent />

    </div>
  );
}

export default App;
