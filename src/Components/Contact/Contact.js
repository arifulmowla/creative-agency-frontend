import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Contact = () => {
       const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
    return (
      
        <div className="contact-form py-5">
            <Container>
<div className="row">
                <div className="col-md-6">
                    <h2>Let us handle your project, professionally.</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="email" type="email" className="form-control" ref={register({ required: true })} placeholder="Your email address"/>
                        {errors.email && <span>This field is required</span>}
                        </div>
                         <div className="form-group">
                            <input name="name" type="text" className="form-control" ref={register({ required: true })} placeholder="Your name / Company name"/>
                        {errors.name && <span>This field is required</span>}
                        </div>
                         <div className="form-group">
                            <textarea name="message" className="form-control" ref={register({ required: true })} placeholder="Your message" rows="10"/>
                        {errors.message && <span>This field is required</span>}
                        </div>
                        
                   
                <button className="btn btn-secondary secondary-btn">Send</button>
                        </form>
                </div>
            </div>
            </Container>
            
        </div>
    );
};

export default Contact;