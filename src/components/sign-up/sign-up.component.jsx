import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    newUser = async (newUser,name) => {
        await newUser.user.updateProfile({
            displayName:name
        })
        return newUser;
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email, password, confirmPassword} = this.state;
        
        if(password !== confirmPassword){
            alert("Passwords dont't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            
            // const {currUser} = await this.newUser(user,displayName);
            // console.log(currUser);

            // await user.updateProfile({
            //     displayName:displayName,
            // });
           
            // await createUserProfileDocument(currUser);
            user.updateProfile({
                displayName:displayName
              }).then(function() {
                createUserProfileDocument(user)
              }).catch(function(error) {
                // An error happened.
              });
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''

            });


        } catch(Error){
            console.log(Error.message);
        }
    
    }
    
    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name] : value})
    }



    render(){
        const {displayName,email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'> SIGN UP</CustomButton>

                </form>
            </div>
        );
    };
}

export default SignUp;