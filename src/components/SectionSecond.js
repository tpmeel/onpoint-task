import React from 'react'
import './SectionSecond.css'
import Ice from "./common/Ice";

function SectionSecond(props) {

    let translate = (props.currentPosition > 1) ? 'translate3d(0,-70px, 1px)' :
        (props.currentPosition < 1) ? 'translate3d(0,70px, 1px)' : 'translate3d(0, 0px, 1px)';
    const transform = {
        transform: translate,
        transition: '0.5s'
    }

    return(
        <div className='sectionSecond'>
            <div className='sectionSecondTitle'>
                Основа терапии —<br/>
                патогенез СД2
            </div>
            <Ice style={transform} classNumber='1' top='38' left='868'/>
            <Ice style={transform} classNumber='2' top='160' left='80'/>
            <Ice style={transform} classNumber='3' top='440' left='230'/>
            <Ice style={transform} classNumber='4' top='586' left='710'/>
        </div>
    )
}

export default SectionSecond