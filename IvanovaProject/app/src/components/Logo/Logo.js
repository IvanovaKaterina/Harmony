import React from 'react';
import CatCarousel from './CatCarousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Logo.css';

// const Logo = () => (
//   <div className="logo row">
//     <div className="logo-image">
//       <div className="logo-image-text">
//         <div className="logo-image-text-title">
//           СУПЕР ПРЕДЛОЖЕНИЕ ТОЛЬКО ДЛЯ МИЛЫХ "КОТИКОВ"
//         </div>
//         <div className="logo-image-text-info">
//           Женская стрижка от 1000р + маникюр в ПОДАРОК!
//         </div>
//       </div>
//     </div>
//   </div>
// )

const Logo = () => (
  <div className="logo">
    <CatCarousel />
  </div>
)
  
export default Logo;