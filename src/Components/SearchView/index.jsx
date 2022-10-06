import React from 'react';
import { Container, H1 } from '../styled';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { CgDetailsMore } from 'react-icons/cg'
import { GrPlay } from 'react-icons/gr'

import './search.css';
const SearchView = ({ query, searchResults }) => {
  const fetchUrl = 'http://localhost:8000';
  const searchResultShow = (items, idx) => (
  <div className='card bg-image hover-overlay' key={idx}>
    <img src={`${fetchUrl}${items.poster_path}`} alt={`${items.original_title}`} />
    <div 
      className="card__desc mask"
      style={{
        background: 'linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)',
      }}
    >
      <Fade bottom>
      <span>{items.original_title}</span>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
      <Link to={`/details/${items.slug}`}><CgDetailsMore style={{ color: '#d61b05' }} /></Link>
      
      <Link to={`/play/${items.slug}`}><GrPlay style={{ color: '#ff0404' }} /></Link>
      
      </div>
      </Fade>
    </div>
    
  </div>
  )
  return (
    <div className='row__detail '>
      <Container>
          <H1>Searching for : {query}</H1>

      <div id="container">
        {searchResults.filter((val) => {
          if(query === "") {
            return val
          } else if (val.original_title.toLowerCase().includes(query.toLowerCase())){
            return val
          }
        }).map(make => searchResultShow(make))}
      </div>
      </Container>
    </div>
  )
}

export default SearchView
