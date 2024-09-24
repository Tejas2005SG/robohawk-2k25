import React from 'react';
import MainChar from "@/images/main-char.png";
import Image from 'next/image';
import "./circle.css";

function Circle() {
    return (
        <div className='main-contianer'>
              <div className="container">
            <div className="imgcont">
                <Image className='main-char' src={MainChar} alt="Main Character" />
            </div>

            {/* Dynamically generating the spans */}
            {[...Array(50)].map((_, i) => (
                <span key={i} style={{ '--i': i }}></span>
            ))}
        </div>

        </div>
      
    );
}

export default Circle;
