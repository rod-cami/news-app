import './App.css';
import Home from './pages/Home/Home';

function App() {
  localStorage.setItem("page",null);
  localStorage.setItem("query","Select your news");
  localStorage.setItem("favsList",[]);
  return (
    <>
      <Home/>
    </>
  );
}

export default App;
