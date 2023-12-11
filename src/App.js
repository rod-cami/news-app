import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';

function App() {
  const [view, setView] = useState("All");
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState();
  localStorage.setItem("view",view);
  localStorage.setItem("page",page);
  localStorage.setItem("query",query);
  return (
    <div className='contenido'>
      <Header/>
      <Menu setView={setView}/>
      <Home setPage={setPage} setQuery={setQuery} query={query} view={view}/>
    </div>
  );
}

export default App;
