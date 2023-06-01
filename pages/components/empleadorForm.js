import { Form, Input, Select } from 'antd';

const { Option } = Select;

const EmpleadorForm = ({ nombre, tipoDocumento, numeroDocumento, setNombre, setTipoDocumento, setNumeroDocumento }) => {
  return (
    <Form layout="vertical" >
      <h2>Empleador</h2>
      <Form.Item label="Razón social / Nombre">
        <Input placeholder="Razón social / Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      </Form.Item>
      <Form.Item label="Tipo de documento">
        <Select placeholder="Seleccione tipo de documento" value={tipoDocumento} onChange={val => setTipoDocumento(val)}>
          <Option value="nit">NIT</Option>
          <Option value="rut">RUT</Option>
        </Select>
      </Form.Item>
      <Form.Item label="No de documento">
        <Input placeholder="Número de documento" value={numeroDocumento} onChange={e => setNumeroDocumento(e.target.value)} />
      </Form.Item>
    </Form>
  );
};

export default EmpleadorForm;
