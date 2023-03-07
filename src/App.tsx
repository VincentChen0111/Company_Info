import React from 'react';
import { Route, Routes} from 'react-router-dom';
import SupplierForm from './SupplierForm';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function App() {
  return <Container>
      <Routes>
        <Route path="/" element={<SupplierForm />} />
      </Routes>
    </Container>

    
  ;
}

export default App;
