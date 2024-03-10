import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "./Car";
import {carsService} from "../services";
import {carsActions} from "../store";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        // const obj = carsActions.setCarForUpdate({name: 'Kris', age: '28'})
        // console.log(obj);
        carsService.getAll().then(({data}) => {
            dispatch(carsActions.setResponse(data))
        });

    }, [trigger, dispatch]);

    return (
        <div>
            {cars && cars.map((car) => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};