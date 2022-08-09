import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import CustomTable from '../components/CustomTable.jsx';
import { useDispatch } from 'react-redux';
import { setUpdate } from '../store/features/storageSlice';



export default function Home() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    dispatch(setUpdate(false));
  };
  const handleShow = () => setShow(true);
  const handleShowUpdate = () => {
    setShow(true);
  };

  return (
    <Row>

      <Row className='mb-5'>
        <Col>
          <Button onClick={handleShow}>Add Product</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <CustomTable show={show} handleShow={handleShow} handleClose={handleClose} handleShowUpdate={handleShowUpdate}/>
        </Col>
      </Row>
    </Row>
  );
}
