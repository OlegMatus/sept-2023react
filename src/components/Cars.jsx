import React, {useEffect} from 'react';

import {Car} from "./Car";
import {carsService} from "../services";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../store";

const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        carsService.getAll().then(({data}) => dispatch(carsActions.setResponse(data)))
    }, [dispatch]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};