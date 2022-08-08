import { Table, Row, Col, Button } from 'react-bootstrap';

export default function CustomTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th class='text-center'>ID</th>
          <th class='text-center'>Name</th>
          <th class='text-center'>Price</th>
          <th class='text-center'>Quantity</th>
          <th class='text-center'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class='text-center'>1</td>
          <td class='text-center'>Mark</td>
          <td class='text-center'>Rp. 1,000</td>
          <td class='text-center'>1 Pcs</td>
          <td>
            <Row>
              <Col className='d-flex justify-content-center'>
                <Button size='sm'>Update</Button>
              </Col>
              <Col className='d-flex justify-content-center'>
                <Button className='mt-5 mt-sm-0' size='sm' variant='danger'>
                  Delete
                </Button>
              </Col>
            </Row>
          </td>
        </tr>
        <tr>
          <td class='text-center'>2</td>
          <td class='text-center'>Spencer</td>
          <td class='text-center'>Rp. 2,000</td>
          <td class='text-center'>1 Pcs</td>
          <td>
            <Row>
              <Col className='d-flex justify-content-center'>
                <Button size='sm'>Update</Button>
              </Col>
              <Col className='d-flex justify-content-center'>
                <Button className='mt-5 mt-sm-0' size='sm' variant='danger'>
                  Delete
                </Button>
              </Col>
            </Row>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
