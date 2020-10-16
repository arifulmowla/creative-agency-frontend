import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import './make-admin.scss'
import { AddAdmin } from '../../Store/Store';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    
    const token = sessionStorage.getItem('token');
    const onSubmit = data => {
        console.log(data)
        AddAdmin(data, token).then(result => console.log(result))
    };
    return (
        <div className="make-admin">
            <Dashboard isAdmin={true} title={'Add an Admin'}>
                <div className="make-admin-box">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input name="email" className="form-control" type="email" ref={register({ required: true })} placeholder="jon@mail.com"/>

                                    {errors.email && <span>This field is required</span>}
                                    
                                    <Button variant="primary" className="btn btn-primary primary-btn my-3" type="submit">Submit</Button>
                                </div>
                                </form>

                        </div>
                    </div>
                </div>
            </Dashboard>
        </div>
    );
};

export default MakeAdmin;