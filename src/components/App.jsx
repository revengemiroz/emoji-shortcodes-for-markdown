import React from 'react';
import {Toaster} from "react-hot-toast";
import Heading from './Heading';
import Footer from './Footer';
import Search from './Searchbox';

function App() {
  
    return (
      <div>
        <Toaster />

        <Heading></Heading>

        <div className='main'>
        
        <Search></Search>
  
      </div>
      
      <Footer></Footer>
      
      </div>
      
    );
  }
  
  export default App;
  
