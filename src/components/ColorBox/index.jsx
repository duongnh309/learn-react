import React, { useState } from 'react';

ColorBox.propTypes = {

};

function ColorBox(props) {
    const [color, setColor] = useState('red');
    return (
        <div>
            
            <p style={{color}}>{color} </p>
            <button onClick={() => setColor('black')}>Change to black</button>
            <button onClick={() => setColor('red')}>Change to red</button>

        </div>
    );
}

export default ColorBox;