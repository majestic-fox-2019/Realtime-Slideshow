import axios from 'axios';
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import SocketIOClient from 'socket.io-client';

const endpoint = 'https://sunday-slides.herokuapp.com';
const api = axios.create({
  baseURL: 'https://sunday-slides.herokuapp.com/api'
});
const socket = SocketIOClient(endpoint);


export default class SlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      slideIndex: 0,
      response: false
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    socket.on('setSlideIndex', slideIndex => this.setIndex(slideIndex));
    api
      .get('/slides')
      .then(result => {
        this.setState({ slides: result.data.slides });
      })
      .catch(err => {
        console.log(err.response);
      });
  } 

  setIndex(selectedIndex) {
    console.log(selectedIndex);
    return this.setState({ slideIndex: selectedIndex });
  }

  getSlides() {
    const slides = [];
    this.state.slides.map((slide, idx) => {
      return slides.push(
        <Carousel.Item key={idx}>
          <img
            className='d-block w-100'
            src={slide.image_url}
            alt={slide.name}
          />
          <Carousel.Caption>
            <h3>{slide.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return slides;
  }

  handleSelect(selectedIndex, e) {
    socket.emit('setSlideIndex', selectedIndex);
    this.setIndex(selectedIndex);
  }

  render() {
    return (
      <Carousel
        activeIndex={this.state.slideIndex}
        onSelect={this.handleSelect}
      >
        {this.getSlides()}
      </Carousel>
    );
  }
}
