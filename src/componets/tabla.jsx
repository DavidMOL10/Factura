export default function Tabla({ data }) {
  console.log('datos de tabla', data);

  const subtotal = data.reduce((acc, item) => acc + item.subtotal, 0);
  const taxRate = 16;
  const tax = subtotal * (taxRate / 100);
  const total = subtotal + tax;

  return (
    <div className="container-lg mt-4">
      <table className="table table-bordered">
        <thead className="table-secondary">
          <tr>
            <th scope="col">ID Producto</th>
            <th scope="col">Descripción</th>
            <th scope="col">Valor Unitario</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fila, index) => (
            <tr key={index}>
              <td>{fila.idProducto}</td>
              <td>{fila.descripcion}</td>
              <td>{fila.valorUnitario}</td>
              <td>{fila.cantidad}</td>
              <td>{fila.subtotal}</td>
              <td>
                <div className="container-center mt-6">
                  <button type="button" className="btn btn-danger btn-sm w-100">
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="container text-center">
        <div class="row align-items-end">
          <div class="col-8"></div>
          <div class="col-4 text-end">
            <ul class="list-unstyled">
              <li>Subtotal: $ {subtotal.toFixed(2)}</li>
              <li>
                IVA ({taxRate}%): $ {tax.toFixed(2)}
              </li>
              <li>Total: $ {total.toFixed(2)}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-3"></div>
    </div>
  );
}
