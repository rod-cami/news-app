import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';

function App() {
  const [view, setView] = useState("All");
  const [query, setQuery] = useState();
  localStorage.setItem("view",view);
  localStorage.setItem("query",query);
  return (
    <div className='contenido'>
      <Header/>
      <Menu setView={setView}/>
      <Home setQuery={setQuery} query={query} view={view}/>
    </div>
  );
}

export default App;
