import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [noChar, setNoChar] = useState(8);
  const [num, setNum] = useState(false);
  const [symbols, setsymbols] = useState(false);
  const [inText, setInText] = useState("")

  const generate = useCallback( function(){
    let genPass = "";
    let str = "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(num){str += "1234567890"};
    if(symbols){str += "!@#$%^&*"};
    
    for (let index = 0; index <= noChar; index++) {
      let genNum = Math.floor(Math.random()*str.length+1)
      genPass += str[genNum];
      
    }
    setInText(genPass)
  },[noChar, num, symbols, setInText])
   
  return (

    <div className=' bg-slate-400'>
      <h1 className='text-4xl bg-cyan-200 text-black'>Password Generator</h1><br></br>
      <input 
      type='text'
      value={inText} 
      className='text-1xl bg-cyan-600 text-black border-2 border-blue-300 border-solid '
      ></input><br></br>
      <button></button><br></br>
      <input type='range'
      value={noChar} 
      className=' mr-5' min={8} max={100} 
      onChange={(e)=>{setNoChar(e.target.value)}}></input><label>{noChar} No.Of.Char</label>
      <input type='checkBox' className=' m-5 py-5 h-4 w-5' onClick={()=>{setNum()}}></input><label>Number</label>
      <input type='checkBox' className=' m-5 py-5 h-4 w-5' onClick={()=>{setNum()}}></input><label>Alphabates</label>
    </div>

  )
}

export default App
