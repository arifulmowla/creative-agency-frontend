import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Brand from '../../Components/Brand/Brand';
import Contact from '../../Components/Contact/Contact';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Review from '../../Components/Review/Review';
import Service from '../../Components/Service/Service';
import Works from '../../Components/Works/Works';
import { GetAllFeedback, GetAllServices, ReviewData, ServicesData } from '../../Store/Store';
import './home.scss'
import './spinner.scss'

const Home = () => {

    //const serviceData = ServicesData;
    //const reviewData = ReviewData;

    const [serviceData, setServiceData] = useState([]);
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        GetAllServices().then(result => setServiceData(result));
        GetAllFeedback().then(result => setReviewData(result))
         
    },[])

  
    return (
        <div className="home">
            <section className="wrapper">
                <Header></Header>
                <Hero></Hero>
            </section>
            <section className="brand">
                <Brand></Brand>
            </section>

            <section className="services">
                <Container>
                     <h2 className="sub-heading text-center">Provide awesome <span className="text-color">services</span></h2>
                    <div className="row my-5">
                         { !serviceData.length && 
                            <div className="spinner">
                                <div className="loading">
                                    <div className="bounceball"></div>
                                    <div className="text">NOW LOADING</div>
                                </div>
                            </div>
                        }
                    { serviceData &&
                        serviceData.map(service => <div className="col-md-4" key={service._id}><Service service={service}></Service></div>)
                    }
                        
                       
                </div>
               </Container>
            </section>
             
            

            {/* Previous work section */}
            <Works></Works>


            <section className="feedback">
                <Container>
                        <h2 className="sub-heading text-center">Client's <span className="text-color">Feedback</span></h2>
                    <div className="row py-5">
                    { !reviewData.length && 
                            <div className="spinner">
                                <div className="loading">
                                    <div className="bounceball"></div>
                                    <div className="text">NOW LOADING</div>
                                </div>
                            </div>
                        }

                        {reviewData &&
                            reviewData.map(review => <div className="col-md-4 py-3" key={review._id}><Review review={review}></Review></div>)
                        }
                        </div>
                </Container>
            </section>

            <section className="contact pt-5 pb-2">
                <Contact></Contact>

                <p className="text-center mt-5">copyright Orange labs 2020</p>
            </section>
        </div>
    );
};

export default Home;