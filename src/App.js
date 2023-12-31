import styled from 'styled-components';
import './App.css';
import TimelineDisplay from './components/TimelineDisplay';

function App() {
  return (
    <AppContainer className="App">
      <Header>
        <h1>Cosmere Interactive Timeline</h1>
      </Header>
      <Content>
        <TimelineDisplay />
      </Content>
      <Footer>Site by Lloyd Grubham | Creative Commons</Footer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: #333;
  color: white;
  width: 100%;
  padding: 60px 0;

`;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  z-index: 10;

  h1 {
    text-align: center;
  }
`;

const Content = styled.main`
  width: 100%;
  padding: 0 20px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: #000;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
