import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import axios from 'axios'
import Fade from 'react-reveal/Fade';
import { CgDetailsMore } from 'react-icons/cg'
import { GrPlay } from 'react-icons/gr'
import { Container, H1 } from '../../styled';


const Romantic = (prop) => {
     const settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
         const [ comedy, setComedy ] = useState([])
       
         useEffect(() => {
          axios
            .get(`${prop.fetchUrl}/movies/romantic/`)
            .then(res => setComedy(res.data))
            // .then(res => console.log(res.data))
            .catch(error => console.log(error))
         })
    
    const renderItems = (items, idx) => (
      <div className='cardm' key={idx} >
        <img src={`${prop.fetchUrl}${items.poster_path}`} alt={`${items.original_title}`} />
        <div className="card__desc" key={idx}>
          <Fade bottom>
          <span>{items.original_title}</span>
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
          <Link to={`/romantic-details/${items.slug}`}><CgDetailsMore style={{ color: '#d61b05' }} /></Link>
          
          <Link to={`/play/${items.slug}`}><GrPlay style={{ color: '#d61b05' }} /></Link>
          
          </div>
          </Fade>
        </div>
      </div>
    )

     return (
          <div className='action'>
               <Container>
               <H1>Romantic</H1>

               <div>
               <Slider {...settings}>
                    {comedy.map(item => renderItems(item))}
               </Slider>
               </div>

               </Container>
          </div>
     )
}

export default Romantic