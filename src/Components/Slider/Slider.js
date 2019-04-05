import React, { Component } from 'react';
import './Slider.css';
import  First from '../img/first.jpg';
import  Second from '../img/second.jpg';
import  Third from '../img/third.jpg';
import  Fourth from '../img/fourth.jpg';
import  Fifth from '../img/fifth.jpg';
import  Sixth from '../img/sixth.jpg';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src:  First,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: Second,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: Third,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: Fourth,
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: Fifth,
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
  {
    src: Sixth,
    altText: 'Slide 6',
    caption: 'Slide 6'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Example;