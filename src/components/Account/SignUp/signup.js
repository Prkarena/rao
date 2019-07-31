/**
 * signup.js : user account ? login or signup or forgotpassword 
 * 
 */
import React , { Component } from 'react';

import DynamicForm from '../../Widgets/DynamicForm/dynamicForm';
/*-------- CSS -----------*/
import './signup.css';

class SignUp extends Component  {

    state = {
        for:"Sign Up",
        formData:{
            email:{
                element:'input',
                value:'',
                label:true,
                labelText:'Email',
                config:{
                    name:'email_input',
                    type:'text',
                    placeholder:'Enter Your Email'
                }
            },password:{
                element:'input',
                value:'',
                label:true,
                labelText:'Password',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter Your Password'
                }
            },
            confirem_password:{
                element:'input',
                value:'',
                label:true,
                labelText:'Confirm Password',
                config:{
                    name:'password_input',
                    type:'password',
                    placeholder:'Enter Confirm Password'
                }
            },signupButton:{
                element:'button',
                value:'Sign-up',
                link:'',
                config:{
                    variant:'contained',
                    color:'primary',
                    size:'small',
                    type:'submit',
                }
            },loginButton:{
                element:'button',
                value:'Login',
                link:'/login',
                config:{
                    variant:'contained',
                    color:'primary',
                    size:'small',
                    type:'button',
                }
            },
        },
    }

    updateForm = (newState) => {

       this.setState({
           formData : newState
       })   

    }


    render(){
        return(
            
            <DynamicForm 
                for = {this.state.for}
                formData = { this.state.formData }
                change = {this.updateForm}
            /> 
         
      )
    }
   
}


export default SignUp;