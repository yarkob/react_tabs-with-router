import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import cs from 'classnames';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cs('navbar-item', {
                'is-active': isActive,
              })
            }
          >
            Home.tsx
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) =>
              cs('navbar-item', {
                'is-active': isActive,
              })
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />} />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="container">
                <h1 className="title">Page not found</h1>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  </>
);
