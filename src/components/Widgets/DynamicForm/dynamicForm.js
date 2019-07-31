/**
 * DynamicForm.js : it return jsx as per props : login,signup,forgotePassword etc..,
 * 
 */
import React from 'react';
import { Grid, Divider, Button, Box } from '@material-ui/core';
import { Card, CardHeader } from '@material-ui/core';
import { Link } from 'react-router-dom';
/*------ CSS ----------*/
import './dynamicForm.css';


const DynamicForm = (props) => {


    const showLabel = (show,label) =>{
        return show ? 
        <label><b>{label}</b></label>
        : 
        null;
    }

    const changeHandler = (event,id) =>{
        
        const newState = props.formData;

        newState[id].value = event.target.value;

        props.change(newState);

    }

    const getButton = (values) =>{
        if(values.link === ""){
            return(
                <Button 
                {...values.config}  
                className={values.value}
                >
                    {values.value}
                </Button>
            )
        }else{
            return(
                <Link
                    to={values.link}
                >
                    <Button 
                            {...values.config}  
                            className={values.value}
                            >
                            {values.value}
                    </Button>
                </Link>
              

            )
        }
    }


    const renderTemplates = (data) => {
        let formTemplate = '';
        let values = data.settings;

        switch(values.element){
            case('input'):
                formTemplate = (
                    <div>
                        {showLabel(values.label,values.labelText)}
                        <br/>
                        <input
                        {...values.config}  
                        values={values.value} 
                        onChange={
                            (event) => changeHandler(event,data.id)
                        }             
                        />
                    </div>
                    )
            break;
            case('button'):
                formTemplate = (
                    <div>
                        {getButton(values)}                        
                    </div>    
                )
            break;
            case('link'):
            formTemplate = (
                <div>
                    <Link to= {values.link}>{ values.label }</Link>
                </div>    
            )
            break;
            case('label'):
            formTemplate = (
                <div>
                   <label> { values.label }</label> 
                </div>    
            )
            break;
            case('textarea'):
            formTemplate = (
                <div>
                    {showLabel(values.label,values.labelText)}
                    <br/>
                   <textarea
                        {...values.config}  
                        values={values.value}         
                        onChange={
                            (event) => changeHandler(event,data.id)
                        } 
                   />
                </div>    
            )
            break;
            case('select'):
            formTemplate = (
                <div>
                    {showLabel(values.label,values.labelText)}
                    <br/>
                   <select
                    values={values.value}  
                    name={values.config.name}
                    onChange={
                        (event) => changeHandler(event,data.id)
                    } 
                   >
                       {
                           values.config.options.map((item,i)=>(
                               <option key={i} value =  {item.val} >{ item.text }</option>
                           ))
                       }
                   </select>
                </div>    
            )
            break;
            default:
            formTemplate = null
        }

        return formTemplate; 

    }

    const renderFeilds = () => {

        const formArray = [];

        for( let elementName in props.formData){
            formArray.push({
                id:elementName,
                settings:props.formData[elementName]
            })
        }

       return formArray.map( (item,i) => {
            return (
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
       })

    }

    const submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};

        for(let key in props.formData){
            if(props.formData[key].value === ""){
                alert("please enter " + key );
                return 
            }
            dataToSubmit[key] = props.formData[key].value
        }
       
        props.change(dataToSubmit)
    
    }


    return(  
      
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="dynamicForm"
            >

                <Grid item
                    className="form"
                >
                    <Box
                    boxShadow={3}
                    >   
                        <Card> 
                            <CardHeader
                                title =   {props.for}
                                className = "cardHeader"
                            /> 
                            <Divider/>
                                <form  onSubmit={submitForm}>
                                 {renderFeilds()}
                                </form>
                        </Card> 

                    </Box>
                    
                </Grid>
                
            </Grid>    
        
       
    )

}


export default DynamicForm;