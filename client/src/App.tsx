import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './redux/types/hooks';
import { RootState } from './redux/store';
import Main from './components/Main/Main';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import Game from './components/Game/Game';
import './App.css';

function App() {
  const user = useAppSelector((state: RootState) => state.session.username);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/topics" element={user ? <Game /> : <Main />} />
        <Route path="/profile" element={user ? <Profile /> : <Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
