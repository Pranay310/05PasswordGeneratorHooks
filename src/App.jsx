import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [noChar, setNoChar] = useState(8);
  const [num, setNum] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [inText, setInText] = useState("")

  // const passRef = useRef(inText);

  const generate = useCallback( function(){
    let genPass = "";
    let str = "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(num){str += "1234567890"};
    if(symbols){str += "!@#$%^&*" };
    
    for (let index = 1; index <= noChar; index++) {
      let genNum = Math.floor(Math.random()*str.length)
      genPass += str[genNum];
      
    }
    setInText(genPass)
  },[noChar, num, symbols, setInText])

  const copyPass = useCallback(()=>{
    //  passRef.current?.select();
    //  passRef.current.setSelectionRange(1,2)
    window.navigator.clipboard.writeText(inText);
  },[inText])

  useEffect(()=>{generate();},[noChar, num, symbols, generate])
   
  return (

    <div className=' bg-slate-400'>
      <h1 className='text-4xl bg-cyan-200 text-black'>Password Generator</h1><br></br>
      <input 
      type='text'
      value={inText}
      readOnly 
      className='text-1xl bg-white text-black border-2 border-blue-300 border-solid '
      ></input>
      <button className=' h-10 w-20 bg-red-600 py-1' onClick={copyPass}>Copy</button><br></br>
      <button></button><br></br>
      <input type='range'
      // value={noChar} 
      className=' mr-5' min={8} max={100} 
      onChange={(e)=>{setNoChar(e.target.value)}}></input><label>{noChar} No.Of.Char</label>
      <input type='checkBox' className=' m-5 py-5 h-4 w-5' onClick={(e)=>{setNum((prev) => !prev)}}></input><label>Number</label>
      <input type='checkBox' className=' m-5 py-5 h-4 w-5' onClick={(e)=>{setSymbols((prev) => !prev)}}></input><label>Alphabates</label>
    </div>

  )
}

export default App
