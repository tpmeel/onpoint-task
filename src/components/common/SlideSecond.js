import React from 'react';
import './SlideSecond.css'

import Ice from "./Ice";

const SlideSecond = props => {

    return (
        <div className='slideSecond horizontalSlide'>
            <div className='slideSecondTitle'>Смертельный октет</div>
            <div className='slideSecondBox'/>
            <Ice classNumber='8' top='94' left='474'/>
            <Ice classNumber='9' top='239' left='46'/>
            <Ice classNumber='10' top='571' left='899'/>
        </div>
    )
}

export default SlideSecond;