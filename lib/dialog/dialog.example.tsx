import React, { useState } from 'react'
import Dialog from './dialog'
export default function() {
    const [x, setx] = useState(false)
    return (
        <div>
            <button onClick={()=> setx(!x)}>click</button>
            <Dialog visible={x}> </Dialog>
        </div>
    )
}