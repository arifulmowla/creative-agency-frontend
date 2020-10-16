import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import WorksComponent from './WorksComponent';

import './works.scss'

const Works = () => {

 

    return (
        <section className="works">
            <Container>
                <h2 className="sub-heading text-center text-white py-2">
                Here are some of <span className="text-color">our works</span>
                </h2>
                

                <div className="carisol-section pt-2">
                     <WorksComponent></WorksComponent>
                </div>
            </Container>
        </section>
    );
};

export default Works;