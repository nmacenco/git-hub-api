
import './App.css';

import {BrowserRouter} from 'react-router-dom'
import { AppRouter } from './Router';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth='xl'>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
