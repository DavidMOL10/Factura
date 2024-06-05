import { useState } from 'react';
import FormularioFactura from '../componets/formularioFactura';
import Tabla from '../componets/tabla.jsx';

export default function Factura() {
  const [data, setData] = useState([]);

  const handleSetTableData = (values) => setData(values);

  return (
    <div>
      <div className="container text-center mt-1">
        <div className="row align-items-start">
          <div className="col"></div>
          <div className="col pt-1 mt-5 m">
            <h1>Factura</h1>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <FormularioFactura setData={handleSetTableData} />
      <Tabla data={data} />
    </div>
  );
}
