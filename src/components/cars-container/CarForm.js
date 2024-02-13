import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const CarForm = ({setCars, setTrigger, carForUpdate, setCarForUpdate}) => {

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            isValid,
            errors
        },
        setValue
    } = useForm({
        mode: 'all'
    });

    useEffect(() => {
if (carForUpdate){
    setValue('brand',carForUpdate.brand, {shouldValidate: true});
    setValue('price',carForUpdate.price, {shouldValidate: true});
    setValue('year',carForUpdate.year, {shouldValidate: true});
}
    }, [carForUpdate, setValue]);

    const save = async (car) => {
       await carService.create(car);
        setTrigger(prev => !prev)
        reset()
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        setTrigger();
        setCarForUpdate(null);
        reset()
    }



    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'min-1 max-21'
                    },
                    required: true
                })}/>
                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    min: {
                        value: 0,
                        message: 'min-0'
                    },
                    max: {
                        value: 1000000,
                        message: 'max-1000000'
                    },
                    required: true
                })}/>
                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    min: {
                        value: 1990,
                        message: 'min-1990'
                    },
                    max: {
                        value: new Date().getFullYear(),
                        message: 'max getFullYear'
                    },
                    required: true
                })}/>
                <button disabled={!isValid}>{carForUpdate? 'update' : 'save'}</button>
            </form>
        </div>
    );
};

export {CarForm};