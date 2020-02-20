import axios from 'axios';
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const api = axios.create({ baseURL: 'http://localhost:3000/api' });

export default class SlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: []
    };
  }

  componentDidMount() {
    api
      .get('/slides')
      .then(result => {
        this.setState({ slides: result.data.slides });
      })
      .catch(err => {
        console.log(err.response);
      });
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
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return slides;
  }

  render() {
    return (
      <Carousel>
        {this.getSlides()}
      </Carousel>
    );
  }
}
