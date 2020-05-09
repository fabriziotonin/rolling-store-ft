import React from 'react';
import './App.css';
import { Button } from 'antd' 
import Main from './Components/Main';

function App() {
  
  return (
    <main>
      <Main />
      <p className="letras">
        hola mundo
      </p>
        <Button type="primary" ghost>
          Primary
        </Button>
    </main>
  );
}

export default App;
