import React from 'react';
import background from '../../img/Login-bg.png';
const Login = () => {
	return (
		<div 
			style={{
				backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
			}}
		>
			<div className='container'></div>
			<div className='form-container'>
				<h1>Login</h1>
				<form>
					<div className='form-group'>
						<label htmlFor='username'>Username</label>
						<input type='text' name='username'></input>
					</div>
					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input type='email' name='email'></input>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input type='text' name='password'></input>
					</div>
					<div>
						<input
							type='submit'
							value='Login'
							className='btn btn-dark btn-inline'
						></input>
						<input
							type='submit'
							value='Forgot Password'
							className='btn btn-dark btn-inline'
						></input>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
