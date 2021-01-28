import React from 'react';
import PropTypes from 'prop-types';

class MessageView extends React.Component {

    render() {
        const message = this.props.message;
        const dummy = 
            <div className="message">
                <div className="field">
                    <span className="label">From: </span>
                    <span className="label">{message.from}: </span>
                </div>    
                <div className="field">
                    <span className="label">Status: </span>
                    <span className="label">{message.status} </span>
                </div>    
                <div className="field content">
                    <span className="label">Message: </span>
                    <span className="label">{message.content} </span>
                </div>    
            </div>;
        return(dummy)
    }
}

MessageView.propTypes = {
    message: PropTypes.object.isRequired,
}

export default MessageView;

