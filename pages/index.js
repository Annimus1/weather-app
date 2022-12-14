import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import Weather from '../components/Weather';
import Spinner from '../components/Spinner';
import Error from '../components/Error';


export default function Home() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;
  
  function fetchWeather (e){
    e.preventDefault();

    setLoading(true);
    
    axios.get(url)
    .then( (response) => {
        setWeather(response.data)
    })
    .catch ( (error) => {
      setWeather({error:true})
      }
    );


    
    setCity("");
    setLoading(false);
    document.getElementById("input").value = "";
  }
   
  if(loading){
    <Spinner />
  }else{
    return (
      <div className="">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />
        
        {/* Background image */}
        <Image 
          src={"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} 
          alt="Weather"
          fill="fixed"
          className='object-cover' 
        />

        {/* Search */}

        <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
          <form 
            onSubmit={fetchWeather}
            className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
          <div >
            <input 
              id='input'
              className='bg-transparent border-none text-white focus:outline-none text-2xl'
              placeholder='Search city' 
              onChange={(e)=>{setCity(e.target.value)}}
              />
            </div>
              <button 
                onClick={fetchWeather}
              >
                <BsSearch size={25}/>
              </button>
          </form>
        </div>

        {/* Weather */}
        { weather.main && <Weather data={weather} />}
        
        {/* Handling Error */}
        { weather.error && <Error /> }


      </div>
    )
  }
}