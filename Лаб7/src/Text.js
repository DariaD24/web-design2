import { useState } from 'react';

function Text(props) {
    const [text, setText] = useState('' );
    return (
        <div>
             <input onChange={(e)=>setText(e.target.value)}/>
             <p>Имя:{text}</p>
             <button>{props.buttontext}</button>
        </div>
    )

}


export default Text;