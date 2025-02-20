import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  display: 'block',
  backgroundSize: '550px 400px',
  height: '400px',
  backgroundRepeat: "no-repeat",
  borderRadius: "40px",
}
const slideImages = [
  {
    url: 'https://www.gstatic.com/lamda/images/landing/a/i18n/en/d2_63e667d15464db3e96f2e.jpg',
  },
  {
    url: 'https://www.gstatic.com/lamda/images/landing/a/i18n/en/m4_8k4pzPQk7S3pZbpBoOe5t.jpg',
  },
  {
    url: 'https://www.gstatic.com/lamda/images/landing/a/i18n/en/d3_e479902e2fe272b199c8a.jpg',
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Fade>
      </div>
    )
}

export default Slideshow