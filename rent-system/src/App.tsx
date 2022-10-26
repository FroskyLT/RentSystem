import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';

import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true)
  }

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.app__header}>
          <Header />
        </header>
        <main className={styles.app__main}>
          <Routes>
            <Route path="/" element={<Dashboard loggedIn={loggedIn} />} />
            <Route path="/login" element={<Login loggedIn={loggedIn} login={login} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
