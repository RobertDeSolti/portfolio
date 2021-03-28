<form className="signin-popup__inputs">
<Input
	errors={['Login already exist']}
	placeholder='Create login'
	name='loginin'
	type='text'
	primary
/>
<Input
	errors={['Seems like email been already used for another account']}
	placeholder='Enter email'
	name='email'
	type='text'
	primary
/>
<Input
	errors={['Invalid Input']}
	placeholder='Create password'
	name='password'
	type='password'
	primary
/>
<Input
	errors={['Invalid Input']}
	placeholder='Repeat password'
	name='repeated password'
	type='password'
	primary
/>
<Input
	name='submitbtnn'
	type='submit'
	value='Sign In'
	primary
/>
</form>

<form className="signup-popup__inputs">
<Input
	errors={['Invalid login','Invalid email']}
	placeholder='Enter login or email'
	name='loginup'
	type='text'
	primary
/>
<Input
	errors={['Invalid password']}
	placeholder='Create password'
	name='passwordup'
	type='password'
	primary
/>
<Input
	name='submitbtnn'
	type='submit'
	value='Sign Up'
	primary
/>
</form>