import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.css';

import Factura from './views/factura.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Factura />
      </div>
    </>
  );
}

export default App;
