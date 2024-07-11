import './App.css';
import Advantages from './components/body/Advantages';
import FAQ from './components/body/FAQ';
import MainScreen from './components/body/mainScreen';
import Services from './components/body/Services';
import MenuDesktop from './components/header/menuDesktop';
import Container from './styled-components/general/container';
import Loc from './components/body/Loc';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <MenuDesktop />
      <MainScreen />
      <Container>
        <Services />
        <Advantages />
        <Loc />
        <FAQ />
      </Container>
        <Footer />
    </>
  );
}

export default App;
