'use client'
import React, { useEffect, useState, useRef } from 'react';
import './style.css';

const Carousel = () => {
  const [items, setItems] = useState([
    {
      img: './image/img1.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    },
    {
      img: './image/img2.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    },
    {
      img: './image/img3.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    },
    {
      img: './image/img4.jpg',
      author: 'LUNDEV',
      title: 'DESIGN SLIDER',
      topic: 'ANIMAL',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit...',
    },
  ]);

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next'); // Track slide direction

  // Update the current slide index and set the direction
  const nextSlide = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Clear direction state after transition to reset for next click
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDirection('');
    }, 600); // Match the duration of the CSS transition

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // Auto slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mainSlide flex justify-center mt-[100px]">
      <div className={`carousel ${direction}`} ref={sliderRef}>
        <div className="list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === currentIndex ? 'active' : ''}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <img src={item.img} alt={item.title} />
              <div className="content">
                <div className="author">{item.author}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnail */}
        <div className="thumbnail">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="arrows">
          <button id="prev" onClick={prevSlide}>
            &lt;
          </button>
          <button id="next" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
