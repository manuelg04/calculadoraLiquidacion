import { useState } from 'react';
import { Button } from 'antd';
import EmpleadoForm from  '../pages/components/empleadoForm'
import EmpleadorForm from '../pages/components/empleadorForm'
import LiquidacionForm from './components/liquidacionForm';

const IndexPage = () => {
  const [nombreEmpleado, setNombreEmpleado] = useState('');
  const [tipoDocumentoEmpleado, setTipoDocumentoEmpleado] = useState('');
  const [numeroDocumentoEmpleado, setNumeroDocumentoEmpleado] = useState('');

  const [nombreEmpleador, setNombreEmpleador] = useState('');
  const [tipoDocumentoEmpleador, setTipoDocumentoEmpleador] = useState('');
  const [numeroDocumentoEmpleador, setNumeroDocumentoEmpleador] = useState('');

  const handleSubmit = () => {
    // ...
  };

  return (
    <div>
      <EmpleadoForm 
        nombre={nombreEmpleado}
        tipoDocumento={tipoDocumentoEmpleado}
        numeroDocumento={numeroDocumentoEmpleado}
        setNombre={setNombreEmpleado}
        setTipoDocumento={setTipoDocumentoEmpleado}
        setNumeroDocumento={setNumeroDocumentoEmpleado}
      />
      <EmpleadorForm 
        nombre={nombreEmpleador}
        tipoDocumento={tipoDocumentoEmpleador}
        numeroDocumento={numeroDocumentoEmpleador}
        setNombre={setNombreEmpleador}
        setTipoDocumento={setTipoDocumentoEmpleador}
        setNumeroDocumento={setNumeroDocumentoEmpleador}
      />
      <LiquidacionForm 
        empleadoInfo={{ nombre: nombreEmpleado, tipoDocumento: tipoDocumentoEmpleado, numeroDocumento: numeroDocumentoEmpleado }}
        empleadorInfo={{ nombre: nombreEmpleador, tipoDocumento: tipoDocumentoEmpleador, numeroDocumento: numeroDocumentoEmpleador }}
      />
      <Button type="primary" onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default IndexPage;

