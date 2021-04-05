import React from 'react'
import './Ice.css'

function Ice(props) {
    const transform = (props.style) ? props.style.transform : '';
    const transition = (props.style) ? props.style.transition : '';
    const styleIce = {
        top: `${props.top}px`,
        left: `${props.left}px`,
        transform: `${transform}`,
        transition: `${transition}`
    }
    return(
        <div className={`iceBrick ice${props.classNumber}`} style={styleIce}/>
    )
}

export default Ice