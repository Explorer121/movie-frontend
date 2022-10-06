import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './header.css'
import Logo from '../../assets/tv.png'
import SearchInput from './SearchInput'
import { FiSearch } from 'react-icons/fi'
import { useAuth } from '../../Hoc/context';
import { Container, Button } from '../styled';


const Header = ({ query, setSearchParams }) => {
  

  const [ show, setShow ] = useState({
    toggleShow: false,
    headerShow: false,
  })
  
  const { logOut, user, googleSignIn } = useAuth()
  const handleScroll = () => {
    if(window.scrollY > 0) {
      setShow(prev => ({
        ...prev,
        headerShow: true
      }))
    } else {
      setShow(prev => ({
        ...prev,
        headerShow: false
      }))
    }
  }
  const toggleDrawer = () => {
    setShow(prev => ({
      ...prev,
      toggleShow: !show.toggleShow,
    }))
  }

  const toggleDrawerHide = () => {
    setShow(prev => ({
      ...prev,
      toggleShow: false
    }))
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[])
  const signInWithGoogle = async () => {
    try {
         await googleSignIn()
    } catch (error) {
         console.log(error.message)
    }
  }
  const handleSignOut = async () => {
    try {
      await logOut()
    }
    catch (err) {
      console.log(err.message)
    }
  }

  if(user) {
    return (
      <header
          style={{
            backgroundColor: show.headerShow ? 'RGB(224, 49, 35)': 'transparent',
            color: show.headerShow ? '#000' : '#fff',
            boxShadow:'none',
        }}
      >
        <Container>
          <div className='header__nav'>
  
            <Link to="/" 
          onClick={toggleDrawerHide}        className="logo__img">
              <img className='img' src={Logo} alt="Movie Logo" />
            </Link>
           
            <div className="header__account">
              
              <div 
              >
                {show.toggleShow ? 
                  <SearchInput
                  query={query}
                  setSearchParams={setSearchParams}
                  toggleShow={show.toggleShow}
                  toggleDrawer={toggleDrawer}
                /> 
              : 
              <FiSearch 
                onClick={toggleDrawer}
                className='search__icons' 
              />

                }
              </div> 
              { show.toggleShow ? 
              null
              :
              <>
              <img className="img_user" src={user.photoURL} alt={user?.displayName} />
  
              <Button type='button' onClick={handleSignOut} >Log Out</Button>
              </>
              }
            </div>
          </div>
        </Container>
      </header>
    )
  }

  else {
    return (
      <header
          style={{
            backgroundColor: show.headerShow ? 'RGB(224, 49, 35)': 'transparent',
            color: show.headerShow ? '#000' : '#fff',
            boxShadow:'none',
        }}
      >
        <div className='header__container'>
          <div className='header__nav'>
  
            <Link to="/" className="logo__img">
              <img className='img' src={Logo} alt="Movie Logo" />
            </Link>
  
            <Button onClick={signInWithGoogle} className="g-signin2 btn" data-onsuccess="onSignIn">
            Sign In
            </Button>
            
          </div>
        </div>
      </header>
    )
  }
  

}

export default Header
