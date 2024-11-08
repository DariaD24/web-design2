import { useState } from 'react';

function Forma(props) {
    const [message, setMessage] = useState('' );
    const [author, setAuthor] = useState( '');
    return (
        <div>
             <input onChange={(e)=>setMessage(e.target.value)}/>
             <input onChange={(e)=>setAuthor(e.target.value)}/>

             <p>Блок1: {message}</p>
             <p>Блок2: {author}</p>
        </div>
    )

}


export default Forma;