import { Form, Input, Select } from 'antd';

const { Option } = Select;

const EmpleadoForm = ({ nombre, tipoDocumento, numeroDocumento, setNombre, setTipoDocumento, setNumeroDocumento }) => {
  return (
    <Form layout="vertical" >
      <h2>Empleado</h2>
      <Form.Item label="Nombres y apellidos">
        <Input placeholder="Nombres y apellidos" value={nombre} onChange={e => setNombre(e.target.value)} />
      </Form.Item>
      <Form.Item label="Tipo de documento">
        <Select placeholder="Seleccione tipo de documento" value={tipoDocumento} onChange={val => setTipoDocumento(val)}>
          <Option value="cc">Cédula de Ciudadanía</Option>
          <Option value="ce">Cédula de Extranjería</Option>
        </Select>
      </Form.Item>
      <Form.Item label="No de documento">
        <Input placeholder="Número de documento" value={numeroDocumento} onChange={e => setNumeroDocumento(e.target.value)} />
      </Form.Item>
    </Form>
  );
};

export default EmpleadoForm;
