
import { Dropdown } from 'react-bootstrap';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './dashboard.scss'



// firebase authentication
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const Dashboard = (props) => {
    const {isAdmin, title} = props;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    
  const handleLogout = () => {
      firebase.auth().signOut().then(function() {
        console.log("signout")
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
setLoggedInUser({isAuthenticated: false})
      }).catch(function(error) {
        // An error happened.
      });
  }
    return (
        <div className="dashboard order">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar isAdmin = {isAdmin}></Sidebar>
                </div>


                <div className="col-md-9">
                    <div className="dashboard-body">
                        <div className="dash-head d-flex justify-content-between">
                            <h2>{title}</h2>
                            <Dropdown className="mr-5">
                            <Dropdown.Toggle  variant="info" id="dropdown-basic">
                                {loggedInUser.name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                             
                            </Dropdown.Menu>
                            </Dropdown>
                            
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;