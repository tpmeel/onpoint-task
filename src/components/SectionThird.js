import React, {Component} from 'react'
import './SectionThird.css'
import SlideFirst from "./common/SlideFirst";
import SlideSecond from "./common/SlideSecond";
import SlideThird from "./common/SlideThird";

import HorizontalScroll from "./common/HorizontalScroll";
import Scroller from "./common/Scroller";

class SectionThird extends Component {
    state = {
        activeSlide: 0,
        prevSlide: 0
    }

    componentDidMount() {
        this.scroller = HorizontalScroll();
       // this.scroller.moveLeft();
    }

    onSlideChange(active) {
        if (Number(active) === this.state.activeSlide) return
        if(this.state.activeSlide < active) {
            this.scroller.moveRight(this.state.activeSlide, active);
        } else {
            this.scroller.moveLeft(this.state.activeSlide, active);
        }
        this.setState({
            activeSlide: active
        })
    }

    render() {
        return (
            <div className='sectionThird'>
                <div className='slidesWrapper'>
                    <SlideFirst/>
                    <SlideSecond/>
                    <SlideThird/>
                </div>
                <Scroller changeSlide={this.onSlideChange.bind(this)}/>
            </div>
        )
    }
}

export default SectionThird;