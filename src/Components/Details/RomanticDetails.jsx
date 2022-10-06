import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactPlayer from 'react-player/lazy'
import './details.css'
import { Container, Span, H1 } from '../styled'
// import { AiFillPlayCircle } from 'react-icons/ai'


const RomanticDetails = () => {
     const { id } = useParams()
     const [x, setX] = React.useState({
          details: {},
          overview: true,
          trailer: false,
     })

     const fetchUrl = 'http://localhost:8000'

     React.useEffect(() => {
          async function getDetails() {
               const res = await axios.get(`${fetchUrl}/movies/romantic/${id}`)
               setX(prev => ({
                    ...prev,
                    details: res.data
               }))
          }
          getDetails();
     })

     const Youtube = 'https://www.youtube.com/watch?v='

     const Url = `${Youtube}${x.details.youtube_trailer_id}`
     const Trailer = () => { 
          setX(prev => ({
               ...prev,
               overview: false,
               trailer: true,
          }))
     }
     const OverView = () => { 
          setX(prev => ({
               ...prev,
               overview: true,
               trailer: false,
          }))
     }
     
     return (
          <Container>
            <div style={{ margin: '9% 0'}}>
               <div className=''>
                    <div className='infor__det'>
                         <H1>Find More Info</H1>
                    </div>
               </div>

               <div className='info__overs info'>
                    <div className='main_flex'>
                         <img src={`${fetchUrl}${x.details?.poster_path}`} alt={x.details?.original_title} />
                    </div>
                    <div className='main_flexy'>
                         <div>
                              <h1>{x.details?.original_title}</h1>
                              <div style={{ display: 'grid', padding: '1rem 0' }}>
                                   <div style={{ display: 'flex', padding: '0.71rem 0', font: 'caption' }}>
                                        <span style={{ flex: '1' }}>Category</span> 
                                        <span style={{ flex: '3' }}>{x.details?.category}</span>
                                   </div>
                                   <div style={{ display: 'flex', padding: '0.71rem 0', font: 'caption' }}>
                                        <span style={{ flex: '1' }}>Duration</span> 
                                        <span style={{ flex: '3' }}>{x.details?.duration}</span>
                                   </div>
                                   <div style={{ display: 'flex', padding: '0.71rem 0', font: 'caption' }}>
                                        <span style={{ flex: '1' }}>Language</span> 
                                        <span style={{ flex: '3' }}>{x.details?.original_language}</span>
                                   </div>
                                   <div style={{ display: 'flex', padding: '0.71rem 0', font: 'caption' }}>
                                        <span style={{ flex: '1' }}>Release Date</span> 
                                        <span style={{ flex: '3' }}>{x.details?.release_date}</span>
                                   </div>
                                   <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Span onClick={OverView} >Overview</Span> 
                                        <Span onClick={Trailer}>Trailer</Span>
                                   </div>
                              </div>
                              {x.overview ? <p style={{ fontSize: '14px', fontFamily: 'sans-serif' }}>{x.details?.overview}</p>
                              :       
                               <ReactPlayer 
                                        url={Url} 
                                        width="100%"
                                        playsinline={true}
                                        controls={true}
                                   /> 
                         
                              }
                              
                         </div>
                    </div>
               </div>
            </div>
          </Container>
     )
}

export default RomanticDetails