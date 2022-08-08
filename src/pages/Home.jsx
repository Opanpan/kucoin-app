import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import CustomForm from '../components/CustomForm.jsx';
import CustomTable from '../components/CustomTable.jsx';

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Row>
      <Row>
        <Col>
          <CustomForm show={show} handleClose={handleClose} />
        </Col>
      </Row>

      <Row className='mb-5'>
        <Col>
          <Button onClick={handleShow}>Add Product</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <CustomTable />
        </Col>
      </Row>
    </Row>
  );
}
