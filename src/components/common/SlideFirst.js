import React from 'react';
import './SlideFirst.css'

import Ice from "./Ice";

const SlideFirst = props => {
    return (
        <div className='slideFirst horizontalSlide'>
            <div className='slideFirstTitle'>Звенья патогенеза СД2</div>
            <div className='slideFirstBox'/>
            <Ice classNumber='5' top='112' left='911'/>
            <Ice classNumber='6' top='227' left='665'/>
            <Ice classNumber='7' top='554' left='21'/>
        </div>
    )
}

export default SlideFirst;