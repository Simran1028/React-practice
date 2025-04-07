import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [name, setName] = useState('Simran');
    return (
        <div>
            <Child name={name}/>
        </div>
    )
}

export default Parent
