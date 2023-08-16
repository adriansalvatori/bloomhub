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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FlexContainer fullHeight direction="column" justify="start" align="flex-start" gap={2} />}>
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />


          <Route path="/elements" element={<Elements />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
