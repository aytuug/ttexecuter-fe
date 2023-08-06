import { Space } from 'antd';
import './App.css';
import Header from './Components/Header/Header';
import SideMenu from './Components/SideMenu/SideMenu';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Space className="SideMenuAndPageContent">
        <SideMenu />
        <Content />
      </Space>
      <Footer />
    </div>
  );
}

export default App;
