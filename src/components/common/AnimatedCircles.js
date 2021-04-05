import React from 'react'
import './AnimatedCircles.css'

const circlesArray = [
    {delay: 0},
    {delay: 1000},
    {delay: 2000},
    {delay: 3000},
]

function AnimatedCircles(props) {
    return (
        <div className='animatedCircles' style={{top:`${props.top}px`, left:`${props.left}px`}}>
            {
                circlesArray.map((circle, index) => {
                    return <div key={index}>
                        <div className="circle" style={{animationDelay: `${circle.delay}ms`, width: `${props.circleSize}px`, height:`${props.circleSize}px`}}/>
                        <div className="circleBorder" style={{animationDelay: `${circle.delay}ms`, width:`${props.circleSize}px`, height:`${props.circleSize}px`}}/>
                    </div>
                })
            }
            <div className="animatedCirclesText" style={{ top:`${props.textTop}px`, left:`${props.textLeft}px`}}>
                {props.text}
            </div>
        </div>
    )
}

export default AnimatedCircles