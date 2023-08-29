import { Space } from 'antd';
import './App.css';
import Header from './Components/Header/Header';
import SideMenu from './Components/SideMenu/SideMenu';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Space className="SideMenuAndPageContent">
        <SideMenu />
        <Content />
      </Space>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
