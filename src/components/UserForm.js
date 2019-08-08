// Class based components
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to next step
    nextStep = () => {

        // Take step out of the state by destructuring and putting in variable
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to previous step
    prevStep = () => {

        // Take step out of the state by destructuring and putting in variable
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle field change 
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }


    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        // Add props
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        // Add props
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        // Add props
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return <Success />


        }


        return (
            <div>

            </div>
        )
    }
}

export default UserForm
