import React, { useRef, useEffect, createRef } from 'react';
import Form from './Form';
import FormItem from './FormItem';
import Input from './Input';

const Index = () => {
    const formRef = useRef(null);

    const submit = () => {
        formRef.current.submitForm((formValue) => {
            console.log(formValue)
        })
    }

    const reset = () => {
        formRef.current.resetForm();
    }

    return (
        <div  className='container'>
            <Form ref={formRef}  className='form'>
                <FormItem label='姓名' name='name'>
                    <label htmlFor="" name='label'>姓名</label>
                    <Input type="text" name='input' />
                </FormItem>
                <FormItem label='密码' name='password'>
                    <label htmlFor="" name='label'>密码</label>
                    <Input type="text" name='input' />
                </FormItem>
            </Form>
            <div className="btns">
                <button className='searchBtn' onClick={submit}>提交</button>
                <button className='cancelBtn' onClick={reset}>重置</button>
            </div>
        </div>
    )
}

export default Index

/**
 * index.js场景下使用Form ---> FormItem  ---> Input
 * 
 * 使用Form表单的情景
 * 1. 通过ref获取Form组件实例（class）
 * 2. 
 * 
 */
