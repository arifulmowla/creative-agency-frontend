import React from 'react';
import logo from '../../images/logos/logo.png';
import './sidebar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faShoppingBag, faComment, faPeopleArrows, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = ({isAdmin}) => {
    return (
        <div className="sidebar">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
           
                {
                    !isAdmin && 
                    <ul>
                        <li><Link to="/order"><FontAwesomeIcon icon={faCartArrowDown} /> Order</Link></li>
                <li><Link to="/services-list"><FontAwesomeIcon icon={faShoppingBag} /> Service list</Link></li>
                <li><Link to="/add-review"><FontAwesomeIcon icon={faComment} /> Review</Link></li>
                    </ul>
            }
            
            {
                    isAdmin && 
                    <ul>
                        <li><Link to="/dashboard/services-list"><FontAwesomeIcon icon={faShoppingBag} /> Services List</Link></li>
                <li><Link to="/dashboard/add-services"><FontAwesomeIcon icon={faPlus} /> Add Service</Link></li>
                <li><Link to="/dashboard/make-admin"><FontAwesomeIcon icon={faPeopleArrows} /> Make Admin</Link></li>
                    </ul>
                }
          
        </div>
    );
};

export default Sidebar;