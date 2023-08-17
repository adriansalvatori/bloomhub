import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** Import Styles */
import './assets/styles/main.scss';

/** Import Container */
import FlexContainer from './components/FlexContainer/FlexContainer';

/** Import Pages */
import Elements from './pages/Elements.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Favorites from './pages/Favorites.jsx';
// import Detail from './pages/Detail.jsx';
import Basket from './pages/Basket.jsx';
import User from './pages/User.jsx';
import { GlobalStateProvider } from './hooks/globalState';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FlexContainer fullHeight direction="column" justify="flex-start" align="flex-start" gap={2} />}>
            <Route index element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/checkout" element={<Basket />} />
            <Route path="/settings" element={<User />} />
            {/*<Route path="/detail/:id" element={<Detail />} />
            */}

            <Route path="/elements" element={<Elements />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalStateProvider>
  </React.StrictMode>
)
