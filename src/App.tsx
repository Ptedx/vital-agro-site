import './App.css';
import Advantages from './components/body/Advantages';
import {FAQ} from './components/body/FAQ';
import MainScreen from './components/body/mainScreen';
import Services from './components/body/Services';
import Container from './styled-components/general/container';
import Loc from './components/body/Loc';
import Footer from './components/footer/footer';
import Depoiments from './components/body/Depoiments';
import Menu from './components/header/Menu';

function App() {
  return (
    <>
      <Container>
        <Menu />
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
