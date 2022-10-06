import { useState, useEffect } from 'react'
import axios from 'axios';
import { ButtonCus } from '../../styled'
import { AiFillPlayCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'



const Jumbotron = () => {
     const [showDetail, setShowDetail] = useState("");

     const fetchUrl = 'http://localhost:8000'
     useEffect(() => {
          async function Latest() {
               const actionmovie = await axios.get(`${fetchUrl}/movies/action`)
               setShowDetail(actionmovie.data[Math.floor(Math.random() * actionmovie.data.length)])
          }
          Latest()
     }, [fetchUrl])

     return(
          <section>
                    <img alt="" src={`${fetchUrl}${showDetail?.poster_path}`}/>

                    <div className='flex'>
                         <Link to={`/details/${showDetail.slug}`}>
                              <ButtonCus>Details</ButtonCus>
                         </Link>

                         <Link to={`/play/${showDetail.slug}`}>
                              <AiFillPlayCircle className='icon' />
                         </Link>
                    </div>
                    <div className='blur__card'></div>
          </section>
     )
}

export default Jumbotron


