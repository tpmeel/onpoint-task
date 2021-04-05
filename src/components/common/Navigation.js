import React from 'react'
import './Navigation.css'

const Navigation = props => {
    const currentPosition = props.currentPosition || 0
    return (
        <div className='navbar'>
            <button className="navbar-item" id='0' onClick={props.changeSlide} style={{background: (Number(currentPosition) === 0) ? '#f78b1f': '#fff'}}/>
            <button className="navbar-item" id='1' onClick={props.changeSlide} style={{background: (Number(currentPosition) === 1) ? '#f78b1f': '#fff'}}/>
            <button className="navbar-item" id='2' onClick={props.changeSlide} style={{background: (Number(currentPosition) === 2) ? '#f78b1f': '#fff'}}/>
        </div>
    )
}

export default Navigation