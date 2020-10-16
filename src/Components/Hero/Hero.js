import React from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import heroImg from '../../images/logos/Frame.png';
import './hero.scss';

const Hero = () => {
    return (
        <div className="hero my-5">
            <Container>
                <div className="row d-flex align-items-center">
                <div className="col-md-5">
                <h1 className="heading">Let’s Grow Your<br></br> Brand To The<br></br> Next Level</h1>
                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque possimus quos amet odit quam quo.</p>

                <Button variant="secondary" className="btn btn-secondary secondary-btn">Hire us</Button>
            </div>
            <div className="col-md-7">
                <img className="w-100" src={heroImg} alt="heroimg"/>
            </div>
            </div>
            </Container>
        </div>
    );
};

export default Hero;