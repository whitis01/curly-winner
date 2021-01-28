import React, { useState } from 'react';
import MessageView from './message-view';

export default function MessageList() {

    const dogValues = 
    [
        {
            id: 5,
            from: 'Sampson',
            content: 'Feed Me buwuwuwu!',
            status: 'Hungry',
        },
        {
            id: 8,
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
    ];
    
    const [ messages ] = useState(dogValues);

    const messageViews = messages.map(
        message => <MessageView key={ message.id } message={ message } /> // message is the parameter to the MessageView
    );

    const button = <button onClick={ handleEvent }>Test Me I Dare Ya</button>

    const viewList = 
        <div className="doggies">
            <h1> List of Messages </h1>
            { messageViews }
            { button }
        </div>

    return(viewList);
}

function handleEvent(e) {
    alert('Clicker!');
    console.log(e);
}
