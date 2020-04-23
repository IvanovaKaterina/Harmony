import React from "react";
import { Carousel } from "react-responsive-carousel";
import './CatCarousel.css';

class CatCarousel extends React.Component {
  render() {
    return (
      <Carousel infiniteLoop autoPlay showStatus={false} showIndicators={false} showThumbs={false} width='800px'>
        <div className="carouselBlock">
          <img alt="" src='../../../cat.jpg' />
          <p className="carouselText carouselText1">
            <span className="carouselText-title">
              СУПЕР ПРЕДЛОЖЕНИЕ ТОЛЬКО ДЛЯ МИЛЫХ "КОТИКОВ"
            </span>
            <span className="carouselText-body">
              Женская стрижка от 1000р + маникюр в ПОДАРОК!
            </span>
          </p>
        </div>
        <div className="carouselBlock">
          <img alt="" src='../../../catLogo.jpg' />
          <p className="carouselText carouselText2">
            <span className="carouselText-title">
              АКЦИЯ "НЕ ВЫХОДЯ ИЗ ДОМА"
            </span>
            <span className="carouselText-body">
              Пройдите наши бесплатные онлайн курсы по маникюру!
            </span>
          </p>
        </div>
        <div className="carouselBlock">
          <img alt="" src='../../../catLogo1.jpg' />
          <p className="carouselText carouselText3">
            <span className="carouselText-title">
              ЕСТЬ ВОПРОСЫ, ПОЖЕЛАНИЯ, ЗАМЕЧАНИЯ?
            </span>
            <span className="carouselText-body">
              У меня кончилась фантазия, поэтому тут просто буквы
            </span>
          </p>
        </div>
      </Carousel>
    );
  }
};

export default CatCarousel;