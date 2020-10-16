import React, { useEffect, useState } from 'react';

import ServiceListCard from '../../Components/ServiceListCard/ServiceListCard';

import { GetUserOrders} from '../../Store/Store';
import Dashboard from '../Dashboard/Dashboard';
import './serviceslist.scss'

const ServicesList = () => {


    const [usersOrders, setUsersOrders] = useState([]);

    useEffect(() => {
        GetUserOrders(sessionStorage.getItem('token')).then(result => setUsersOrders(result))
    }, [])
    return (
        <div>
             <Dashboard isAdmin={false} title={'Service List'}>
                <div className="row">
                    { usersOrders && 
                    usersOrders.map(service => <div className="col-md-5" key={service._id}><ServiceListCard service={service}></ServiceListCard></div>)
             }
                </div>
       </Dashboard>
       </div>
    );
};

export default ServicesList;