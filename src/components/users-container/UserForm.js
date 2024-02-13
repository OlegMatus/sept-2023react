import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";

const UserForm = ({setUsers}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: {
            isValid,
            errors
        }
    } = useForm({
        mode: "all"
    });

    const save = (user) => {
        userService.create(user).then(({data}) => setUsers(prev => [...prev, data]));
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name', {
                    required: true,
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'min 1 symbol max 21'
                    }
                })} />
                <input type="text" placeholder={'username'} {...register('username', {
                    required: true,
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'min 1 symbol max 21'
                    }
                })} />
                <button disabled={!isValid}>save</button>
                {errors.name && <div>{errors.name.message}</div>}
                {errors.username && <div>{errors.username.message}</div>}
            </form>
        </div>
    );
};

export {UserForm};