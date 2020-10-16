import React from 'react';
import slack from '../../images/logos/slack.png'
import google from '../../images/logos/google.png'
import uber from '../../images/logos/uber.png'
import netflix from '../../images/logos/netflix.png'
import airbnb from '../../images/logos/airbnb.png'
import { Container } from 'react-bootstrap';
import './brand.scss'

const Brand = () => {
    return (
        <div className="brand-logos">
            <Container>
              <div className="row m-auto d-flex justify-content-around">
                    <div className="col-md-2 text-center py-3 py-md-0"><img className="brand-logo" src={slack} alt="slack"/></div>
                    <div className="col-md-2 text-center py-3 py-md-0"><img className=" brand-logo" src={google} alt="google"/></div>
                    <div className="col-md-2 text-center py-3 py-md-0"><img className=" brand-logo" src={uber} alt="uber"/></div>
                    <div className="col-md-2 text-center py-3 py-md-0"><img className=" brand-logo" src={netflix} alt="netflix"/></div>
                    <div className="col-md-2 text-center py-3 py-md-0"><img className=" brand-logo" src={airbnb} alt="airbnb"/></div>
                </div>
      </Container>
        </div>
    );
};

export default Brand;