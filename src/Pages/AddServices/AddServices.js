import React, { useState } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import './addservices.scss'


// firebase config files
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';  
import { PostService } from '../../Store/Store';
const AddServices = () => {
    const token = sessionStorage.getItem('token');
    const [imgUrl, setImgUrl] = useState('');
    var storageRef = firebase.app().storage("gs://creative-agency-frontend.appspot.com").ref("service_icons/");


     const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        const image = data.icon[0];
        console.log(image.name)


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
              setImgUrl(url);

              console.log(imgUrl);

              data.icon = url;
              console.log(data)

              PostService(data, token).then(result => {
                  if (result.status == 200) {
                      console.log("success")
                  } else {
                      sessionStorage.removeItem('token');
                sessionStorage.removeItem('user');

                  }
              })
          });
      }
    );





    };
    return (
        <div className="add-services">
            <Dashboard isAdmin={true} title={'Add Services'}>
                <Container className="m-3">
                     <div className="add-service-form p-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                   
<div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="title">Service Title</label>
                                <input name="title" className="form-control" ref={register({ required: true })} placeholder="Enter title"/>
                                  {errors.title && <span>This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea name="description" className="form-control" ref={register({ required: true })} rows="5" placeholder="Enter Description"/>
                                  {errors.description && <span>This field is required</span>}
                            </div>
                        </div>
                        <div className="col-md-6">
<div className="form-group">
                                <label htmlFor="title">Icon</label>
                                <input name="icon" type="file" className="form-control" ref={register({ required: true })} placeholder="Upload Image"/>
                                  {errors.icon && <span>This field is required</span>}
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary primary-btn">Submit</button>
                    </form>
                    </div>
                </Container>
             </Dashboard>
        </div>
    );
};

export default AddServices;