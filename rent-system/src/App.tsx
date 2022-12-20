import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';

import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import Bike from './components/Bike/Bike';
import History from './components/History/History';
import mockData from './data/mockData.json';
import { IBike, IData, IUser } from './model/interfaces';
import Toast from './components/Toast/Toast';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState<IData>(mockData);
  const [user, setUser] = useState<IUser>();

  const loginHandler = async (email: string, password: string) => {
    const users = data.users;
    for (const u of users) {
      if (u.email === email && u.password === password) {
        setLoggedIn(true)
        setUser(u)
        break
      }
    }
  }

  const logoutHandler = () => {
    setUser(null)
    setLoggedIn(false)
  }

  const addBike = (bike: IBike) => {
    setData({ ...data, bikes: [...data.bikes, bike] })
  }

  const removeBike = (id: number) => {
    setData({ ...data, bikes: data.bikes.filter(bike => bike.bikeId !== id) });
  }

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.app__header}>
          <Header loggedIn={loggedIn} logout={logoutHandler} />
        </header>
        <main className={styles.app__main}>
          <Routes>
            <Route path="/" element={<Dashboard
              loggedIn={loggedIn}
              user={user}
              bikes={data.bikes}
              addBike={addBike}
              removeBike={removeBike}
            />} />
            <Route path="/login" element={<Login loggedIn={loggedIn} login={loginHandler} />} />
            <Route path="/history" element={<History />} />
            <Route path="/bike/:id" element={<Bike bikes={data.bikes} />} />
          </Routes>
          {data?.rent && <Toast />}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
