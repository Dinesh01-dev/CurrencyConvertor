import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [currency,setCurrency]=useState([])
  const [fromCurrency, setFromCurrency]=useState('1inch')
  const [toCurrency,setToCurrency]=useState('1inch')
  const [fromValue,setFromValue]=useState(0)
  const [tovalue,setToValue]=useState(0)

  console.log(toCurrency)

  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
    .then((response)=>response.json())
    .then((data)=>{
      setCurrency(data)
    })
  },[])

    function convertMoney(){
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
    .then((response)=>response.json())
    .then((data)=>{
      setToValue(fromValue * data[fromCurrency][toCurrency])
    })
  }


   
  return (
    <>
        
     <div className='w-screen h-screen bg-[url(https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_960_720.jpg)] flex justify-center items-center flex-col' id='parent'>
      <div className='w-96 h-35 bg-blue-800 p-4 flex item-center' id="box1">

      <div className=' rounded-2xl ' id="first">
        <div id="first_label">
      <label className='text-white'>From</label>

        <select className='bg-white' onChange={(e)=>setFromCurrency(e.target.value)}>
          {
            Object.entries(currency).map(([code,name])=>
              <option key={code} value ={code}>
                {name}</option>
   
            )
          }
         
        </select>
        </div>
        <br />
      <input className='bg-white'type='text' value={fromValue} placeholder='Enter the currenecy amount' onChange={(e)=>setFromValue(e.target.value)} ></input>
      
      <br/>
      
      </div>
      
      </div>
      <br/>
      <button onClick={convertMoney}>Convert</button>

<br/>
     
      <div className='w-96 h-35 bg-blue-800 p-4 flex item-center' id="box1">
      <div className=' rounded-2xl ' id="second">
        <div id="second_label">
      <label className='text-white'>From</label>
        
        <select className='bg-white' onChange={(e)=>setToCurrency(e.target.value)}>
          {
            Object.entries(currency).map(([code,name])=>
              <option key={code} value ={code}>
                {name}</option>
   
            )
          }
        </select>

      </div>
      <br/>
      <input className='bg-white' type='tel' value={tovalue} disabled>
      </input>

     </div>
     </div>
     </div>
     
    </>
  )
}


export default App
