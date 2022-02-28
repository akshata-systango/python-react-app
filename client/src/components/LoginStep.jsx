import React, { useState } from 'react';
import Input from '../Shared/InputField/index';
import Button from '../Shared/Button/index';

const LoginStep = () => {
    const [loginInputs, setLoginInputs] = useState({
        userName: '',
        password: ''
    })
    const loginInputHandler = () => {
        console.log('loginInputs', loginInputs)
    }
    return (
        <div className='form' >
            <h1>Login</h1>
            <form>
                <label >UserName</label>
                <Input name={'UserName'} className={'uname'} type={'text'} placeholder={'Enter Username...'} onChange={(e) => setLoginInputs({...loginInputs, userName: e.target.value})}/>
                <label >Password</label>
                <Input name={'Password'} className={'Password'} type={'password'} placeholder={'Enter Password...'} onChange={(e) => setLoginInputs({...loginInputs, password: e.target.value})}/>
            </form>
            <Button className={'button'} type={'submit'} onclick={loginInputHandler}>Submit</Button>
        </div>
    );
};

export default LoginStep;<h1>Login</h1>