// import '../Css/Static.css';
import './Content/Content.js';

import { useState } from 'react';
import Content from './Content/Content.js';

function BackGround() {
    const [show, setShow] = useState(true);

    function handleClick() {
        setShow(!show);
    }

    return (
        <div style={{padding: 18}}>
            <button onClick={handleClick}>Click Me!</button>
            
            {show || <Content />}
        </div>
    );
}

export default BackGround;