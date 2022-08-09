import { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem } from '../store/features/storageSlice';

export default function CustomForm(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const isUpdate = useSelector((state) => state.storage.isUpdate);

  useEffect(() => {
    handleDetailItem();
  }, [isUpdate]);

  const handleDetailItem = () => {
    if (props.updateItem !== null) {
      if (isUpdate) {
        setName(props.updateItem.name);
        setPrice(props.updateItem.price);
        setQuantity(props.updateItem.quantity);
      } else {
        setName('');
        setPrice('');
        setQuantity('');
      }
    }
  };

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleInputQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const resetForm = () => {
    setName('');
    setPrice('');
    setQuantity('');
  };

  const handleSubmitInput = () => {
    dispatch(
      addItem({
        name,
        id: 0,
        price,
        quantity,
      })
    );
    props.handleClose();
    resetForm();
  };

  const handleUpdateInput = () => {
    dispatch(
      updateItem({
        name,
        id: props.updateItem.id,
        price,
        quantity,
      })
    );
    props.handleClose();
    resetForm();
  };

  const isFormValidated = () => {
    return name !== '' && price !== '' && quantity !== '';
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              onChange={handleInputName}
              value={name}
              type='text'
              placeholder='Enter name'
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              onChange={handleInputPrice}
              value={price}
              type='number'
              placeholder='Enter price'
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              onChange={handleInputQuantity}
              value={quantity}
              type='number'
              placeholder='Enter quantity'
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {isUpdate ? (
          <Button
            disabled={!isFormValidated()}
            onClick={handleUpdateInput}
            variant='primary'
            type='submit'
          >
            Update
          </Button>
        ) : (
          <Button
            disabled={!isFormValidated()}
            onClick={handleSubmitInput}
            variant='primary'
            type='submit'
          >
            Submit
          </Button>
        )}

        <Button variant='secondary' onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
