import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👋 Hey! I’m Vigneshwaran
              A Senior Software Developer with over three years of experience delivering high-quality, responsive web applications. 🚀 I specialize in PHP and Laravel development, with strong expertise in MySQL, JavaScript, HTML, CSS, and Bootstrap, enabling me to create efficient and user-friendly web solutions. ⚙️💻
              <br />
              <br />
              In addition to backend technologies, I’ve developed great skills in Node.js and React.js, positioning me as a well-rounded full-stack developer. 🎯 My passion for interactive design and staying updated with the latest trends 💡 drives me to continuously improve my solutions. I’ve had the opportunity to work with leading clients, ensuring that their projects are not only functional but also optimized for performance. 💼⚡
              <br />
              <br />
              I bring over three years of experience across various phases of web development, software product development, and automation testing. 🔍📈 My professional journey includes working at Aatmia Digital Marketing and Security Pvt Ltd, and my current role as a Programmer Analyst at HAL Simplify Solutions Pvt Ltd. 🏢💼
              <br />
              <br />
              🌟 Beyond coding, I enjoy writing Tamil poems ✍️, creating story plots for short films 🎬, and playing chess, cricket 🏏, and AAA video games 🎮. I thrive in an energetic and positive environment, where I aim to bring out the best in both myself and the teams I work with. 💪🎉
              </p>

            <ButtonLink
              url='/Vigneshwaran -RESUME.pdf'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;