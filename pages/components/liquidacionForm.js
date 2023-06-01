import { Form, Input, Button, Result, Typography } from 'antd';
import { useState } from 'react';

const { Title } = Typography;

const LiquidacionForm = ({empleadoInfo, empleadorInfo}) => {
  const [salario, setSalario] = useState(0);
  const [diasTrabajados, setDiasTrabajados] = useState(0);
  const [cesantias, setCesantias] = useState(0);
  const [intereses, setIntereses] = useState(0);
  const [prima, setPrima] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const calculateCesantias = (empleadoInfo, empleadorInfo) => {
    const cesantiasAnuales = (salario * diasTrabajados) / 360;
    setCesantias(cesantiasAnuales);
    const interesesAnuales = (cesantiasAnuales * 0.12 * diasTrabajados) / 360;
    setIntereses(interesesAnuales);
    const primaDeServicios = (salario * diasTrabajados) / 360;
    setPrima(primaDeServicios);
    setFormSubmitted(true);
  };

  return (
    <>
      {formSubmitted ? (
        <Result
          status="success"
          title="Cálculo de Liquidación Completo"
          subTitle={
            <>
              <Title level={4}>Empleado</Title>
              <Title level={5}>Nombre: {empleadoInfo.nombre}</Title>
              <Title level={5}>Tipo de Documento: {empleadoInfo.tipoDocumento}</Title>
              <Title level={5}>Número de Documento: {empleadoInfo.numeroDocumento}</Title>

              <Title level={4}>Empleador</Title>
              <Title level={5}>Nombre/Razón Social: {empleadorInfo.nombre}</Title>
              <Title level={5}>Tipo de Documento: {empleadorInfo.tipoDocumento}</Title>
              <Title level={5}>Número de Documento: {empleadorInfo.numeroDocumento}</Title>

              <Title level={4}>Cesantías Anuales: {cesantias.toFixed(2)}</Title>
              <Title level={4}>Intereses a las Cesantías Anuales: {intereses.toFixed(2)}</Title>
              <Title level={4}>Prima de Servicios: {prima.toFixed(2)}</Title>
            </>
          }
          extra={<Button type="primary" onClick={() => setFormSubmitted(false)}>Calcular otra vez</Button>}
        />
      ) : (
        <Form layout="vertical">
          <h2>Liquidacion</h2>
          <Form.Item label="Salario base de liquidación">
            <Input
              placeholder="Salario base de liquidación"
              type="number"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Días trabajados">
            <Input
              placeholder="Días trabajados"
              type="number"
              value={diasTrabajados}
              onChange={(e) => setDiasTrabajados(e.target.value)}
            />
          </Form.Item>
          <Button type="primary" onClick={calculateCesantias}>
            Calcular Cesantías, Intereses y Prima
          </Button>
        </Form>
      )}
    </>
  );
};

export default LiquidacionForm;
