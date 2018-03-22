import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Modal extends Component {
    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={false}
                open={true}
                onRequestClose={this.props.onClose}
            >
                The actions in this window were passed in as an array of React objects.
            </Dialog>
        );
    }
}