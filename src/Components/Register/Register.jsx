import React from 'react';

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const pass= e.target.password.value;
        console.log(email,pass);
        console.log('form submitting');


    }
    return (
        <div className='border'>
            <div className="mx-auto md:w-1/2">
            <h3 className="text-3xl mb-8">Please Register</h3>
            <form onSubmit={handleRegister}>
                <input className='mb-4 w-3/4 text-black border py-2 px-4' type="email" name="email" id="" placeholder='please insert Email' />
                <br />
                <input className='mb-4 w-3/4 text-black border py-2 px-4' type="password" name="password" id="" placeholder='password'/>
                <br />
                <input className='mb-4 w-3/4 btn btn-secondary' type="submit" value="register" />
            </form>
            </div>
            {/* form validation not done yet
             */}
        </div>
    );
};

export default Register;