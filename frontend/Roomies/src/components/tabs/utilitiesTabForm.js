import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import { FormInput } from '../formFields';


const selector = formValueSelector('UtitlitiesTabForm');
const { electric, gas, water, roomates, internet } = selector('electricity', 'gas', 'water', 'roomateNumber', 'internettv');


class UtilitiesTabForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
            <form className='utilities-tab-form'>
                <Field
                    id='0'
                    className="utilities-tab-form__number" 
                    component={FormInput}
                    placeholder='Roomate Number' 
                    name='roomateNumber' 
                    type='input'
                    title='Enter How Many Roomates You Have'
                />
                <Field
                    id='1'
                    className="utilities-tab-form__Electricity" 
                    component={FormInput}
                    placeholder='Electricity' 
                    name='electricity' 
                    type='input'
                    title='Electricity Bill'
                />
                <Field
                    id='2'
                    className="utilities-tab-form__Gas" 
                    component={FormInput}
                    placeholder='Gas' 
                    name='gas' 
                    type='input'
                    title='Gas Bill'
                />
                <Field
                    id='3'
                    className="utilities-tab-form__Water" 
                    component={FormInput}
                    placeholder='Water' 
                    name='water' 
                    type='input'
                    title='Water Bill'
                />
                <Field
                    id='4'
                    className="utilities-tab-form__internet-tv" 
                    component={FormInput}
                    placeholder='Internet/TV' 
                    name='internettv' 
                    type='input'
                    title='Internet/TV Bill'
                />
                <Field
                    id='5'
                    className="utilities-tab-form__result" 
                    component={FormInput}
                    placeholder='Result' 
                    name='ressult' 
                    type='result'
                    title='result'
                />
            </form>
            <div>hello</div>
            </div>
        )
    }
}

UtilitiesTabForm = reduxForm({
    form: 'UtilitiesTabForm'
})(UtilitiesTabForm);



export default UtilitiesTabForm;