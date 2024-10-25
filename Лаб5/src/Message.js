import { useState } from 'react';

function Message(props) {
    const [message, setMessage] = useState('' );
    const [author, setAuthor] = useState( '');
    return (
        <div>
             <input onChange={(e)=>setMessage(e.target.value)}/>
             <input onChange={(e)=>setAuthor(e.target.value)}/>

             <p>Работа:{message}</p>
             <p>Автор:{author}</p>
        </div>
    )

}


export default Message;