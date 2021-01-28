import React from 'react';
import PropTypes from 'prop-types';

const MessageView = ({ message }) => {
    const { from, status, content } = message;
    const dummy = 
        <div className="message">
            <div className="field">
                <span className="label">From: </span>
                <span className="label">{from}: </span>
            </div>    
            <div className="field">
                <span className="label">Status: </span>
                <span className="label">{status} </span>
            </div>    
            <div className="field content">
                <span className="label">Message: </span>
                <span className="label">{content} </span>
            </div>    
        </div>;
    return(dummy)
}

MessageView.propTypes = {
    message: PropTypes.object.isRequired,
}

export default MessageView;

