import React, {useEffect, useState} from 'react';
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";
import {carService} from "../../services/car.service";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);


    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarsContainer};