import React from 'react';

const Register = () => {
    return (
        <div className='border'>
            <h3 className="text-3xl">Please Register</h3>
            <form >
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;