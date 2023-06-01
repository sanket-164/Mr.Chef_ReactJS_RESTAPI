import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SelectedMeal from './components/SelectedMeal'
import Filter from './components/Filter';
import { useState } from 'react';
import MrChef from './components/MrChef';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('MrChefTheme') ? localStorage.getItem('MrChefTheme') : 'dark');

  if (theme === 'light') {
    document.body.style.backgroundColor = 'white';
  } else if (theme === 'dark') {
    document.body.style.backgroundColor = 'black';
  }

  const themeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = 'black';
      localStorage.setItem('MrChefTheme', 'dark');
    } else if (theme === 'dark') {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
      localStorage.setItem('MrChefTheme', 'light');
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar setTheme={themeToggle} theme={theme}></Navbar>
        <Routes>
          <Route exact path="/" element={<MrChef setTheme={themeToggle} theme={theme} />}></Route>
          <Route exact path="/home" element={<Home setTheme={themeToggle} theme={theme} />}></Route>
          <Route exact path='/category/:category' element={<Filter setTheme={themeToggle} theme={theme} />}></Route>
          <Route exact path='/country/:country' element={<Filter setTheme={themeToggle} theme={theme} />}></Route>
          <Route exact path='/meal/:id' element={<SelectedMeal setTheme={themeToggle} theme={theme} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
