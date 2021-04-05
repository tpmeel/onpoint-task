import React from 'react'
import './SectionFirst.css'
import AnimatedCircles from "./common/AnimatedCircles";
function SectionFirst() {
    return (
        <div className="sectionFirst">
            <p className="sectionFirstTitle">
                Всегда ли цели терапии СД2 на поверхности?
            </p>
            {/* делаю без адаптивности, потому что по тз разрешение будет только 1024x768 */}
            <AnimatedCircles circleSize='36' top='270' left='569' text='Цель по HbA1c' textLeft='60' textTop='7'/>
            <AnimatedCircles circleSize='19' top='430' left='276' text='Гипогликемия' textLeft='-44' textTop='-36'/>
            <AnimatedCircles circleSize='11' top='540' left='480' text='Осложнения СД' textLeft='-98' textTop='-36'/>
            <AnimatedCircles circleSize='11' top='519' left='822' text='СС риски' textLeft='-32' textTop='-36'/>
            <div className="nextPage">
                Листайте вниз
                <div className="nextPageArrowDown"/>
                <div className="nextPageGradient"/>
            </div>
        </div>
    )
}

export default SectionFirst

