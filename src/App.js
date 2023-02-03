import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SelectedFood from './components/SelectedFood'
import Filter from './components/Filter';
import { useState } from 'react';
import MrChef from './components/MrChef';

function App() {
  const [theme, setTheme] = useState('light');

  const themeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = 'black';
    } else if (theme === 'dark') {
      setTheme('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar setTheme={themeToggle} theme={theme}></Navbar>
          <Routes>
            <Route exact path="/" element={<Home setTheme={themeToggle} theme={theme} />}></Route>
            <Route exact path="/mrchef" element={<MrChef setTheme={themeToggle} theme={theme} />}></Route>
            <Route exact path='/filtered' element={<Filter setTheme={themeToggle} theme={theme} />}></Route>
            <Route exact path='/selectedFood' element={<SelectedFood setTheme={themeToggle} theme={theme} />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
