import './App.css';
import {Routes} from './Routes/router';

import { AuthProvider } from '../src/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
