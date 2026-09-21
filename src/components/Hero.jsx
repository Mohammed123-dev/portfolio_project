import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);


  {/*// =============================================================================================================   */ }


  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);



  {/*// =============================================================================================================  */ }


  const FloatingElement = ({ delay, size, color, position }) => (
    <div className="floating-element"
      style={{
        animationDelay: `${delay}s`,
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color}, transparent)`,
        ...position,
      }} />);


  {/* // 1 Enhanced Floating Background Elements   */ }


  return (
    <section className="hero-section">

      <FloatingElement
        delay={0}
        size={80}
        color="rgba(59, 130, 246, 0.15)"
        position={{ top: '8%', left: '8%' }} />




      <FloatingElement
        delay={1.5}
        size={60}
        color="rgba(139, 92, 246, 0.12)"
        position={{ top: '75%', left: '12%' }} />





      <FloatingElement
        delay={2.5}
        size={100}
        color="rgba(6, 182, 212, 0.1)"
        position={{ top: '15%', right: '8%' }} />




      <FloatingElement
        delay={0.8}
        size={45}
        color="rgba(236, 72, 153, 0.13)"
        position={{ bottom: '15%', right: '15%' }} />




      <FloatingElement
        delay={3}
        size={35}
        color="rgba(245, 158, 11, 0.11)"
        position={{ top: '50%', left: '5%' }} />




      <FloatingElement
        delay={2}
        size={55}
        color="rgba(16, 185, 129, 0.09)"
        position={{ top: '40%', right: '5%' }} />


      {/* //  =============================================================================================================         */}

      {/*  // Left Section  */}

      <div className="hero-container">

        <div className="hero-left-section"

          style={{ transform: `translateX(${isVisible ? 0 : -100}px)`, opacity: isVisible ? 1 : 0, }}>

          <h1 className="glitch-text hero-heading">

            <span className="hero-text-reveal"> Hi, I'm </span>{' '}

            <span className="gradient-text hero-name-highlight"> Mohammed Maibu </span>

          </h1>




          <p className="typewriter hero-subtitle" style={{ fontSize: '24px' }}>  Java Full Stack Developer </p>


          <p className="hero-description">Passionate about crafting exceptional digital experiences
            with cutting-edge technologies and innovative solutions.</p>

          <ul className="hero-bullet-list">

            {[
              ' Skilled in Java and Spring Boot for developing robust and scalable backend applications',
              ' Experienced in React and JavaScript for building responsive and interactive web applications',
              ' Strong knowledge of HTML and CSS for creating clean, responsive, and user-friendly interfaces',
              ' Proficient in MySQL and database management for designing and handling application data',
              ' Strong foundation in Data Structures and Algorithms with problem-solving and logical thinking skills',

            ].map((point, index) => (

              <li key={index} className="slide-in-left hero-bullet-item"

                style={{ animationDelay: `${1 + index * 0.2}s`, }} >


                <span className="pulse-icon hero-bullet-icon"> 💻 </span>

                <span> {point} </span>

              </li>

            ))}

          </ul>

        </div>


        {/* // =============================================================================================================  */}


        {/* // Right Section - Enhanced 3D Image  */}

        <div className="hero-right-section">

          <div className="hero-image-3d hero-image-wrapper"

            style={{
              transform: `
                  perspective(1000px)
                  rotateX(${mousePosition.y * 8}deg)
                  rotateY(${mousePosition.x * 8}deg)
                  translateZ(${isVisible ? 0 : 200}px)`,
              opacity: isVisible ? 1 : 0,
            }}>

            <div className="floating-container hero-image-container">

              {/* //My IMAGE LINK  */}

              <img src="https://plain-apac-prod-public.komododecks.com/202609/18/BE2ankorDFP2yqxQr0no/image.jpg"
                alt="Mohammed Maibu - Java Full Stack Developer" className="hero-profile-image hero-profile-image-3d" />




              {/* // Enhanced Rotating Rings  */}

              <div className="hero-ring-1 rotating-ring"></div>

              <div className="hero-ring-2 rotating-ring-reverse"></div>

              <div className="hero-ring-3 rotating-ring"></div>



              {/* // Enhanced Floating Particles  */}

              <div className="hero-particle-1 floating-particle"></div>

              <div className="hero-particle-2 floating-particle"></div>

              <div className="hero-particle-3 floating-particle"></div>

              <div className="hero-particle-4 floating-particle"></div>

            </div>




            {/* // Enhanced 3D Shadow  */}

            <div className="hero-shadow-3d"></div>


          </div>

        </div>

      </div>

    </section>


  );

};

export default Hero;