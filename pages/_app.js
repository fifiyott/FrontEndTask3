import Header from '../components/headers'
import '../styles/globals.css'
import React, { useState } from 'react';
import data from "../data-dummy/data.json";

function MyApp({ Component, pageProps }) {

  const [ toDoList, setToDoList ] = useState(data);
  
  return (
    <div>
      <Header></Header>
      <Component {...pageProps} />
    </div>
   
  )
}

export default MyApp
