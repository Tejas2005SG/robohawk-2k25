'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import "./main.css"
import pccoer from "@/images/pccoer.png";
import pcet from "@/images/pcet.png";
import CircleAni from "@/components/circle/circle.jsx";
import Slide2 from "@/components/slide_2/imageSlider.jsx";



const ParticleComponent = () => {
  useEffect(() => {
    // Dynamically load particles.js and stats.js from the CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0';
    script.async = true;

    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            out_mode: 'out'
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="particles-js" style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <div className='main-container '>
          <div className='clg-info-container'>
            <div className='clg-info'>
              <Image src={pccoer} className="clglogo" />
              <div className="Name text-white">
                <p>Pimpri Chinchwad College Of Engineering & Research</p>
                <p className='text-center'>Presents</p>
              </div>
              <Image src={pcet} className='clglogo' />
            </div>

          </div>



          {/* <Image className='main-char inline' src={MainChar} /> */}

          <div className="heading-container flex justify-center top-[100px]" >
            <h1 className="heading text-white ">RoboHawk</h1>
          </div>

          <div className='circle w-full'>
            
              <CircleAni  />
            

          </div>




        </div>



      </div>
      <div className='w-full h-[100vh] absolute'>
        <Slide2 />
      </div>
    </>
  );
};

export default ParticleComponent;
