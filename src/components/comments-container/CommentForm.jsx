import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/comment.service";

const CommentForm = ({setComments, trigger, setTrigger, commentForUpdate, setCommentForUpdate}) => {
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
        mode: "all"
    });

    useEffect(() => {
        if (commentForUpdate) {
            setValue('name', commentForUpdate.name)
            setValue('email', commentForUpdate.email)
            setValue('body', commentForUpdate.body)
        }
    }, [commentForUpdate, setValue]);

    const save = async (comment) => {
        // commentService.create(comment).then(({data}) => setComments(prev => [...prev, data]));
        await commentService.create(comment);
        setTrigger(prev => !prev)
        reset()
    }

    const update = async (comment) => {
        await commentService.updateById(commentForUpdate.id, comment);
        setCommentForUpdate(null);
        setTrigger();
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(commentForUpdate ? update : save)}>
                <input type="text" placeholder={'name'} {...register('name', {
                    pattern: {
                        value: /^[a-zA-Za_ ]{1,1000}$/,
                        message: 'name is Not Valid'
                    }
                })}/>
                <input type="text" placeholder={'email'} {...register('email', {
                    // valueAsNumber: true,
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,200}$/,
                        message: 'email is Not Valid'
                    }
                })}/>
                <input type="text" placeholder={'body'} {...register('body', {
                    // valueAsNumber: true,
                    pattern: {
                        value: /^[a-zA-Za_ .*]{1,1000}$/,
                        message: 'body is Not Valid'
                    }
                })}/>
                <button disabled={!isValid}>{commentForUpdate ? 'update' : 'save'}</button>
                {errors.name && <div>{errors.name.message}</div>}
                {errors.email && <div>{errors.email.message}</div>}
                {errors.body && <div>{errors.body.message}</div>}
            </form>
        </div>
    );
};

export {CommentForm};