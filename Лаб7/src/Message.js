import { useState } from 'react';

function Message(props) {
    const [text, setText] = useState('' );
    return (
        <div>
             <input onChange={(e)=>setText(e.target.value)}/>
             <p>Текст: {text}</p>
        </div>
    )

}


export default Message;