import './App.css';
import Advantages from './components/body/Advantages';
import {FAQ} from './components/body/FAQ';
import MainScreen from './components/body/mainScreen';
import Services from './components/body/Services';
import MenuDesktop from './components/header/menuDesktop';
import Container from './styled-components/general/container';
import Loc from './components/body/Loc';
import Footer from './components/footer/footer';
import Depoiments from './components/body/Depoiments';
import MobileMenu from './components/header/menuMobile';
import MobileSize from './components/general/WidthChecker';

function App() {
  return (
    <>
      <Container>
        {MobileSize(768) ? <MobileMenu />: <MenuDesktop />}  
        <MainScreen />
        <Services />
        <Advantages />
        <Depoiments />
        <Loc />
        <FAQ />
      </Container>
        <Footer />
    </>
  );
}

export default App;
