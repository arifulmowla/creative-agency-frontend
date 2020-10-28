import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select'
import { HomeContext } from '../../App';
import { GetAllServices } from '../../Store/Store';

const CustomSelect = () => {
    const [data, setData] = useState([]);
    const [selectedService, setSelectedService] = useContext(HomeContext);
    
  

    const handleSelected = (e) => {
        setSelectedService(e)
    }
    

    useEffect(() => {
        GetAllServices().then(result => {

             if (result.length) {
                 
                 let data = []
            result.map(item => {
                data.push({ value: item, label: item.title })
            })
                 setData(data);
        }
        });

    }, []);
    return (
        <div>
            <Select options={data} defaultValue={selectedService} onChange={handleSelected}/>

        </div>
    );
};

export default CustomSelect;