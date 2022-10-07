import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Center, H1, P } from '../styled'
import './Landing.css'
import Footer from '../Header/Footer'
import LandingLogo from '../../assets/netflix.jpg'


const Landing = () => {

     const EmailSubHandler= e => {
          e.preventDefault();
     }

     const emailInputHandler = e => {
          console.log(e.target.value)
     }
  return (
     <div className='landing'>
          <div
               className='landing__content'
               style={{
                    backgroundImage: `url(${LandingLogo})`,
                    backgroundPosition: 'center',
                    backgroundOrigin: 'content-box',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundClip: 'content-box',
               }}
          >
               <Container>
                    <Center style={{ padding: '20% 0' }}>
                         <H1>Watch unlimited movies, Trailers, TV shows, and more.</H1>
                         <P>Start anywhere. Cancel anytime.</P>
                         <P>Are You Ready to watch?Create your membership.</P>
                         <form onSubmit={EmailSubHandler} className="form__email">
                            <input type="email" onChange={emailInputHandler} placeholder="Email Address ..." />
                              <Button>Submit</Button>
                         </form>
                    </Center>

               </Container>

          </div>
      <div className="enjoy">
          <div>
               <h1>Enjoy on your TV.</h1>
               <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div>
               <img src="https://gifdb.com/images/thumbnail/mr-bean-movie-date-qqe08n8o1gjdhppm.gif" alt="Explorer" />
          </div>
      </div>
      <div className="enjoy">
          <div className='div'>
               
          <div class="flip-box">
               <div class="flip-box-inner">
                    <div class="flip-box-front">
                         <img src="https://explorer-portfolio.explorer233.repl.co/static/images/bgme.jpg" alt="Explorer" />
                         </div>
                    <div class="flip-box-back">
                         <iframe id="inlineFrameExample"
                              title="Explorer"
                              width="100%"
                              height="100%"
                              src="https://explorer-portfolio.explorer233.repl.co/">
                         </iframe>
                    </div>
               </div>
          </div>



          </div>
          <div className='div center'>
               <h1>Dev.</h1>
               <p>Your portfolio can be a space for you to express yourself, amaze any future employers, and get your work noticed.</p>
               <Link to="https://explorer-portfolio.explorer233.repl.co/" style={{ color: '#FFF', textDecoration: 'none', textTransform: 'uppercase' }}>Link</Link>
          </div>
      </div>
               <Footer />
    </div>
  )
}

export default Landing
