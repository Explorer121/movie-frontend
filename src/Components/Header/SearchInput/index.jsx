import React from 'react'
import { useNavigate } from 'react-router-dom'
import Slide from 'react-reveal/Slide';
import { IoIosArrowBack } from 'react-icons/io'


const SearchInput = ({ query, setSearchParams, toggleDrawer }) => {
     const submitSearchInput = (e) => {
          e.preventDefault();
     }

     const navigate = useNavigate()

     const updateSearch = () => {
          navigate('/search', { replace: true })
     }


     return (
          <Slide  
               right 
               opposite
          >
               
               <div
               className='search__div'
               >
                    <IoIosArrowBack 
                    onClick={toggleDrawer}
                    className='search__icons cancel' />
                    <form 
                     onSubmit={submitSearchInput}>
                         <input type="search" 
                         placeholder='Search ...' 
                         value={query}
                         onClick={updateSearch}
                         onChange={e => setSearchParams({ q: e.target.value })}
                         className="search__input" />
                    </form>
               </div>

          </Slide>
     )
}

export default SearchInput