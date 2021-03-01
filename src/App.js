import style from "./App.module.css";
import FirstView from "./components/header/FirstView";
import About from './components/header/About';
import AppealPoints  from './components/main/AppealPoints';
import ItineraryList from "./components/main/ItineraryList";
import GraphContents from './components/main/GraphContents';
import PhotoLibrary from './components/main/PhotoLibrary';
import Contact from "./components/footer/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <header>
        <FirstView />
      </header>
      <div className={style.container}>
        <About />
        <AppealPoints />
        <ItineraryList />
        <GraphContents />
        <PhotoLibrary />
        <Contact />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
