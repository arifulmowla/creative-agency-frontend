import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HomeContext } from '../../App';
import './service.scss'

const Service = ({service}) => {
    const [selectedService, setSelectedService] = useContext(HomeContext)
    const history = useHistory();

    const serviceHandle = (value) => {
        setSelectedService(value);
        history.push('/order');
    }
    return (
        <div className="service text-center my-3" onClick={() => {serviceHandle(service)}}>
            <div className="service-img text-center">
                <img className="w-100 h-100" src={service.icon} alt="service image" />
            </div>
            <h4 className="service-title pt-2 pb-1">{service.title}</h4>
            <p>{service.description}</p>
        </div>
    );
};

export default Service;