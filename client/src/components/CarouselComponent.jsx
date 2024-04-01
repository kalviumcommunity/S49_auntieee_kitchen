import React from 'react';
import { Carousel } from 'react-bootstrap';
import ExampleCarouselImage from './ExampleCarouselImage';
import './home.css'; // Import the CSS file

function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Carousel interval={2000}> {/* Set interval to 2000 milliseconds (2 seconds) */}
        <Carousel.Item>
          <ExampleCarouselImage
            imageUrl="https://images.unsplash.com/photo-1606914469633-bd39206ea739?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="First slide"
          />
          <Carousel.Caption>
            <h3>Spice up your life with our tantalizing flavors!</h3>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            imageUrl="https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="Second slide"
          />
          <Carousel.Caption>
            <h3>Savor the irresistible blend of spices in every bite with Pav Bhaji perfection!</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            imageUrl="https://plus.unsplash.com/premium_photo-1681406994495-a00f4a5497c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="Third slide"
          />
          <Carousel.Caption>
            <h3>Elevate your wellbeing, one wholesome bite at a time!</h3>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
