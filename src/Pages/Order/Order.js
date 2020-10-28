import React, { useContext } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import './order.scss'
import { HomeContext, UserContext } from '../../App';
import { PostOrder } from '../../Store/Store';
import {NotificationContainer, NotificationManager} from 'react-notifications';



// firebase config files
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';  
import CustomSelect from '../../Components/CustomSelect/CustomSelect';


const Order = () => {
    const token = sessionStorage.getItem('token');

    var storageRef = firebase.app().storage("gs://creative-agency-frontend.appspot.com").ref("order_details/");
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(HomeContext);

    
    
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { 


        data.status = 'Pending';
        data.service = selectedService.value;
        data.category = selectedService.label;



        const image = data.file[0];

        var fileRef = storageRef.child(image.name);
        
        const uploadTask = fileRef.put(image);

        uploadTask.on(
            "state_changed",
            snapshot => {
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storageRef
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            // this.setState({ url });
              data.file = url;
   

              PostOrder(data, token).then(result => {
     
                  if (result) {
   
                      successNotify();
                  } else {
                    sessionStorage.removeItem('token');
                      sessionStorage.removeItem('user');
                      NotificationManager.error('Not added successfully!', 'Details!', 5000, () => {
                            alert('Please login again!');
                        });

                  }
              })
          });
      }
    );
    }
    const successNotify = () => {
          NotificationManager.success('Order placed successfully!', 'New order!');
    }
    
    

    return (
        <div>
            
            <Dashboard isAdmin={false} title={'Order'}>
                <div className="order-info-form">
                             <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group">
                            <input className="form-control" name="name" ref={register({ required: true })} placeholder="Your name / Company's name" value={loggedInUser.name}/>
                                     {errors.name && <span>This field is required</span>}
      
                                </div>
                                <div className="form-group">
                            <input className="form-control" type="email" name="email" ref={register({ required: true })} placeholder="Your email address" value={loggedInUser.email}/>
                                    {errors.email && <span>This field is required</span>}
      
                                </div>
                                <div className="form-group">
                            {/* <input className="form-control" name="category" ref={register({ required: true })} placeholder="Graphic Design" value={selectedService.title}/>
                                    {errors.category && <span>This field is required</span>} */}
                            

                            <CustomSelect></CustomSelect>
      
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="projectDetails" ref={register({ required: true })} placeholder="Project Details" rows="5"/>
                                    {errors.projectDetails && <span>This field is required</span>}
      
                                </div>
                                <div className="form-group d-flex">
                                    <div className="form-group">
                                        <input className="form-control" type="number" name="price" ref={register({ required: true })} placeholder="price"/>
                                    {errors.price && <span>This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="file" name="file" ref={register({ required: true })} placeholder="Upload project file"/>
                                    {errors.file && <span>This field is required</span>}
                                    </div>
      
                                </div>
                                <Button variant="secondary" className="btn btn-secondary secondary-btn" type="submit">Send</Button>
                              
                                </form>

                </div>
                
            </Dashboard>
            <NotificationContainer/>
        </div>
    );
};

export default Order;