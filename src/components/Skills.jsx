import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import "./Skills.css"

import angular from "../assets/skills/angular-skill.svg";
import java from "../assets/skills/java-skill.svg";
import django from "../assets/skills/django-skill.svg";
import jquery from "../assets/skills/jquery.svg";
import handlebars from "../assets/skills/handlebars.webp";
import cpp from "../assets/skills/cpp-skill.webp";
import js from "../assets/skills/js-skill.webp";
import python from "../assets/skills/python-skill.webp";
import web from "../assets/skills/web-skill.webp";

const Skills = () => {
    return (

        <div id="skills">

            <h1>My Arsenal ;)</h1>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={5}
                loop={true}   
                speed={1000}  
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                className="skill-slider"
            >

                <SwiperSlide className='skill-slide'>
                    <img src={java} alt='java'/>
                    <span >Java</span>
                </SwiperSlide>
                <SwiperSlide className='skill-slide'>
                    <img src={angular} alt='angular'/>
                    <span >Angular</span>
                </SwiperSlide>
                <SwiperSlide className='skill-slide'>
                    <img src={django} alt='django'/>
                    <span >Django</span>
                </SwiperSlide>
                <SwiperSlide className='skill-slide'>
                    <img src={jquery} alt='jquery'/>
                    <span >jQuery</span>
                </SwiperSlide>
                <SwiperSlide className='skill-slide'>
                    <img src={handlebars} alt='handlebars'/>
                    <span >Handlebars</span>
                </SwiperSlide>
                <SwiperSlide className='skill-slide'>
                    <img src={cpp} alt='cpp'/>
                    <span >C++</span>
                </SwiperSlide>
                <SwiperSlide className='skill-slide'>
                    <img src={js} alt='js'/>
                    <span >JavaScript</span>
                </SwiperSlide>
                <SwiperSlide className='skill-slide'>
                    <img src={python} alt='python'/>
                    <span >Python</span>
                </SwiperSlide>
                <SwiperSlide className='skill-slide'>
                    <img src={web} alt='web'/>
                    <span >Web Development</span>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Skills

