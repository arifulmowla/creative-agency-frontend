import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DataTable from 'react-data-table-component';
import { Container } from 'react-bootstrap';
import { ChangeStatus, GetAllOrders} from '../../Store/Store';
import { Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
const AdminServicesList = () => {

  const [orders, setOrders] = useState([]);
    const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982' } ];
    const columns = [
      {
        name: 'Name',
        selector: 'name',
        sortable: true,
      },
      {
        name: 'Email ID',
        selector: 'email',
        sortable: true,
   
      },
      {
        name: 'Service',
        selector: 'category',
        sortable: true,
   
      },
      {
        name: 'Project Details',
        selector: 'projectDetails',
        sortable: false,
   
      },
      {
        name: 'Status',
        cell: row =>  <Form.Control
          as="select"
          className={`my-1 mr-sm-2 ${row.status === 'Pending' && 'text-danger' || 'text-success'}`}
          id="inlineFormCustomSelectPref"
          custom
          style={{border: 'none'}}
          onChange={(e) => {handleStatus(e, row._id)}}
        >
  
        <option value={row.status} className={row.status === 'Pending' && 'text-danger' || 'text-success'}>{row.status}</option>
        <option  value={row.status == 'Pending' && 'Done' || 'Pending'} className={row.status === 'Pending' && 'text-success' || 'text-danger'}>{row.status == 'Pending' && 'Done' || 'Pending'}</option>
    
  </Form.Control>,

        sortable: true,
   
      },
  ];
  
  const token = sessionStorage.getItem('token');

  const handleStatus = (e, id) => {
    const setStatus = e.target.value;
    ChangeStatus({ status: setStatus, _id: id }, token).then(result => console.log(result));
}

  useEffect(() => {
    GetAllOrders(token).then(result => setOrders(result));
  }, [])
  
console.log(orders)
    return (
        <div className="admin-services-list">
            <Dashboard isAdmin={true} title={'Services List'}>
          <Container className="mt-3 rounded">
            <DataTable
                title='List of all orders'
                columns={columns}
                data={orders}
              />
              </Container>
            </Dashboard>
        </div>
    );
};

export default AdminServicesList;