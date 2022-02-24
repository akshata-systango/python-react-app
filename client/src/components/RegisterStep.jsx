import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button/index';
import Input from '../Shared/InputField/index';

const RegisterStep = () => {
    return (
        <div className='form'>
            <h1>Register</h1>
            <form>
                <label for='uname'>UserName</label>
                <Input name={'UserName'} className={'uname'} type={'text'} placeholder={'Enter Username...'}/>
                <label for='password'>Password</label>
                <Input name={'Password'} className={'Password'} type={'text'} placeholder={'Enter Password...'}/>
                <label for='password1'>Renter-Password</label>
                <Input name={'Renter-Password'} className={'Renter-Password'} type={'text'} placeholder={'Re-enter Username...'}/>
            </form>
            <Button className={'button'} type={'submit'}>Submit</Button>
            <p>Already a user <Link to={'/login'}>Login</Link></p>
        </div>
    );
};

export default RegisterStep;