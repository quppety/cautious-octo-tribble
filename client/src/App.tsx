import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Game from './components/Game/Game';
import './App.css';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/topics" element={<Game />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
