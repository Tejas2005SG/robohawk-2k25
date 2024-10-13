'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import "./main.css"
import Navbar from "@/components/Navbar/navbar.jsx";
// import Navbar2 from "@/components/Navbar/navbar2.jsx";
import pccoer from "@/images/pccoer.png";
import pcet from "@/images/pcet.png";
import CircleAni from "@/components/circle/circle.jsx";
import WelcomeCircle from "@/components/animations/welcome-circle/welcomecir.jsx";
import StartBtn from "@/components/buttons/btnstart/btn.jsx";




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
    <div>
      <div id="particles-js" style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <div className='main-container'>
          <div className='absolute'>
            <div className='absolute '>
              <Navbar />
            </div>

          </div>

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
          <div className='welcome-circle absolute'>
          <WelcomeCircle/>

          </div>
          


          {/* <Image className='main-char inline' src={MainChar} /> */}

          <div className="heading-container " >
            <h1 className="main-heading text-white ">RoboHawk</h1>
          </div>

          {/* <Image className='absolute hawk-img' src={Hawk}/> */}
          <div className='circle absolute'>
            <CircleAni />
          </div>

          <div className='start-btn absolute' >
            <StartBtn/>
          </div>




        </div>



      </div>

     




    </div>


  );
};

export default ParticleComponent;
