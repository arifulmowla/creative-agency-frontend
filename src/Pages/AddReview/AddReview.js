import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './addreview.scss'
import { PostReview, CheckExistsPostReview } from '../../Store/Store';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const AddReview = () => {
    const { register, handleSubmit,  errors } = useForm();
    const token = sessionStorage.getItem('token');
    const [review, setReview] = useState({})

    const onSubmit = data => {
        data.photoUrl = JSON.parse(sessionStorage.getItem('user')).photoUrl;
        PostReview(data, token).then(result => {
            console.log(result)
            if (result) {
                successNotify();
            }
        })
    };
    useEffect(() => {
        CheckExistsPostReview(token).then(result => setReview(result[0]))
    }, [])


      const successNotify = () => {
          NotificationManager.success('Review Updated Successfully!', 'Review Updated!');
    }


    return (
        <div className="add-review">
            <Dashboard isAdmin={false} title={'Add Review'}>
                <Container>
                    <div className="review-form">
                        <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                                <input className="form-control" name="name" ref={register({ required: true })} placeholder="Your name" defaultValue={review && review.name}/>
      {errors.name && <span>This field is required</span>}
      
                    </div>
                    <div className="form-group">
                         <input className="form-control" name="company" ref={register({ required: true })} placeholder="Company’s name, Designation" defaultValue={review && review.company || ''}/>
      {errors.company && <span>This field is required</span>}
      
                    </div>
                    <div className="form-group">
                         <textarea  className="form-control" name="description" ref={register({ required: true })} placeholder="Description" rows="5" defaultValue={review && review.description || ''}/>
      {errors.description && <span>This field is required</span>}
      
                        </div>
                        
                        <Button variant="secondary" className="btn btn-secondary secondary-btn" type="submit">Submit</Button>
    </form>
                    </div>
                 </Container>
            </Dashboard>
            <NotificationContainer/>
        </div>
    );
};

export default AddReview;