
import './App.css';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';


function App() {
  return (
    <div className="App">
      {/* <Link className="nav-link" to="/usuarios"><span>Lista de Usuarios</span></Link> */}
      
      <div id="wrapper">
        <SideBar/>
        <ContentWrapper/>
      </div>

    </div>
  );
}

export default App;
