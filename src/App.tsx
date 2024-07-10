import './App.css';
import MainScreen from './components/body/mainScreen';
import MenuDesktop from './components/header/menuDesktop';
import Container from './styled-components/general/container';

function App() {
  return (
    <>
      <MenuDesktop />
      <MainScreen />
      <Container>
        <MenuDesktop />
        <MainScreen />
      </Container>
    </>
  );
}

export default App;
