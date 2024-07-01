import React, { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  // const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  // const changeBackgroundColor = () => {
  //   const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  //   setBackgroundColor(randomColor);
  // };

  // return (
  //   <div style={{ backgroundColor: backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //     <button onClick={changeBackgroundColor} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer',backgroundColor:'whitesmoke' }}>Change Background Color</button>
  //   </div>
  // );
  const [length,setLength]= useState(8)
  const [numberAllowed,setnumberAllowed]= useState(false)
  const [charAllowed,setcharAllowed]= useState(false)
  const [password , setpassword ] = useState('')

  // use callback hook 
  const generatePassword = useCallback(()=> {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+='0123456789'
    if(charAllowed) str+='!@#$%^&*()_+'

    for (let i = 1 ; i < length ; i++){
      const index = Math.floor(Math.random()* str.length+1)
      pass += str.charAt(index)
    }
    setpassword(pass)

  },[length,numberAllowed,charAllowed])


  // useeffect hooks
  useEffect(()=>{generatePassword()},[length,numberAllowed,charAllowed])

    const copyPasswordToClipBoard = () =>{
      window.navigator.clipboard.writeText(password)
      passwordRef.current.select() 
    }

    const passwordRef = useRef(null)
  return(
  <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>

      <input type="text" value={password} className='outline-none w-full py-1 px-3'placeholder='Password' readOnly
      ref = {passwordRef}
      />
      <button
      onClick={copyPasswordToClipBoard }
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <input type="range" min={6} max={20} value={length} 
      className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} name=''/>

    </div>
    <div className='flex items-center gap-x-2'>
      <input type="checkbox"
      defaultChecked={numberAllowed} 
      onChange={()=> setnumberAllowed((prev)=>!prev)}/>
      <label>Numbers</label>
    </div>
    <div className='flex  gap-x-2'>
      <input type="checkbox"
      defaultChecked={charAllowed} 
      onChange={()=> setcharAllowed((prev)=>!prev)}/>
      <label>Characters</label>
    </div>
  </div>
  
  </>);
}

export default App;
