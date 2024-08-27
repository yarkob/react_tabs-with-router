import { HashRouter } from 'react-router-dom';
import { App } from './App';

export const Root = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};
