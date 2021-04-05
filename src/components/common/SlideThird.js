import React from 'react';
import './SlideThird.css'

import Ice from "./Ice";

const SlideThird = props => {
    return (
        <div className='slideThird horizontalSlide'>
            <div className='slideThirdTitle'>Звенья патогенеза СД2</div>
            <div className='slideThirdBox'/>
            <Ice id='11' top='109' left='-5'/>
            <Ice id='12' top='212' left='936'/>
            <Ice id='13' top='588' left='153'/>
        </div>
    )
}

export default SlideThird;