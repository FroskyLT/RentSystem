import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';

import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { login } from './api/api';
import Bike from './components/Bike/Bike';
import History from './components/History/History';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const isAdmin = true;

  const loginHandler = async (email: string, password: string) => {
    await login(email, password);
  
    setLoggedIn(true)
  }

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.app__header}>
          <Header loggedIn={loggedIn} />
        </header>
        <main className={styles.app__main}>
          <Routes>
            <Route path="/" element={<Dashboard loggedIn={loggedIn} isAdmin={isAdmin} />} />
            <Route path="/login" element={<Login loggedIn={loggedIn} login={loginHandler} />} />
            <Route path="/history" element={<History />} />
            <Route path="/bike/:id" element={<Bike />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
