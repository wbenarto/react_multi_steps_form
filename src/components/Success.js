// Class based component "RCE Tab"
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form send data to API
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {       
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Success'/>
                    <h1>Thank you!</h1>
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success;
