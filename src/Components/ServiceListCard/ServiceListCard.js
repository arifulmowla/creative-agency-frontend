import { Button } from 'react-bootstrap';
import React from 'react';
import './servicelistcard.scss'

const ServiceListCard = ({ service }) => {
    console.log("service", service)
    return (
        <div className="service-list-card">
            <div className="service-flex">
                <div className="img">
                    <img src={service.service.icon} alt="image"/>
                </div>
                <div className="service-btn">
                    <button className={`btn disabled status-${service.status}`}>{service.status}</button>
                </div>
            </div>

            <h4 className="mt-2">{service.service.title}</h4>
            <p>{service.service.description}</p>
        </div>
    );
};

export default ServiceListCard;