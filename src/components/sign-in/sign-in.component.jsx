import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import {googleSignInStart} from '../../redux/user/user.actions';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})

        } catch(err){
            console.log(err.message);
        }        
    }

    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name] : value})
    }

    render(){
        const {googleSignInStart} = this.props;
        return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit = {this.handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label = "email"
                    required
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password}
                    handleChange={this.handleChange} 
                    label = "password"
                    required
                />
                <div className='button'>
                    <CustomButton type='submit' children='Submit'>Sign In</CustomButton>
                    <CustomButton 
                        type = 'button'
                        onClick={googleSignInStart} 
                        isGoogleSignIn
                    >
                        Sign In With Google                                        
                    </CustomButton>              
                </div>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: ()=>dispatch(googleSignInStart())
})

export default connect(
    null,
    mapDispatchToProps
)(SignIn);