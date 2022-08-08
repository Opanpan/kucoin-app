import { Table, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


export default function CustomTable() {
    const items = useSelector(
        (state) => state.storage.items
    );

  return (
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
        )
      })}
      </tbody>
    </Table>
  );
}
