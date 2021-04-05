import React, {useState} from 'react'
import './App.css';
import SectionFirst from "./components/SectionFirst";
import Navigation from "./components/common/Navigation";
import SectionSecond from "./components/SectionSecond";
import SectionThird from "./components/SectionThird";
function App() {
    let startTouchY = 0;
    let endTouchY = 0;
    const [state, setState] = useState({
        currentPosition: 0,
        translateLayer: false,
    })
    function touchStart(event) {
        startTouchY = event.touches[0].clientY;
        setState({
            ...state,
            translateLayer: false
        })
    }

    function touchEnd(event) {
        endTouchY = event.changedTouches[0].clientY;
        if (startTouchY - endTouchY > 50 && state.currentPosition <= 1) {
            setState({
                ...state,
                currentPosition: +this.currentPosition + 1,
                translateLayer: true
            })
        }
        if (startTouchY - endTouchY < -50 && state.currentPosition >= 1) {
            setState({
                ...state,
                currentPosition: +this.currentPosition - 1,
                translateLayer: true
            })
        }
    }

    function onChangeSlide(event) {
        setState({
            ...state,
            currentPosition: event.target.id,
            translateLayer: true
        })
    }

    return (
        <div className="app" onTouchStart={touchStart} onTouchEnd={touchEnd}>
            <Navigation changeSlide={onChangeSlide} currentPosition={state.currentPosition}/>
            <div className="appSlider" style={{transform: `translateY( ${state.currentPosition * -100}%)`}}>
                <SectionFirst translateLayer={state.translateLayer} current={state.currentPosition}/>
                <SectionSecond currentPosition={state.currentPosition}/>
                <SectionThird/>
            </div>
        </div>
    );
}

export default App;
