import { Form, Button, Modal } from 'react-bootstrap';

export default function CustomForm(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Product Name</Form.Label>
            <Form.Control type='text' placeholder='Enter name' />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Price</Form.Label>
            <Form.Control type='number' placeholder='Enter price' />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Quantity</Form.Label>
            <Form.Control type='number' placeholder='Enter quantity' />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <Button variant='secondary' onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
