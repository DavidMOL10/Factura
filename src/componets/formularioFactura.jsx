import { useState } from 'react';

export default function FormularioFactura({ setData }) {
  const [idProducto, setIdProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo objeto con los datos del producto
    const nuevoProducto = {
      idProducto: idProducto,
      descripcion: descripcion,
      valorUnitario: valorUnitario,
      cantidad: cantidad,
      subtotal: valorUnitario * cantidad,
    };

    // Llamar a la función setData del componente padre con el nuevo producto
    setData((prevData) => [...prevData, nuevoProducto]);

    // Limpiar los campos del formulario después de enviar
    setIdProducto('');
    setDescripcion('');
    setValorUnitario('');
    setCantidad('');
  };

  return (
    <div>
      <div className="container-lg">
        <div className="row align-items-start">
          <div className="col-6">
            <div>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mt-5 fs-6"
              >
                Numero de Factura:
              </label>
              <input
                type="text"
                className="form-control form-control-sm w-80"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-6">
            <div>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mt-5 fs-6"
              >
                Nombre del Cliente:
              </label>
              <input
                type="text"
                className="form-control form-control-sm w-80"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-6">
            <div>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mt-3 fs-6"
              >
                Cedula:
              </label>
              <input
                type="text"
                className="form-control form-control-sm w-80"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col-6">
            <div>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mt-3 fs-6"
              >
                Telefono:
              </label>
              <input
                type="text"
                className="form-control form-control-sm w-80"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col">
            <div>
              <label
                htmlFor="exampleInputEmail1"
                className="form-label mt-3 fs-6 "
              >
                Correo:
              </label>
              <input
                type="text"
                className="form-control form-control-sm w-80"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Formulario */}
      <div className="container-lg">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="row align-items-start">
              <div className="col-6">
                <div className="mb-3 mt-4">
                  <input
                    onChange={(e) => setIdProducto(e.target.value)}
                    type="text"
                    className="form-control"
                    id="idProducto"
                    name="idProducto"
                    aria-describedby="emailHelp"
                    placeholder="ID Producto"
                    value={idProducto}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3 mt-4">
                  <input
                    type="text"
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3 mt-4">
                  <input
                    type="number"
                    className="form-control"
                    id="valorUnitario"
                    name="valorUnitario"
                    placeholder="Valor Unitario"
                    value={valorUnitario}
                    onChange={(e) => setValorUnitario(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3 mt-4">
                  <input
                    type="number"
                    className="form-control"
                    id="cantidad"
                    name="cantidad"
                    placeholder="Cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success w-100">
              Agregar Producto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
