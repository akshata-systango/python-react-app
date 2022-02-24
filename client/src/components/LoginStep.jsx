import React from 'react';
import Input from '../Shared/InputField/index';
import Button from '../Shared/Button/index';

const LoginStep = () => {
    return (
        <div className='form'>
            <h1>Login</h1>
            <form>
            <label for='uname'>UserName</label>
                <Input name={'UserName'} className={'uname'} type={'text'} placeholder={'Enter Username...'}/>
                <label for='password'>Password</label>
                <Input name={'Password'} className={'Password'} type={'text'} placeholder={'Enter Password...'}/>
            </form>
            <Button className={'button'} type={'submit'}>Submit</Button>
        </div>
    );
};

export default LoginStep;<h1>Login</h1>