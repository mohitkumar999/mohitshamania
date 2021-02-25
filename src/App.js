import React, {useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css'



function App() {
    useEffect(() => {
        M.AutoInit();
      },[])
      
    
    return (
        <>
            <Navbar />
            <Footer/>
        </>
    )
}

export default App
