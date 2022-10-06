import React from 'react'
import Jumbotron from './Jumbotron'
import Action from './Action'
import Comedy from './Comedy'
import Romantic from './Romantic'
import './Home.css'

const fetchUrl = 'http://localhost:8000';
// const Youtube = 'https://www.youtube.com/watch?v='

const Home = () => {
  return (
    <div className='home'>
      <Jumbotron />
      <Action fetchUrl={fetchUrl} />
      <Comedy fetchUrl={fetchUrl} />
      <Romantic fetchUrl={fetchUrl} />
    </div>
  )
}

export default Home

// import ReactPlayer from 'react-player'
// import { TbListDetails } from 'react-icons/tb'
// import { BsPlayCircle } from 'react-icons/bs'
// import Zoom from 'react-reveal/Zoom';
// import { Carousel } from '../Carousel';

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

