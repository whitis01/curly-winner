import React, { Component } from 'react';
import MessageView from './message-view.js';

class MessageList extends Component {
    state = {
        messages: [
            {
                id: 5,
                from: 'Sampson',
                content: 'Feed Me buwuwuwu!',
                status: 'Hungry',
            },
            {
                id: 16,
                from: 'Bruin',
                content: 'Ball!!',
                status: 'Stupid',
            },
            {
                id: 0,
                from: 'Boci',
                content: 'I hate Sampson',
                status: 'Evil',
            },
        ],
    }

    render() {
        const list = this.state.messages.map(
            message => <MessageView key={ message.id } message={ message } /> // message is the parameter to the MessageView
        )

        const viewList = 
            <div className="doggies">
                <h1> List of Messages </h1>
                {list}
            </div>

        return(viewList)
    }
}

export default MessageList;    


