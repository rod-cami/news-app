import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';

function App() {
  const [view, setView] = useState()
  localStorage.setItem("view",view);
  localStorage.setItem("page",null);
  localStorage.setItem("query","Select your news");
  localStorage.setItem("favsList",[]);
  return (
    <div className='contenido'>
      <Header/>
      <Menu setView={setView}/>
      <Home/>
    </div>
  );
}

export default App;
