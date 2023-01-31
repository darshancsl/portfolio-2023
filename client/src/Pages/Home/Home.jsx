import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className='home d-flex justify-center align-center'>
      <div className='bg-image'></div>
      <div className='content'>
        <p className='caption'>Hi! I'm a</p>
        <h1 className='title'>Front End Developer</h1>
        <p className='desc'>
          Hi. I’m Darshan, A Front-end Developer with more than 3 years
          experience.
        </p>
        <Link className='primary-Btn' to='/contact'>
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Home;
