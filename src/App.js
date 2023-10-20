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
  background-color: #222;
  color: white;
  height: 100vh;
  width: 100%;
  padding: 20px 0;
  padding-top: 60px;
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

  h1 {
    text-align: center;
  }
`;

const Content = styled.main`
  width: 100%;
  padding: 0 20px;
`;

const Footer = styled.footer`
  position: absolute;
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
