import axios from 'axios';
import { useState, useEffect  } from 'react';
import { Routes, Route, useSearchParams  } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Header/Footer'
import './App.css'
import { useAuth } from './Hoc/context';
import Home from './Components/Home';
import Landing from './Components/Landing';
import ActionDetails from './Components/Details/ActionDetails';
import ComedyDetails from './Components/Details/ComedyDetails';
import RomanticDetails from './Components/Details/RomanticDetails';
import SearchView from './Components/SearchView'
import Play from './Components/Play';

const App = () => {
     const [searchAction, setSearchAction] = useState([]);
     const [searchComedy, setSearchComedy] = useState([]);
     const [searchRomantic, setSearchRomantic] = useState([]);

     const [searchParams, setSearchParams] = useSearchParams({ q: ''});

     const query = searchParams.get("q");

     const searchData = () => {
          const actionUrl = 'http://localhost:8000/movies/action/'
          const comedyUrl = 'http://localhost:8000/movies/comedy/'
          const romanticUrl = 'http://localhost:8000/movies/romantic/'

          const getAction = axios.get(actionUrl)
          const getComedy = axios.get(comedyUrl)
          const getRomantic = axios.get(romanticUrl)

          axios
               .all([getAction, getComedy, getRomantic])
               .then(
                    axios.spread((...allData) => {
                         const allActionData = allData[0].data
                         const allComedyData = allData[1].data
                         const allRomanticData = allData[2].data

                         setSearchAction(allActionData)
                         setSearchComedy(allComedyData)
                         setSearchRomantic(allRomanticData)
                    })
               )

     }
 
     const arr1 = searchAction
     const arr2 = searchComedy
     const arr3 = searchRomantic
     const merged = [...arr1, ...arr2, ...arr3];

     useEffect(() => {
          searchData()
     })
     const { user } = useAuth()
     if(user) {
          return(
               <div>
                    <Header 
                    query={query}
                    setSearchParams={setSearchParams}
                    />
                    <Routes>
                         <Route exact path='/' element={<Home />} />

                         {/* Start Details */}
                         <Route exact path='/action-details/:id' element={<ActionDetails />} />
                         <Route exact path='/comedy-details/:id' element={<ComedyDetails />} />
                         <Route exact path='/romantic-details/:id' element={<RomanticDetails />} /> 
                         {/* Stop Details */}

                         <Route exact path="/search" element={<SearchView 
                              searchResults={merged} 
                              query={query} 
                              
                         />} />
                         <Route exact path="/play/:id" element={<Play />} />
                    </Routes>
                    <Footer />
               </div>
          )
     }
     else{
          return(
               <div>
                    <Header />
                    <Routes>
                         <Route exact path='/' element={<Landing />} />
                    </Routes>
               </div>
          )
     }

}
export default App