import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null
};
const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setResponse: (state, action) => {
            state.cars = action.payload
        },
        setTrigger: state => {
            state.trigger = !state.trigger
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    }
});

const {reducer: carsReducer, actions} = carsSlice;

const carsActions = {
    ...actions
}

export {
    carsReducer,
    carsActions
}