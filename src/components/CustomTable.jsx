import { useState } from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, setUpdate } from '../store/features/storageSlice';
import CustomForm from './CustomForm';

export default function CustomTable(props) {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.storage.items);
  
  const [updateItem, setUpdateItem] = useState(null);

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const handleUpdateData = (index) => {
    props.handleShowUpdate(index);
    setUpdateItem(items[index]);
    dispatch(setUpdate(true))
  };

  return (
    <div>
      <Row>
        <Col>
          <CustomForm
            updateItem={updateItem}
            show={props.show}
            handleClose={props.handleClose}
          />
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th className='text-center'>ID</th>
            <th className='text-center'>Name</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>Quantity</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((x, i) => {
            return (
              <tr key={i}>
                <td className='text-center'>{x.id}</td>
                <td className='text-center'>{x.name}</td>
                <td className='text-center'>Rp. {x.price}</td>
                <td className='text-center'>{x.quantity} Pcs</td>
                <td>
                  <Row>
                    <Col className='d-flex justify-content-center'>
                      <Button
                        onClick={() => handleUpdateData(i)}
                        size='sm'
                      >
                        Update
                      </Button>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                      <Button
                        onClick={() => handleDeleteItem(x.id)}
                        className='mt-5 mt-sm-0'
                        size='sm'
                        variant='danger'
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
